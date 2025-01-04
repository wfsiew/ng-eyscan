var maprootdir = window.location.pathname.split('/')[1];

// css related variables
var dialogBorder = '1px solid #grey',
		dialogShadow = '5px 5px 25px #333';
/* check launching device */
function fn_check_device(){
		if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)){
			return 'mobile';
		}
		else{
			return 'desktop';
		}
}

function fnFormatDStoDMY(aDateString){
	var sReturn;
	if (aDateString==''){
		sReturn = '';
	}
	else{
		var tDate = new ctod(aDateString);
		sReturn = ('0'+tDate.getDate().toString()).slice(-2)+'/'+('0'+(tDate.getMonth()+1).toString()).slice(-2)+'/'+tDate.getFullYear().toString();
	}
	return sReturn;
}

function fndtoc(aDate){
  var tDate = aDate.getDate();
  var tMon = aDate.getMonth();
  var tYear = aDate.getFullYear();
  var arrayMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return ('0'+tDate).slice(-2) + "-" + arrayMonths[tMon] + "-" + tYear;
}

// function : u2dp (str)
  // Date created: 03-Mar-2010 
  // called by JS Code 
  // input param: str - type: String (Including Unicode char)
  // output value: If passed string contains any unicode char, It will be converted to Decimal representation.;
  // Example Unicode char will be mapped to &#NNNN;
  function u2dp(str)
  {
    ret = '';
    for (i=0; i<str.length; i++) {
      charCode = str.charCodeAt(i);
      if (charCode <= 127)
        ret += str.charAt(i);
      else
        ret += '&#' + charCode + ';';
    }
    return ret;
  }

  // function : d2u (str)
  // Date created: 03-Mar-2010 
  // called by JS Code 
  // input param: str - type: String (Non UNicode striung, With Decimal represenation of Unicode)
  // output value: Unicode string, If string contained any char unicode value more then 127;
  // Example decimal code char &#NNNN will be mapped to proper char;
  // Reverse fuynction for u2dp(str)
  function d2u(str)
  {
  	all = true;
  	matchResult=str.match (/&#(.*?);/g)
  			
  	if (matchResult)
  	{
  		for (i = 0, s = matchResult.length; i < s; i++)
  		{
  			str1 = matchResult[i]; 
  			matchResult1 = str1.match(/&#(.*?);/);
  			digits = matchResult1['1'];
  			out = '';
  			out += String.fromCharCode(digits);
  					
  			str = str.replace(str1, out);
  		}
  	}
			
  	if (all)
  	{
  		var myArray1 = new Array("&amp;", "&lt;", "&gt;", "&quot;", "&apos;", "&#45;");
  		var myArray2 = new Array("&","<",">","\"", "'", "-");
  		str = str.replace(myArray1, myArray2);
  	}
  	return str;
  } 
  

/* jqueryUI dialog version showMessage conversion */
// 1. combine showMessage and showMessageStatic
// 2. directly use original dialog_box.cfm by adding event callback to external dialog
// 3. add default button feature (default button Yes if only one button and No if there are yes/no buttons)
// 4. predefined ok/no/cancel buttons and return ok/no/cancel when invoked. (current showMessage only return true/false)
// 5. [suggestion] put this function on top window, so that every sub window can invoke it. currently have to specify which window to be used for the dialog showing
// 6. [usage]: codes modification is needed for those process which need the answer from message popup. have to use .then call back.
			/* e.g.
			displayMsg('XXXXX').then(function(answer){
				var t_answer=String(answer);
				switch (t_answer){
					case 'ok':
						break;
					case 'no':
						break;
					case 'cancel':
						break;
					default:
						break;
				}
			});
			*/
function displayMsg(msgNo,p1,p2) {
	var t_url = "/"+maprootdir+"/commonfiles/dialog_box.cfm?msg_no=";
	if (msgNo == '0'){
		// static msg
		var backslashn = new RegExp('\n', 'g');
    var msgconv = p1.replace(backslashn,'<br>');
    t_url += '0&msgText='+escape(u2dp(msgconv));
	}
	else{
		t_url += msgNo;
		if (p1){
			if(isNaN(p1))
	    {
	      var tempParam = escape(u2dp(p1));          
	    }
	    else
	    {
	      var tempParam= p1; 
	    }
	    t_url += '&p1='+tempParam;
		}
		if (p2){
			if (isNaN(p2)){
	      var tempParam2 = escape(u2dp(p2));          
	    }
	    else{
	      var tempParam2= p2;
	    }
	    t_url += '&p2='+tempParam2;
	  }
	}
	
	//if (msgNo==0)
	
	var __nhMessageBox_defer = jQuery.Deferred();
	top.$('#__nhMessageBox_iframe')[0].src=t_url;
	top.$('#__nhMessageBox_ok').off('click').click(function (){
		top.$('#__nhMessageBox').modal('hide');
		top.$('#__nhMessageBox_iframe')[0].src="";
		__nhMessageBox_defer.resolve('ok');
		return 'ok';
	});
	top.$('#__nhMessageBox_no').off('click').click(function (){
		top.$('#__nhMessageBox').modal('hide');
		top.$('#__nhMessageBox_iframe')[0].src="";
		__nhMessageBox_defer.resolve('no');
		return 'no';
	});
	top.$('#__nhMessageBox_cancel').off('click').click(function (){
		top.$('#__nhMessageBox').modal('hide');
		top.$('#__nhMessageBox_iframe')[0].src="";
		__nhMessageBox_defer.resolve('cancel');
		return 'cancel';
	});
	top.$('#__nhMessageBox_close').off('click').click(function() {
		__nhMessageBox_defer.resolve('close');
		return 'close';
	});
  top.$('#__nhMessageBox').modal({show: true, backdrop: 'static'});
  return __nhMessageBox_defer.promise();
}

function popWindow(aSrc, aParams, aIFrameSetting) {
	var t_src = aSrc + aParams;
	var t_url = "/"+maprootdir+ t_src;
	
	var h_pos = parseInt( aIFrameSetting.indexOf("h"));	//-- height position
	var vwidth = aIFrameSetting.substr(1, (h_pos-1));
	var vheight = aIFrameSetting.substr((h_pos+1));
	
	var __nhPopWindow_defer = jQuery.Deferred();
	top.$('#__nhPopWindow_iframe')[0].src=t_url;
	
	top.$('#__nhPopWindow_iframe')[0].width = vwidth + "px";
	top.$('#__nhPopWindow_iframe')[0].height = vheight + "px";
	
	top.$('#__nhPopWindow_ok').off('click').click(function (event, aData){
		top.$('#__nhPopWindow').modal('hide');
		top.$('#__nhPopWindow_iframe')[0].src="";
		if (typeof(aData)!='undefined'){
			__nhPopWindow_defer.resolve(aData);
		}
		else{
			__nhPopWindow_defer.resolve('ok');
		}
		return 'ok';
	});
	top.$('#__nhPopWindow_no').off('click').click(function (){
		top.$('#__nhPopWindow').modal('hide');
		top.$('#__nhPopWindow_iframe')[0].src="";
		__nhPopWindow_defer.resolve('no');
		return 'no';
	});
	top.$('#__nhPopWindow_cancel').off('click').click(function (){
		top.$('#__nhPopWindow').modal('hide');
		top.$('#__nhPopWindow_iframe')[0].src="";
		__nhPopWindow_defer.resolve('cancel');
		return 'cancel';
	});
	top.$('#__nhPopWindow_close').off('click').click(function() {
		top.$('#__nhPopWindow').modal('hide');
		top.$('#__nhPopWindow_iframe')[0].src="";
		__nhPopWindow_defer.resolve('close');
		return 'close';
	});
	
  top.$('#__nhPopWindow').modal({show: true, backdrop: 'static'});
  return __nhPopWindow_defer.promise();
}

function popAbout(aSrc, aParams, aIFrameSetting) {
	var t_src = aSrc + aParams;
	var t_url = "/"+maprootdir+ t_src;
	
	var h_pos = parseInt( aIFrameSetting.indexOf("h"));	//-- height position
	var vwidth = aIFrameSetting.substr(1, (h_pos-1));
	var vheight = aIFrameSetting.substr((h_pos+1));
	
	var __nhPopWindow_defer = jQuery.Deferred();
	top.$('#__nhAboutBox_iframe')[0].src=t_url;
	
	top.$('#__nhAboutBox_iframe')[0].width = vwidth + "px";
	top.$('#__nhAboutBox_iframe')[0].height = vheight + "px";
	
	top.$('#__nhAboutBox_ok').off('click').click(function (){
		top.$('#__nhAboutBox').modal('hide');
		top.$('#__nhAboutBox_iframe')[0].src="";
		__nhPopWindow_defer.resolve('ok');
		return 'ok';
	});
	top.$('#__nhAboutBox_no').off('click').click(function (){
		top.$('#__nhAboutBox').modal('hide');
		top.$('#__nhAboutBox_iframe')[0].src="";
		__nhPopWindow_defer.resolve('no');
		return 'no';
	});
	top.$('#__nhAboutBox_cancel').off('click').click(function (){
		top.$('#__nhAboutBox').modal('hide');
		top.$('#__nhAboutBox_iframe')[0].src="";
		__nhPopWindow_defer.resolve('cancel');
		return 'cancel';
	});
	
  top.$('#__nhAboutBox').modal({show: true, backdrop: 'static'});
  return __nhPopWindow_defer.promise();
}

function fn_check_mandatory(asFieldType,arrFields,arrLabels){
	var lbValid = true;
	switch( asFieldType ) {
		case "textbox":
			$.each( arrFields, function( index, value ) {
				if( $("#"+value).length ) {
					var t_displayMsg;
					if ($("#"+value).val()==""){
				  		t_displayMsg = top.displayMsg;
				  		t_displayMsg("SYS-00002", arrLabels[index].toUpperCase())
				  			.then(function(){
				  				fn_SetFocus($("#"+value));
				  			});
				  		lbValid = false;
				  		return false;
					}
				}
			});
			break;
						
		case "checkbox_grp": 
			lbValid = false;
			$.each( arrFields, function( index, value ) {
				if ($("#"+value).prop("checked")){
			  		lbValid = true;
			  		return false;
			  	}
			});
			break;
							
		case "checkbox": 
			lbValid = true;
			var t_displayMsg;
			$.each( arrFields, function( index, value ) {
				if( $("#"+value).length ) {
					if (!$("#"+value).prop("checked")){
				  		lbValid = false;
							//showMessage("PHM-00091", arrLabels[index]);
							t_displayMsg = top.displayMsg;
				  		t_displayMsg("SYS-00002", arrLabels[index].toUpperCase())
				  			.then(function(){
				  				fn_SetFocus($("#"+value));
				  			});
				  		return false;
				  	}
				}
			});
			break;
			
	};
	
	
	return lbValid;
}

function fn_check_blankrow(asFieldType,arrFields,arrLabels){
	var lbNullRow = true, lbNull;
	switch( asFieldType ) {
		case "textbox":
			$.each( arrFields, function( index, value ) {
				if( $("#"+value).length ) {
					var t_displayMsg;
					if ($("#"+value).val()=="")
				  		lbNull = true;
					else
						lbNull = false;
				}
				lbNullRow = lbNullRow && lbNull;
			});
			break;
						
		case "checkbox_grp": 
			lbNull = true;
			$.each( arrFields, function( index, value ) {
				if ($("#"+value).prop("checked")){
			  		lbNull = false;
					return false;
				} else {
					lbNull = true;
				}			  	
			});
			
			lbNullRow = lbNullRow && lbNull;
			break;
							
		case "checkbox": 
			$.each( arrFields, function( index, value ) {
				if( $("#"+value).length ) {
					if (!$("#"+value).prop("checked"))
						lbNull = true;
					else
						lbNull = false;
				}
				lbNullRow = lbNullRow && lbNull;
			});
			break;
			
	};
	
	return lbNullRow;
}

function fnChkPastDate(obj, msgCode){
	if (obj.value != ""){
      if(check_date(obj)){
        if(!check_date_now(obj, "LTE")){
          showMessage(msgCode);
          return false;
        }
      }
    }
}

//-- Validate numeric entries value range, input must be between anMinval and anMaxVal
//-- Parameters: asField:Form Field; asLabel:Label for the invalid message; anMinVal:valid minimum value; anMaxVal:valid maximum value
function fn_ChkNumValue(asField, asLabel, anMinVal, anMaxVal, aPop) {
var vnumval = parseFloat($("#"+ asField).val()) ;
	/* if max range is set to 0 validate only the minimum value */
	if (anMaxVal == 0) {
		if (vnumval < anMinVal){			
			if (aPop) {
				if (window.parent.displayMsg){
		  			t_displayMsg = window.parent.displayMsg;
		  		}
		  		else if (displayMsg){
		  			t_displayMsg = displayMsg;
		  		}
		  		else{
		  			t_displayMsg = showMessage;
		  		}
		  		t_displayMsg("NH-00015", asLabel)
		  			.then(function(){
		  				fn_SetFocus($("#"+asField));
		  			});
			} else { fn_SetFocus($("#"+asField)); }		
			
			return false;
		}
	}
	else {
		if (vnumval < anMinVal || vnumval > anMaxVal){
			if (aPop) {
				if (window.parent.displayMsg){
		  			t_displayMsg = window.parent.displayMsg;
		  		}
		  		else if (displayMsg){
		  			t_displayMsg = displayMsg;
		  		}
		  		else{
		  			t_displayMsg = showMessage;
		  		}
		  		t_displayMsg("NH-00015", asLabel)
		  			.then(function(){
		  				fn_SetFocus($("#"+asField));
		  			});
			} else { fn_SetFocus($("#"+asField)); }	
				
			return false;
		}
	}
	return true;
};

//-- Validate 2 date time entries
function fn_ChkDateValue(arrDate,arrTime,arrLabels, asConOperator, asFldFocus, asErrNo, abPopErrMsg) {
	var vValid = true;
	var vtimestart="", vtimeend="";

	if (arrTime.length > 0){		//-- check if time array has been passed;
		vtimestart = $("#"+ arrTime[0]).val();
		vtimeend = $("#"+ arrTime[1]).val();
	}

	var vdtstart = $("#"+ arrDate[0]).val() + " " + vtimestart;
	var vdtend = $("#"+ arrDate[1]).val() + " " + vtimeend;

	var vdate1 = Date.parse(to_js_format(vdtstart));
	var vdate2 = Date.parse(to_js_format(vdtend));

	switch( asConOperator ) {
		case "GTE":
			if ( Date.parse(to_js_format(vdtstart)) >= Date.parse(to_js_format(vdtend)) ) {
				vValid = false;
			}
			break;
			
		case "GT":
			if ( Date.parse(to_js_format(vdtstart)) > Date.parse(to_js_format(vdtend)) ) {
				vValid = false;
			}
			break;
			
		case "LT":
			if ( Date.parse(to_js_format(vdtstart)) < Date.parse(to_js_format(vdtend)) ) {
				vValid = false;
			}
			break;
			
		default:
			if ( Date.parse(to_js_format(vdtstart)) > Date.parse(to_js_format(vdtend)) ) {
				vValid = false;
			}
			break;		
	}

	
		if (window.parent.displayMsg){
  			t_displayMsg = window.parent.displayMsg;
  		}
  		else if (displayMsg){
  			t_displayMsg = displayMsg;
  		}
  		else{
  			t_displayMsg = showMessage;
  		}
	
		if (!vValid && abPopErrMsg) {
			if (asErrNo) {
				t_displayMsg( asErrNo ).then(function(){
	  				fn_SetFocus($("#"+asFldFocus));
				});
			} else {
	  			t_displayMsg("SYS-00041", arrLabels[1], arrLabels[0]).then(function(){
	  				fn_SetFocus($("#"+asFldFocus));
				});
			}
						
			return false;
		}
	
	
	return vValid;
};

function fn_SetButtonStatus(aButton,aStatus){
	aButton.prop('disabled',!aStatus);
	
}

function fn_SetObjectStatus(aObject,aStatus){
	aObject.attr('disabled',!(aStatus));
}

function fn_SetFocus(aObject){
	setTimeout(function(){
		aObject.focus();
	});
}

/*
function fn_ShowAnimator(aObject){
	var tTop =  (Math.floor(parseInt(document.body.offsetHeight) / 2) - Math.floor(aObject.height() / 2))+'px';
	var tLeft =  (Math.floor(parseInt(document.body.offsetWidth) / 2) - Math.floor(aObject.width() / 2))+'px';
	aObject.css('top',tTop).css('left',tLeft).css('display','block').css('visibility','visible');
}

function fn_HideAnimator(aObject){
	aObject.css('display','none').css('visibility','hidden');
}
*/

function fn_ShowAnimator(aParameter){
	
	var tTop =  (Math.floor(parseInt(top.window.innerHeight) / 2) - Math.floor(top.$('#__nhAnimator').height() / 2))+'px';
	var tLeft =  (Math.floor(parseInt(top.window.innerWidth) / 2) - Math.floor(top.$('#__nhAnimator').width() / 2))+'px';
	top.$('#__nhAnimator').css('top',tTop).css('left',tLeft);
	top.$('#__nhAnimator').modal({show: true, backdrop: 'static'});
}
function fn_HideAnimator(){
	top.$('#__nhAnimator').modal('hide');
}
function fn_ajaxFail(request, status, error){
	var message;
  var statusErrorMap = {
      '400' : "Server understood the request, but request content was invalid.",
      '401' : "Unauthorized access.",
      '403' : "Forbidden resource can't be accessed.",
      '500' : "Internal server error.",
      '503' : "Service unavailable."
  		};
  if (request.status) {
      message =statusErrorMap[request.status];
      if(!message) message="Unknown Error \n."
  }
  else if(error=='parsererror'){
      message="Error.\nParsing JSON Request failed.";
  }
  else if(error=='timeout'){
      message="Request Time out.";
  }
  else if(error=='abort'){
      message="Request was aborted by the server.";
  }
  else {
      message="Unknown Error.";
  }
  
  return displayMsg('0',message);
}

function fn_parseError(aErrorMessage){
	if (aErrorMessage.data != ''){
		return aErrorMessage.data;
	}
	else{
		return aErrorMessage.message;
	}
}

function fn_parseAJAXRespond(response){
	var returnMsg = {status: true, message: ""};
	$('<div id="__nhAJAXResponse" style="display: none"></div>').html(response).appendTo("body");
	if ($('#__nhAJAXreturnMsg').length){
		returnMsg.message = $('#__nhAJAXreturnMsg').val();
		$('#__nhAJAXResponse').remove();
	}
	else{
		returnMsg.status = false;
		top.$('#__nhErrorBox_content').html(response);
		$('#__nhAJAXResponse').remove();
		top.$('#__nhErrorBox').modal({show: true, backdrop: 'static'});
	}
	return returnMsg;
}

// function : executeReport (str, str, array, array, str, str, str, str)
// Function check allowed Unicode String. 
// input cfrFileName: str (text String -- the value of CFR filename.)
// input cfmFileName: str (text: String -- the value of directory path & filename of report query.)
// input reportParamName: array (Array -- the data array of report parameter names.)	
// input reportParamValue: array (Array -- the data array of report parameter values.)	
// input moduleName: str (text: String -- the module that calls the preview report.)
// input reportFormat: str (text: String -- the value to determine the report format.)
// input reportType: str (text String -- the value to determine if report is management (MGT) or standard.)
// input expFile: str (text: String -- the filename to be exported.)

function executeReport(cfrFileName, cfmFileName, reportParamName, reportParamValue, moduleName, reportFormat, reportType, expFile)
{
	if (String(reportFormat)==='undefined' || String(reportFormat)==='') reportFormat='PDF'
	if (String(reportType)==='undefined' || String(reportType)==='') reportType='STD'
	if (String(expFile)==='undefined' || String(expFile)==='') expFile=''
	if (String(moduleName)==='undefined' || String(moduleName)==='') moduleName=''
	
	// Format reportParamValue and add delimeter.
	var vReportParamValue = "";
	var arrLength = reportParamValue.length;
	for (i=1; i<arrLength; i++) {
		vReportParamValue = vReportParamValue + reportParamValue[i] + ((i != arrLength-1) ? ("|~|") : (""));
	}
		
	// Report file path.
	var vreportParms = "?cfm=" +cfmFileName+ "&cfr="+cfrFileName+"&rptParm="+reportParamName+"&rptParmVal="+escape(vReportParamValue)+"&reportformat=" + reportFormat + "&reporttype=" + reportType + "&expfile=" + expFile + "&moduleName=" + moduleName + "&";
	var vreportURL = "/"+maprootdir+"/commonfiles/reports/executeReport.cfm"+vreportParms;
	
	window.open(vreportURL, '_blank');
		
}

function fnSetObjectToLocalStorage(key,aObject){
	if (!key || !aObject) {return;}

  if (typeof aObject === "object") {
    aObject = JSON.stringify(aObject);
  }
  localStorage.setItem(key, aObject);
}

function fnGetObjectFromLocalStorage(key){
	var value = localStorage.getItem(key);

  if (!value) {return;}

  return JSON.parse(value);

}

function fnRemoveObjectFromLocalStorage(key){
	localStorage.removeItem(key);
}

function fnIsValidDataElement(aDataElementValue){
	return !(aDataElementValue==''||aDataElementValue=='undefined');
}

function fnFixHeader(aObj){
	var _innerWidth = aObj.innerWidth(), _scrollWidth = aObj[0].scrollWidth;
	var $table_display = aObj.children();
	var $table_header = $table_display.clone().find('tbody').remove().end().css('width',_scrollWidth);
	var $table_header_frame = $('<div style="position: fixed; left: 0px; top: 0px; width: '+_innerWidth+'; overflow-x: hidden;"></div>');
	$table_header.appendTo($table_header_frame)
	$table_header_frame.appendTo(aObj);
	$table_header.find("th").each(function(index) {
     $(this).css("min-width",$table_display.find("th").eq(index).width()+"px");
  })
	if (_innerWidth !== _scrollWidth){
		aObj.on('scroll',function(){
			$table_header_frame.scrollLeft($(this).scrollLeft());
		});
	}
}

/*ENCRPYT AND DECRYPT STRING START*/
function nhEncryptString(vPow)
{
  vPow = "vesa" + vPow + "lius";
  var vEw = "";
  var vEp = "";
  for (var i = 0; i < vPow.length; i++)
  {
    if (i % 2 == 0)
    {
      vEw = String.fromCharCode(vPow.charCodeAt(i) - 9);
    }
    else {
      vEw = String.fromCharCode(vPow.charCodeAt(i) + 9);
    }
    vEp = vEp + vEw;
  }
  return vEp;
}

function nhDecryptString(vPow)
{
  var vDw = "";
  var vDp = "";
  for (var i = 0; i < vPow.length; i++)
  {
    if (i % 2 == 0)
    {
      vDw = String.fromCharCode(vPow.charCodeAt(i) + 9);
    }
    else {
      vDw = String.fromCharCode(vPow.charCodeAt(i) - 9);
    }
    vDp = vDp + vDw;
  }
  return vDp.substring(4, vDp.length - 4);
}
/*ENCRPYT AND DECRYPT STRING END*/
function base64ToBlob(base64, mime) 
{
    mime = mime || '';
    var sliceSize = 1024;
    var byteChars = window.atob(base64);
    var byteArrays = [];

    for (var offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
        var slice = byteChars.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, {type: mime});
}

// Function format array field. 
// example 1: print_r(1, true);
// returns string:
function validateArrayValue(value) {
	var ret;
	  (value.toString() != "") ? (ret = value.toString()) : (ret = "*NA*");
    // Trap all characters for the URL parameter.
    ret = replaceAll(ret, "&", "*AMP*");
    ret = replaceAll(ret, "%", "*PCT*");
    ret = replaceAll(ret, "#", "*HSH*");
    ret = replaceAll(ret, "'", "*APOS*");
    ret = u2dp(ret);
	  return ret;
}


// Function replace all characters based on the parameter 
// example 1: replaceAll(str, "old_char", "new_char")
// returns string:
function replaceAll(str, from, to) {
	var idx = str.indexOf( from );
	while ( idx > -1 ) {
		str = str.replace( from, to );
		idx = str.indexOf( from );
	}
	return str;
}

/*************************************************************************************
// Function Name : reject_space()
// Description   : to ensure no space is allowed in the given string, usually used in 
//				 onkeyup event.	
*************************************************************************************/     
function reject_space(str)
{
	var arr = str.value.split(" ");
	var tempStr = "";
		
	for (i = 0; i < arr.length; i++)
	{
		if (arr[i] != "")
			tempStr = tempStr + arr[i];
	}
	str.value = tempStr;
}

//force upper case. usually on keyup event.
function c_upper(fieldname)
{
	fieldname.value = fieldname.value.toUpperCase();
}

/*************************************************************************************
//    Call to the function is to be made this way :
//    validateSpecialCharacters(field, excludeSpecialChars, 'Y/N', 'Y/N')            
//            1st Parameter - field               - field that is to be validated
//            2nd Parameter - excludeSpecialChars - hidden field in the form consisting the list of all the invalid characters except
//                                                  Single Quote and Double Quote to be excluded 
//            3rd Parameter - excludeDoubleQuote  - value - Y to exclude Double Quote
//            4th Parameter - excludeSingleQuote  - value - Y to exclude Single Quote
*************************************************************************************/  
function validateSpecialCharacters(field,excludeSpecialChars,excludeDoubleQuote,excludeSingleQuote) 
{
	var temp_str;
    
	var invalid = excludeSpecialChars.value;
	if (excludeDoubleQuote == 'Y')
		invalid = invalid + '"';
	if (excludeSingleQuote == 'Y')
		invalid = invalid + '\'';
	
	var ok = true;
	var validStr = '';
 
	if (field.value.trim() != "" && field.value.length > 0)
	{
		if (validStr == '')
		{
			validStr = field.value;
		} else {
			validStr = validStr;
		}
      
		for(y=0; y<validStr.length; y++) 
		{
			if(invalid.indexOf(validStr.charAt(y)) >= 0 ) 
			{ 
				validStr = validStr.replace(validStr.charAt(y), "");
				y = y - 1;
				ok = false;
				field.value = validStr;
			}
		}

  		
		if (!ok) {
			if (window.parent.displayMsg){
		  			t_displayMsg = window.parent.displayMsg;
			} else {
				if (displayMsg){
		  			t_displayMsg = displayMsg;
				} else {
		  			t_displayMsg = showMessage;
				}
			}	
		  	t_displayMsg("SYS-00030", invalid.replace("<","&lt") ).then(function(){
				fn_SetFocus($("#"+field));
				return false;
			});
			
		}
	}
}

function fn_download(aURL,aRetainFile){
  if ($('#iframe_download').length==0){
  	var $iframe = $("<iframe>", {name: 'iframe_download', id: 'iframe_download',}).appendTo("body").hide();
  }
	aURL = "/"+maprootdir+"/commonfiles/cfm/get_download_file.cfm?filename="+aURL+((aRetainFile)?"&retain_file=Y":"");
  $('#iframe_download').attr('src', aURL);
}


//-- Validate 2 dates if it is within control range
function fn_ChkDateRange(arrDate,arrLabels, anDateRange, asFldFocus, asErrNo, abPopErrMsg) {
	var vDateRange = parseInt(anDateRange);
	
	//-- if date range parameter is 0, skip checking
	if (vDateRange == 0) { return true;}
	
	//-- otherwise check if range is within the limit
	var vValid = true;

	var vdtstart = $("#"+ arrDate[0]).val();
	var vdtend = $("#"+ arrDate[1]).val();

	var vdate1 = Date.parse(to_js_format(vdtstart));
	var vdate2 = Date.parse(to_js_format(vdtend));
	
	var vdiff = ((vdate2 - vdate1)/(1000*60*60*24));

	if (vdiff > vDateRange) {
		vValid = false;
	}

	if (window.parent.displayMsg){
		t_displayMsg = window.parent.displayMsg;
	} else if (displayMsg){
		t_displayMsg = displayMsg;
	} else {
		t_displayMsg = showMessage;
	}
	
	if (!vValid && abPopErrMsg) {
		if (asErrNo) {
			t_displayMsg( asErrNo ).then(function(){
				fn_SetFocus($("#"+asFldFocus));
			});
		} else {
			t_displayMsg("SYS-00089", anDateRange).then(function(){
				fn_SetFocus($("#"+asFldFocus));
			});
		}
						
		return false;
	}
	
	return true;
}

 	