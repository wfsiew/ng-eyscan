// function to check time format
// time format valid if the format is HH:MM
function chktime(objName) 
{  
   var str1 = "";
   var str2 = "";
   if(objName.value.length != 4 && objName.value.indexOf(":") == -1)
   {
      return false;
   }
   else if (objName.value.indexOf(":") == -1 && objName.value.length == 4)
   {
      objName.value = objName.value.substring(2,0) + ":" + objName.value.substring(2,4);
   }
  else if(objName.value.indexOf(":") != -1)
  {
    var strArray = objName.value.split(':');   
    str1 = strArray[0];
    str2 = strArray[1];
    if(strArray[0] == "" || strArray[1] == "" || strArray[0].length == 1 || strArray[1].length == 1)
    {
      if(strArray[0] == "")
      {
        str1 = "00";
      }
      if(strArray[1] == "")
      {
        str2 = "00";
      }
      if(strArray[0].length == 1)
      {
        str1 = "0" + strArray[0];
      }
      if(strArray[1].length == 1)
      {
        str2 = strArray[1] + "0";
      } 
      objName.value = str1 + ":" + str2;
    }
  }
  var strArray = objName.value.split(':');   
  // if either hour or minutes part is not a number, error
  if(isNaN(strArray[0] - 0) || isNaN(strArray[1] - 0))
  {
     return false;
  }
  else
  {
     if (strArray[0] - 0 < 0 || strArray[0] - 0 > 23 || strArray[1] - 0 < 0 || strArray[1] - 0 > 59) 
     {
        return false;
     }
     else
     {
        return true;
     }     
  }  
}


// function to check time format up to second
// time format valid if the format is HH:MM:SS
function chktime_wif_sec(objName) 
{  
  if (objName.value.length == 6)
  {
    objName.value = objName.value.substring(2,0) + ":" + objName.value.substring(2,4) + ":" + objName.value.substring(4,6);
  }

  var strArray = objName.value.split(':');

  if (strArray.length != 3) // if no colon, error
  {
    return false;
  }
  else
  {  
    // if either hour or minutes part is not a number, error
    if (isNaN(strArray[0] - 0) || isNaN(strArray[1] - 0) || isNaN(strArray[2] - 0))
    {
      return false;
    }
    else
    {
      if ((strArray[0] - 0 < 0) || (strArray[0] - 0 > 23) || (strArray[1] - 0 < 0) || (strArray[1] - 0 > 59) || (strArray[2] - 0 < 0) || (strArray[2] - 0 > 59))
      {
        return false;
      }
      else
      {
        return true;
      }    
    }
  }   
}

function chkdate(objName) {
  return check_date(objName);
}

function LeapYear(intYear) {
  if (intYear % 100 == 0) {
    if (intYear % 400 == 0) { return true; }
  }
  else {
    if ((intYear % 4) == 0) { return true; }
  }
  return false;
}

function checkdate(objName) {
  return check_date(objName);
}
function makeArray() {
     for (i = 0; i<makeArray.arguments.length; i++)
          this[i + 1] = makeArray.arguments[i];
}

function add_date(d1, m1, y1, n)
{
  //alert(st5);
  //var x = st5;
  //var datefield1 = st5;
  //var months2 = new makeArray('Jan','Feb','Mar',
  //      'Apr','May','Jun','Jul','Aug','Sep',
  //      'Oct','Nov','Dec');
  //  var date2 = new Date(st5);
    /*var day2  = d1;//date2.getDate();
    var month2 = m1; //date2.getMonth() + 1;
    var yy2 =  y1;// date2.getYear();*/
  //  var year2 = (yy2 < 1000) ? yy2 + 1900 : yy2;
  //  tt2 = ( year2+ " " + months2[month2] + " " +day2 ) ;
    /*alert(d1); alert(m1); alert(y1);
    alert("hi....1");
    if (month2 == 1 || month2 == 3 || month2 == 5 || month2 == 7 || month2 == 8 || month2 == 10)    
    {
      alert("hi....2");
      if (month2 == 4 || month2 == 6 || month2 == 9 || month2 == 11)
      {
        tday2 = day2+n -30;
        if (tday2 > 31)
        {
          month2 = month2 +1;
          tday2 = tday2;
          alert (month2);alert (tday2);
          //datefield1.value = tday2 + "-" + months2[month2] + "-" + yy2;
          //return true;
        }
      }
    }
    
    if (month == 4 || month == 6 || month == 9 || month == 11)
    {
      alert("hi....2");
      if (month2 == 5 || month2 == 7 || month2 == 10 || month2 == 12)
      {
        tday2 = day2+n -31;
        if (tday2 > 31)
        {
          month2 = month2 +1;
          tday2 = tday2;
          alert (month2);alert (tday2);
          //datefield1.value = tday2 + "-" + months2[month2] + "-" + yy2;
          //return true;
        }
      }
    }*/
}

function check_date_format(objName){
  return check_date(objName);
}

function check_date(objName){
	if(objName.name.indexOf('display_') != -1){
		var hiddenObj = document.getElementsByName(objName.name.substr(8))[0];
		var displayObj = objName;
		var explicitDate = false;
	}
	else{
		var hiddenObj = objName;
		var displayObj = document.getElementsByName("display_"+objName.name)[0];
		var explicitDate = true;
	}	
	//If user clear the datefield
	if (objName.value ==""){ 
		if(typeof hiddenObj !== 'undefined')
			hiddenObj.value = "";
		else if(typeof displayObj !== 'undefined')
			displayObj.value = "";
		
		return true;
	} 
	
	var datefield = objName; 
	var validDate = "";
  var dat = new Date();
  var d  = dat.getDate();
  var m = dat.getMonth() + 1;
  var y = dat.getFullYear();
  var arrayMonths = new makeArray('Jan','Feb','Mar',
        'Apr','May','Jun','Jul','Aug','Sep',
        'Oct','Nov','Dec');
				
	//Variable for literaldate
	var strDatestyle = "EU"; 
	var strDate;
  var strDateArray;
  var strDay;
  var strMonth;
  var strYear;
  var intday;
  var intMonth;
  var intYear;
  var booFound = false;
  var strSeparatorArray = new Array("-"," ","/",".");
  var intElementNr;
  var err = 0;
	var strThaiMonthArray = new Array(12);
  var strMonthArray = new Array(12);
	var calendarname = getCalendarName();//Call to convert_date_js.cfm
	if(calendarname == "TC"){
		strSeparatorArray = new Array("-"," ","/");//Short format Thai months character contain "."
	}
  strMonthArray[0] = "Jan";
  strMonthArray[1] = "Feb";
  strMonthArray[2] = "Mar";
  strMonthArray[3] = "Apr";
  strMonthArray[4] = "May";
  strMonthArray[5] = "Jun";
  strMonthArray[6] = "Jul";
  strMonthArray[7] = "Aug";
  strMonthArray[8] = "Sep";
  strMonthArray[9] = "Oct";
  strMonthArray[10] = "Nov";
  strMonthArray[11] = "Dec";	
	strThaiMonthArray[0] = String.fromCharCode(3617,46,3588,46);
	strThaiMonthArray[1] = String.fromCharCode(3585,46,3614,46);
	strThaiMonthArray[2] = String.fromCharCode(3617,3637,46,3588,46);
	strThaiMonthArray[3] = String.fromCharCode(3648,3617,46,3618,46);
	strThaiMonthArray[4] = String.fromCharCode(3614,46,3588,46);
	strThaiMonthArray[5] = String.fromCharCode(3617,3636,46,3618,46);
	strThaiMonthArray[6] = String.fromCharCode(3585,46,3588,46);
	strThaiMonthArray[7] = String.fromCharCode(3626,46,3588,46);
	strThaiMonthArray[8] = String.fromCharCode(3585,46,3618,46);
	strThaiMonthArray[9] = String.fromCharCode(3605,46,3588,46);
	strThaiMonthArray[10] = String.fromCharCode(3614,46,3618,46);
	strThaiMonthArray[11] = String.fromCharCode(3608,46,3588,46);
	
	try
  {
  	if (objName.value =="t0")
	  {
	     var stx = d + "-" + arrayMonths[m] + "-" + y;
	     alert(stx);
	     add_date(d, m, y , 2);
	  }   
	  else if (objName.value.toUpperCase() =="T")
	  {
	    var date = new Date();
	    var day  = date.getDate();
	    var month = date.getMonth() + 1;
	    var yy = date.getFullYear();
	    var year = (yy < 1000) ? yy + 1900 : yy;
	    validDate = day + "-" + arrayMonths[month] + "-" + year;
	  }
	  else if (objName.value.toUpperCase() =="TT")
	  {
	    var date = new Date();
	    var day  = date.getDate();
	    var month = date.getMonth() + 1;
	    var yy = date.getFullYear();
	    var year = (yy < 1000) ? yy + 1900 : yy;
	    tt = ( year+ " " + arrayMonths[month] + " " +day ) ;
			
	    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10)    
	    {
	      tday = day+1;
	      if (tday > 31)
	      {
	        month = month +1;
	        tday = 1;
	      }      
	    }
	    else if (month == 4 || month == 6 || month == 9 || month == 11)
	    {
	      tday = day+1;
	      if (tday > 30)
	      {
	        month = month +1;
	        tday = 1;
	      }
	    }
	    else if (month == 2)
	    {
	      if (LeapYear(yy) == true)
	      {
	        tday = day+1;
	        if (tday > 29)
	        {
	          month = month +1;
	          tday = 1;
	        }
	      }
	      else if(LeapYear(yy) == false)
	      {
	        tday = day+1;
	        if (tday > 28)
	        {
	          month = month +1;
	          tday = 1;
	        }
	      }
	    }
	    else if (month ==12)
	    {
	      tday = day+1;
	      if (tday > 31)
	      {
	        month = 1;
	        tday = 1;
	        yy = yy+1;
	      } 
	    }
			
	    validDate = tday + "-" + arrayMonths[month] + "-" + yy;
	  }
	  else if (objName.value.toUpperCase() =="Y")
	  {
	    var date1 = new Date();
	    var day1  = date1.getDate();
	    var month1 = date1.getMonth() + 1;
	    var yy1 = date1.getFullYear();
	    var year1 = (yy1 < 1000) ? yy1 + 1900 : yy1;
	    y = ( year1+ " " + arrayMonths[month1] + " " +day1 ) ;
			
	    if (month1 == 5 || month1 == 7 || month1 == 10 || month1 == 12)    
	    {
	      tday1 = day1-1;
	      if (tday1 < 1)
	      {
	        month1 = month1 -1;
	        tday1 = 30;
	      }
	    }
	    else if (month1 == 2 || month1 == 4 || month1 == 6 || month1 == 9 || month1 == 11)    
	    {
	      tday1 = day1-1;
	      if (tday1 < 1)
	      {
	        month1 = month1 -1;
	        tday1 = 31;
	      }
	    }    
	    else if (month1 == 8)  
	    {
	      tday1 = day1-1;
	      if (tday1 < 1)
	      {
	        month1 = month1 -1;
	        tday1 = 31;
	      }
	    }
	    else if (month1 == 3)
	    {
	      if (LeapYear(yy1) == true)
	      {
	        tday1 = day1-1;
	        if (tday1 < 1)
	        {
	          month1 = month1 -1;
	          tday1 = 29;
	        }
	      }
	      else if(LeapYear(yy1) == false)
	      {
	        tday1 = day1-1;
	        if (tday1 < 1)
	        {
	          month1 = month1 -1;
	          tday1 = 28;
	        }
	      }
	    }
	    else if (month1 == 1)  
	    {
	      tday1 = day1-1;
	      if (tday1 < 1)
	      {
	        month1 = 12;
	        tday1 = 31;
	        yy1=yy1-1;
	      }
	    }
	    validDate = tday1 + "-" + arrayMonths[month1] + "-" + yy1;
	  }
		else{//Literal date
			strDate = datefield.value;
		  if (strDate.length < 1) {
		    return true;
		  }
		  for (intElementNr = 0; intElementNr < strSeparatorArray.length; intElementNr++) {
		    if (strDate.indexOf(strSeparatorArray[intElementNr]) != -1) {
		      strDateArray = strDate.split(strSeparatorArray[intElementNr]);
		      booFound = true;    
		     }
		  }
		  if (booFound == true) {
		    if (strDateArray.length != 3) {
		      err = 1;
		      throw err;
		    }
		    else {
		      strDay = strDateArray[0];
		      strMonth = strDateArray[1];
		      strYear = strDateArray[2];
		    }
		  }
			if (booFound == false) {
		    if (strDate.length>5) {
		      strDay = strDate.substr(0, 2);
		      strMonth = strDate.substr(2, 2);
		      strYear = strDate.substr(4);
		    }
		    else{
		      throw "Invalid Date";
		    }
		  }
		  // US style
		  if (strDatestyle == "US") {
		    strTemp = strDay;
		    strDay = strMonth;
		    strMonth = strTemp;
		  }
		  intday = parseInt(strDay, 10);
		  if (isNaN(intday)) {
		    err = 2;
		    throw err;
		  }
		  intMonth = parseInt(strMonth, 10);
			
		  if (isNaN(intMonth)) {
		    for (i = 0;i<12;i++) {
		      if (strMonth.toUpperCase() == strMonthArray[i].toUpperCase() || strMonth == strThaiMonthArray[i]) {
		      	intMonth = i+1;
		        strMonth = strMonthArray[i];
		        break;
		      }
		    }
		    if (isNaN(intMonth)) {
		      err = 3;
		      throw err;
		     }
		  }
			
			if (strYear.length == 2) {    
				if(calendarname == "GC"){
          if (strYear >= 30)
          {
            strYear = '19' + strYear;
          }
          else
          { 
					  strYear = '20' + strYear;
          }
				}
				else if(calendarname == "TC" && !explicitDate){//Input shortform 56 AS 2556 and then convert to Gregorian year			
					thaiYear = '25' + strYear;
					strYear = parseInt(thaiYear)-543;//Change to GC year to go through existing validation
				}		
				else{
					if (strYear >= 30)
          {
            strYear = '19' + strYear;
          }
          else
          { 
					  strYear = '20' + strYear;
          }
				}		
		  }
			else{
				if(calendarname == "TC" && !explicitDate){
					strYear = parseInt(strYear)-543;//Change to GC year to go through existing validation
				}
			}
		
		  if(isNaN(strYear)){
		    err = 4;
		    throw err;
		  }
		
		  intYear = parseInt(strYear, 10);
		
		  if (isNaN(intYear) || intYear > 2049 || intYear < 1900) {
		    err = 5;
		    throw err;
		  }
		  if (intMonth>12 || intMonth<1) {
		    err = 6;
		    throw err;
		  }
		  if ((intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 || intMonth == 8 || intMonth == 10 || intMonth == 12) && (intday > 31 || intday < 1)) {
		    err = 7;
		    throw err;
		  }
		  if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intday > 30 || intday < 1)) {
		    err = 8;
		    throw err;
		  }
		  if (intMonth == 2) {
		    if (intday < 1) {
		      err = 9;
		      throw err;
		    }
		    if (LeapYear(intYear) == true) {
		      if (intday > 29) {
		        err = 10;
		      throw err;
		      }
		    }
		    else {
		      if (intday > 28) {
		        err = 11;
		        throw err;
		      }
		    }
		  }		
			validDate = intday + "-" + strMonthArray[intMonth-1] + "-" + strYear; 
		}
		
		if(validDate != ""){
			if(typeof hiddenObj !== 'undefined' && typeof displayObj !== 'undefined' && !explicitDate){
				ProcessDisplayDate(validDate, hiddenObj, displayObj);
			}
			else{
				datefield.value = validDate;
			}	
		}
		else{
			throw "Invalid date";
		}
  }
	catch(e)
  {
  	displayMsg("SYS-00004");
		if(typeof hiddenObj !== 'undefined' && typeof displayObj !== 'undefined'){
			hiddenObj.value = "";
			displayObj.value = "";
		}
		else{
			datefield.value = "";
		}	    
    datefield.focus();
    return false;
  }
	
	return true;
}

function check_time(objName)
  {
  var timefield = objName;
  if (objName.value ==""){ return true;}  
  if (chktime(objName) == false) {
    displayMsg("SYS-00005");    
    timefield.value = "";
    timefield.focus();
    return false;
  }
  else {
    return true;
  }
  }
  
function check_time_wif_sec(objName)
{
  var timefield = objName;
  if (objName.value =="")
  {
    return true;
  }

  if (chktime_wif_sec(objName) == false) 
  {
    displayMsg("SYS-00006");
    return false;
  }
  else
  {
    return true;
  } 
}

//convert date string in dd-mmm-yyyy format into a javascript date format
//p_string is in dd-mmm-yyyy format
function to_js_format(p_string)  {
  var rddate = p_string;
  var i=rddate.indexOf("-");
  var j=rddate.lastIndexOf("-");
  var rddate_str=rddate.substring(i+1,j)+" "+rddate.substring(0,i)+","+rddate.substring(j+1,rddate.length);
  return rddate_str;
}

//compare the two date: from date must be less than to date
function check_date_ft(from, to) {
  var js_from_str = to_js_format(from.value);
  var js_to_str = to_js_format(to.value); 
  if (from.value == "" || to.value == "") { 
    return true;
  }
  else{
    if (Date.parse(js_from_str) <= Date.parse(js_to_str)) {
//      alert("The dates are valid.");
      return true;
    }
    else{
//      alert("To date must occur after the from date.");
      return false;
    }
  }
}

// check the date enter must be less than today date
function check_date_now(objName,p_type) {
	var js_date_str = JConvertDateLTE(objName.value);//Call to convert_date_js.cfm	
  js_date_str = to_js_format(js_date_str);
  var today = new Date();
  today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  
  if (objName.value == "") {  
    return true;
  }
  else{
		
    if (p_type =="LTE")
                {
      if (Date.parse(js_date_str) <= Date.parse(today)) {
//        alert("The dates are valid.");
        return true;
      }
      else{
        //alert("To date must occur after the from date.");
        return false;
      }
    }
                if (p_type =="LT")
                {
      if (Date.parse(js_date_str) < Date.parse(today)) 
        return true;
      else
        return false;
    } 
                if (p_type =="GTE")
                {
      if (Date.parse(js_date_str) >= Date.parse(today)) 
        return true;
      else
        return false;
    }
                if (p_type =="GT")
                {
      if (Date.parse(js_date_str) > Date.parse(today)) 
        return true;
      else
        return false;
    }  
                if (p_type =="EQ")
                {
      if (Date.parse(js_date_str) == Date.parse(today)) 
        return true;
      else
        return false;
    }  
    else
                {
      if (Date.parse(js_date_str) != Date.parse(today)) 
        return true;
      else
        return false;
    }
  }
}

/*
//open calendar
function dates(date1)
{
    var subwin=window.open("<cfoutput>/#application.maprootdir#</cfoutput>/commonfiles/calendar.cfm","NovaHealth","location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no,directories=no,status=no,width=300,height=280,left=300,top=300")
    
    subwin.opener=self;
    subwin.datedestination=date1;
 }
 */
 
//clear the date field on keyup
function to_blank(objName)
{
    objName.value="";
}    

  function ctod(st)
  {
    i=st.indexOf("-");
    if (i==-1){
      return -1;
    }   
    st1=st.substring(0,i);    
    st=st.substring(i+1);
    i=st.indexOf("-");
    if (i==-1){
      return -1;
    }   
    st2=mton(st.substring(0,i));
    if (st2==-1){
      return -1;
    }       
    st=st.substring(i+1);
    st3=st;
    if (st3==""){
      return -1;
    }
    
    d1 = new Date(st3, st2, st1);
  return d1;  
  }

  function mton(m)
  {
    switch (m.toLowerCase()){
       case 'jan' : 
          st2=0;
          break;
       case 'feb' : 
          st2=1;
          break;
       case 'mar' : 
          st2=2;
          break;
       case 'apr' : 
          st2=3;
          break;
       case 'may' : 
          st2=4;
          break;
       case 'jun' : 
          st2=5;
          break;
       case 'jul' : 
          st2=6;
          break;
       case 'aug' : 
          st2=7;
          break;
       case 'sep' : 
          st2=8;
          break;
       case 'oct' : 
          st2=9;
          break;
       case 'nov' : 
          st2=10;
          break;
       case 'dec' : 
          st2=11;
          break;        
      default:
        st2=-1;
        break;
      }
  return st2;
  }
  function ntom(n)
  {
    switch (n){
       case 0 : 
          st2='Jan';
          break;
       case 1 : 
          st2='Feb';
          break;
       case 2 : 
          st2='Mar';
          break;
       case 3 : 
          st2='Apr';
          break;
       case 4 : 
          st2='May';
          break;
       case 5 : 
          st2='Jun';
          break;
       case 6 : 
          st2='Jul';
          break;
       case 7 : 
          st2='Aug';
          break;
       case 8 : 
          st2='Sep';
          break;
       case 9 : 
          st2='Oct';
          break;
       case 10 : 
          st2='Nov';
          break;
       case 11 : 
          st2='Dec';
          break;        
       default:
          st2='';
          break;               
      }
  return st2;
  }
  
function datecomp_js(strdate1, strdate2)
// Function to compare date.
// Parameter : - strdate1, strdate2 -> Date to be compared (the format depends on the CTOD() function)
// Return value : - 1 if strdate1 < strdate2
//                - 0 if strdate1 = strdate2
//                - -1 if strdate1 > strdate2
// Created by Rakhmat Budi M. (rakhmat@novasprint.com)
{   
   date1 = ctod(strdate1);
   date2 = ctod(strdate2);

   if ((date1 - date2) < 0)
   {
      return 1;
   }
   else if ((date1 - date2) > 0)
   {
      return -1;
   }
   else
   {
      return 0;
   }
} 

function timecomp_js(strtime1, strtime2)
// Function to compare time.
// Parameter : - strtime1, strtime2 -> Time to be compared (must be in HH:MM format)
// Return value : - 1 if strtime1 < strtime2
//                - 0 if strtime1 = strtime2
//                - -1 if strtime1 > strtime2
// Created by Rakhmat Budi M. (rakhmat@novasprint.com)
{
   var strArray1 = strtime1.split(":");
   var strArray2 = strtime2.split(":");

   if (strArray1[0] < strArray2[0])
   {
     return 1;
   }
   else if (strArray1[0] > strArray2[0])
   {
     return -1;
   }
   else
   {
     if (strArray1[1] < strArray2[1])
     {
       return 1;
     }
     else if (strArray1[1] > strArray2[1])
     {
       return -1;
     }
     else
     {
       return 0;
     }
   }
} 

var objGlobalActiveDate = document.createElement("INPUT");
objGlobalActiveDate.setAttribute("type", "text");

function nhCheckDate(objName){
  if(objName.name.indexOf('display_') != -1){
    var hiddenObj = document.getElementsByName(objName.name.substr(8))[0];
    var displayObj = objName;
    var explicitDate = false;
  }
  else{
    var hiddenObj = objName;
    var displayObj = document.getElementsByName("display_"+objName.name)[0];
    var explicitDate = true;
  }	
	//If user clear the datefield
  if (objName.value ==""){ 
    if(typeof hiddenObj !== 'undefined')
      hiddenObj.value = "";
    else if(typeof displayObj !== 'undefined')
      displayObj.value = "";
		
    return true;
  } 
	
  var datefield = objName; 
  var validDate = "";
  var dat = new Date();
  var d  = dat.getDate();
  var m = dat.getMonth() + 1;
  var y = dat.getFullYear();
  var arrayMonths = new makeArray('Jan','Feb','Mar',
        'Apr','May','Jun','Jul','Aug','Sep',
        'Oct','Nov','Dec');
				
	//Variable for literaldate
  var strDatestyle = "EU"; 
  var strDate;
  var strDateArray;
  var strDay;
  var strMonth;
  var strYear;
  var intday;
  var intMonth;
  var intYear;
  var booFound = false;
  var strSeparatorArray = new Array("-"," ","/",".");
  var intElementNr;
  var err = 0;
  var strThaiMonthArray = new Array(12);
  var strMonthArray = new Array(12);
	var calendarname = getCalendarName();//Call to convert_date_js.cfm
	if(calendarname == "TC"){
		strSeparatorArray = new Array("-"," ","/");//Short format Thai months character contain "."
	}
  strMonthArray[0] = "Jan";
  strMonthArray[1] = "Feb";
  strMonthArray[2] = "Mar";
  strMonthArray[3] = "Apr";
  strMonthArray[4] = "May";
  strMonthArray[5] = "Jun";
  strMonthArray[6] = "Jul";
  strMonthArray[7] = "Aug";
  strMonthArray[8] = "Sep";
  strMonthArray[9] = "Oct";
  strMonthArray[10] = "Nov";
  strMonthArray[11] = "Dec";	
  strThaiMonthArray[0] = String.fromCharCode(3617,46,3588,46);
  strThaiMonthArray[1] = String.fromCharCode(3585,46,3614,46);
  strThaiMonthArray[2] = String.fromCharCode(3617,3637,46,3588,46);
  strThaiMonthArray[3] = String.fromCharCode(3648,3617,46,3618,46);
  strThaiMonthArray[4] = String.fromCharCode(3614,46,3588,46);
  strThaiMonthArray[5] = String.fromCharCode(3617,3636,46,3618,46);
  strThaiMonthArray[6] = String.fromCharCode(3585,46,3588,46);
  strThaiMonthArray[7] = String.fromCharCode(3626,46,3588,46);
  strThaiMonthArray[8] = String.fromCharCode(3585,46,3618,46);
  strThaiMonthArray[9] = String.fromCharCode(3605,46,3588,46);
  strThaiMonthArray[10] = String.fromCharCode(3614,46,3618,46);
  strThaiMonthArray[11] = String.fromCharCode(3608,46,3588,46);
	
  try
  {
  	if (objName.value =="t0")
	  {
	     var stx = d + "-" + arrayMonths[m] + "-" + y;
	     alert(stx);
	     add_date(d, m, y , 2);
	  }   
	  else if (objName.value.toUpperCase() =="T")
	  {
	    var date = new Date();
	    var day  = date.getDate();
	    var month = date.getMonth() + 1;
	    var yy = date.getFullYear();
	    var year = (yy < 1000) ? yy + 1900 : yy;
	    validDate = day + "-" + arrayMonths[month] + "-" + year;
	  }
	  else if (objName.value.toUpperCase() =="TT")
	  {
	    var date = new Date();
	    var day  = date.getDate();
	    var month = date.getMonth() + 1;
	    var yy = date.getFullYear();
	    var year = (yy < 1000) ? yy + 1900 : yy;
	    tt = ( year+ " " + arrayMonths[month] + " " +day ) ;
			
	    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10)    
	    {
	      tday = day+1;
	      if (tday > 31)
	      {
	        month = month +1;
	        tday = 1;
	      }      
	    }
	    else if (month == 4 || month == 6 || month == 9 || month == 11)
	    {
	      tday = day+1;
	      if (tday > 30)
	      {
	        month = month +1;
	        tday = 1;
	      }
	    }
	    else if (month == 2)
	    {
	      if (LeapYear(yy) == true)
	      {
	        tday = day+1;
	        if (tday > 29)
	        {
	          month = month +1;
	          tday = 1;
	        }
	      }
	      else if(LeapYear(yy) == false)
	      {
	        tday = day+1;
	        if (tday > 28)
	        {
	          month = month +1;
	          tday = 1;
	        }
	      }
	    }
	    else if (month ==12)
	    {
	      tday = day+1;
	      if (tday > 31)
	      {
	        month = 1;
	        tday = 1;
	        yy = yy+1;
	      } 
	    }
			
	    validDate = tday + "-" + arrayMonths[month] + "-" + yy;
	  }
	  else if (objName.value.toUpperCase() =="Y")
	  {
	    var date1 = new Date();
	    var day1  = date1.getDate();
	    var month1 = date1.getMonth() + 1;
	    var yy1 = date1.getFullYear();
	    var year1 = (yy1 < 1000) ? yy1 + 1900 : yy1;
	    y = ( year1+ " " + arrayMonths[month1] + " " +day1 ) ;
			
	    if (month1 == 5 || month1 == 7 || month1 == 10 || month1 == 12)    
	    {
	      tday1 = day1-1;
	      if (tday1 < 1)
	      {
	        month1 = month1 -1;
	        tday1 = 30;
	      }
	    }
	    else if (month1 == 2 || month1 == 4 || month1 == 6 || month1 == 9 || month1 == 11)    
	    {
	      tday1 = day1-1;
	      if (tday1 < 1)
	      {
	        month1 = month1 -1;
	        tday1 = 31;
	      }
	    }    
	    else if (month1 == 8)  
	    {
	      tday1 = day1-1;
	      if (tday1 < 1)
	      {
	        month1 = month1 -1;
	        tday1 = 31;
	      }
	    }
	    else if (month1 == 3)
	    {
	      if (LeapYear(yy1) == true)
	      {
	        tday1 = day1-1;
	        if (tday1 < 1)
	        {
	          month1 = month1 -1;
	          tday1 = 29;
	        }
	      }
	      else if(LeapYear(yy1) == false)
	      {
	        tday1 = day1-1;
	        if (tday1 < 1)
	        {
	          month1 = month1 -1;
	          tday1 = 28;
	        }
	      }
	    }
	    else if (month1 == 1)  
	    {
	      tday1 = day1-1;
	      if (tday1 < 1)
	      {
	        month1 = 12;
	        tday1 = 31;
	        yy1=yy1-1;
	      }
	    }
	    validDate = tday1 + "-" + arrayMonths[month1] + "-" + yy1;
	  }
		else{//Literal date
			strDate = datefield.value;
		  if (strDate.length < 1) {
		    return true;
		  }
		  for (intElementNr = 0; intElementNr < strSeparatorArray.length; intElementNr++) {
		    if (strDate.indexOf(strSeparatorArray[intElementNr]) != -1) {
		      strDateArray = strDate.split(strSeparatorArray[intElementNr]);
		      booFound = true;    
		     }
		  }
		  if (booFound == true) {
		    if (strDateArray.length != 3) {
		      err = 1;
		      throw err;
		    }
		    else {
		      strDay = strDateArray[0];
		      strMonth = strDateArray[1];
		      strYear = strDateArray[2];
		    }
		  }
			if (booFound == false) {
		    if (strDate.length>5) {
		      strDay = strDate.substr(0, 2);
		      strMonth = strDate.substr(2, 2);
		      strYear = strDate.substr(4);
		    }
		    else{
		      throw "Invalid Date";
		    }
		  }
		  // US style
		  if (strDatestyle == "US") {
		    strTemp = strDay;
		    strDay = strMonth;
		    strMonth = strTemp;
		  }
		  intday = parseInt(strDay, 10);
		  if (isNaN(intday)) {
		    err = 2;
		    throw err;
		  }
		  intMonth = parseInt(strMonth, 10);
			
		  if (isNaN(intMonth)) {
		    for (i = 0;i<12;i++) {
		      if (strMonth.toUpperCase() == strMonthArray[i].toUpperCase() || strMonth == strThaiMonthArray[i]) {
		      	intMonth = i+1;
		        strMonth = strMonthArray[i];
		        break;
		      }
		    }
		    if (isNaN(intMonth)) {
		      err = 3;
		      throw err;
		     }
		  }
			
      if (strYear.length == 2) {    
        if(calendarname == "GC"){
          if (strYear >= 30)
          {
            strYear = '19' + strYear;
          }
          else
          { 
            strYear = '20' + strYear;
          }
				}
				else if(calendarname == "TC" && !explicitDate){//Input shortform 56 AS 2556 and then convert to Gregorian year			
					thaiYear = '25' + strYear;
					strYear = parseInt(thaiYear)-543;//Change to GC year to go through existing validation
				}		
				else{
					if (strYear >= 30)
          {
            strYear = '19' + strYear;
          }
          else
          { 
					  strYear = '20' + strYear;
          }
        }		
      }
      else{
        if(calendarname == "TC" && !explicitDate){
          strYear = parseInt(strYear)-543;//Change to GC year to go through existing validation
        }
      }
		
      if(isNaN(strYear)){
        err = 4;
        throw err;
      }
		
		  intYear = parseInt(strYear, 10);
		
		  if (isNaN(intYear) || intYear > 2049 || intYear < 1900) {
		    err = 5;
		    throw err;
		  }
		  if (intMonth>12 || intMonth<1) {
		    err = 6;
		    throw err;
		  }
		  if ((intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 || intMonth == 8 || intMonth == 10 || intMonth == 12) && (intday > 31 || intday < 1)) {
		    err = 7;
		    throw err;
		  }
		  if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intday > 30 || intday < 1)) {
		    err = 8;
		    throw err;
		  }
		  if (intMonth == 2) {
		    if (intday < 1) {
		      err = 9;
		      throw err;
		    }
		    if (LeapYear(intYear) == true) {
		      if (intday > 29) {
		        err = 10;
		      throw err;
		      }
		    }
		    else {
		      if (intday > 28) {
		        err = 11;
		        throw err;
		      }
		    }
		  }		
			validDate = intday + "-" + strMonthArray[intMonth-1] + "-" + strYear; 
		}
		
		if(validDate != ""){
			if(typeof hiddenObj !== 'undefined' && typeof displayObj !== 'undefined' && !explicitDate){
				ProcessDisplayDate(validDate, hiddenObj, displayObj);
			}
			else{
				datefield.value = validDate;
			}	
		}
		else{
			throw "Invalid date";
		}
  }
  catch(e)
  {
    objGlobalActiveDate = datefield ;
    displayMsg("SYS-00004","","");
    if(typeof hiddenObj !== 'undefined' && typeof displayObj !== 'undefined'){
      hiddenObj.value = "";
      displayObj.value = "";
    }
    else{
      datefield.value = "";
    }	    
    return false;
  }
  return true;
}

function _callback_nhCheckDate()
{
  objGlobalActiveDate.focus();
  return false;
}

var objGlobalActiveTime = document.createElement("INPUT");
objGlobalActiveTime.setAttribute("type", "text");

function nhCheckTime(objName)
{
  var timefield = objName;
  if (objName.value ==""){ return true;}  
  if (chktime(objName) == false) {
		objGlobalActiveTime = timefield ;
		displayMsg("SYS-00005","","");
		timefield.value = "";
    return false;
  }
  else {
    return true;
  }
}

function _callback_nhCheckTime()
{
  objGlobalActiveTime.focus();
}

//  End -->

