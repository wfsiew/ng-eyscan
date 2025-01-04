/*<!---
*********************************************************************************
	file name:				his_common.js
	description:			A page that holds common javascript functions that are 		
							available to all pages in the application 
	called by:				common.cfm
	calls:					fieldfocus(): set focus to formfield 
							chkposval(): check for positive values
              chknegval(): check for negative/positive values
							chkcurr(): check currency format
							chkemailfmt(): check email format
							c_upper(): make field UpperCase
							expiframe(): expand iframe
	file change history:
**********************************************************************************
* date(dd/mm/yyyy)      * programmer       * work description/reason             *
**********************************************************************************
  05/04/2001			      Daniel Ng		       Created																
  11/12/2001            Daniel Ng          UPDATED CHKNEGVAL()										
  18/03/2002			      Yeo Li Hoon			   Edit chkposval() by adding ftype=4			
  13/06/2002            Chittesh           <cfif 1 EQ 2> condition to skip commets from generated HTML Page
  18/09/2003            Toon Ri            modify chk_invalid_char funct and create chk_special_char funct
  29/10/2003            Toon Ri            modify chk_special_char funct to allow '.' char
  27/11/2003            Toon Ri            modify chk_special_char funct to allow ',' char and ';'
  01/03/2010			      Dennis		         Add function CheckString(str, code);
  03/03/2010			      Dennis		         Add function removeInvalidChar(str);
  11/05/2010            Charles Claver     Add function executeReport(str, boolean, str, array, array, str);
  19/07/2011            Arvind Vasudevan   Add function validateSpecialCharacters(field,special_chars);
  12/03/2013            Sandeep Kadam   Moved function validateNRIC(formField, [formButton]) & validateFIN(formField, [formButton]) with one more check
**********************************************************************************
--->
*/
var save_divGridPanelCFR = 0;
var save_divResultCFRHeight = 0;

// check the key in value in the multiple of 5
function chkmultiple(obj, minblock)
{
   if(obj.value != "")
   {
      if ((obj.value % minblock) == 0) {
         return true;
      } else {
	  	 showMessage("ROS-00074");
	  	 obj.value = "";	
       obj.focus();
         return false;
      }
   }	     
}

function y2k(number) 
{ 
  return (number < 1000) ? number + 1900 : number; 
}



function chkposval(numfield, ftype, fieldname)
{
	var i, pfv;
	pfv = numfield.value;
	  
  //check for positive values to 2 decimal places
	if (ftype == 1)
  {
		if  (!( isFinite(pfv)))
    {
			//numfield.value = numfield.value.substr(0, numfield.value.length -1);      
      numfield.value = removechar(numfield.value);
			//recursive
      chkposval(numfield, ftype, fieldname);
      numfield.focus();
		}
    else if (pfv < 0)
    {
      numfield.value = "";
      numfield.focus();
    }    
    
		//check 2 decimals
		if (numfield.value.indexOf(".") != -1 && numfield.value.length - numfield.value.indexOf(".") > 3)
		{ 
		  //numfield.value = numfield.value.substr(0, numfield.value.indexOf(".")) + numfield.value.substr(numfield.value.indexOf(".") + 1, numfield.value.length);
      numfield.value = numfield.value.substr(0, numfield.value.indexOf(".") + 1) + numfield.value.substr(numfield.value.indexOf(".") + 1, 2);
		}
	}
  //check for positive whole numbers
	else if (ftype == 2)
  {
		if (!(isFinite(numfield.value)))
    {
			//numfield.value = numfield.value.substr(0, numfield.value.length -1);
      numfield.value = removechar(numfield.value);
      //recursive
      chkposval(numfield, ftype, fieldname);
      numfield.focus();
		}
    else if (numfield.value < 0)
    {
      numfield.value = "";
      numfield.focus();    
    }        
    
    if (numfield.value.indexOf(".") >= 0)
    { 
      //numfield.value = numfield.value.substr(0, numfield.value.indexOf(".")) + numfield.value.substr(numfield.value.indexOf(".") + 1, numfield.value.length);
      numfield.value = removedot(numfield.value);
    }    
	}  
  
	//check for percentage values to 2 decimal places
	else  if (ftype==3)
  {
		if (!(isFinite(numfield.value)))
    {
			//numfield.value = numfield.value.substr(0, numfield.value.length -1);
      numfield.value = removechar(numfield.value);
      //recursive
      chkposval(numfield, ftype, fieldname);
			numfield.focus();	      
		}
    else if ((numfield.value > 100) || (numfield.value < 0))
    {
      numfield.value = "";
      numfield.focus();	      
    }
      
		//check 2 decimal places 
		if (numfield.value.indexOf(".") != -1 && numfield.value.length - numfield.value.indexOf(".") > 3)
		{
      numfield.value = numfield.value.substr(0, numfield.value.indexOf(".")) + numfield.value.substr(numfield.value.indexOf(".") + 1, numfield.value.length);
      //recursive      
      chkposval(numfield, ftype, fieldname);      
		}    
	}    
  
	else  if (ftype==8)
  {		
		if (!(isFinite(numfield.value)))
    {
			//numfield.value = numfield.value.substr(0, numfield.value.length -1);
      numfield.value = removechar(numfield.value);
      //recursive
      chkposval(numfield, ftype, fieldname);
			numfield.focus();	      
		}
    //else if ((numfield.value > 100) || (numfield.value < 0))
    else if ((numfield.value < 0))
    {
      numfield.value = "";
      numfield.focus();	      
    }
    
		//check for decimal places 
		if (numfield.value.indexOf(".") != -1 )
		{
			if (parseInt(numfield.value.lastIndexOf(".")) > 1 )
			{
				if (numfield.value.indexOf(".") != numfield.value.lastIndexOf("."))
				{	
					
					numfield.value = numfield.value.substr(0, numfield.value.lastIndexOf(".") );
					//recursive      
					
					//chkposval(numfield, ftype, fieldname);  
				}    
			}
		}    
	} 
  
	//check for positive values to 2 decimal places & set the field to blank if invalid
	else if (ftype == 4)
  {
		if ((!(isFinite(numfield.value))) || (numfield.value < 0))
    {
			numfield.value = "";
      //recursive
      chkposval(numfield, ftype, fieldname);
			numfield.focus();
		}
		if (numfield.value.indexOf(".") != -1)
		{ 
		  numfield.value = numfield.value.substr(0, numfield.value.indexOf("."));
		}
	}
  //check for positive values to 3 decimal places i.e. unit price
	else if (ftype == 5)
  {
		if ( ( !( isFinite(pfv) ) )  || ( pfv < 0 ) )
    {
			numfield.value = numfield.value.substr(0, numfield.value.length -1);
      //recursive
      chkposval(numfield, ftype, fieldname);      
			numfield.focus();
		}
		//check 2 decimals
		if (numfield.value.indexOf(".") != -1 && numfield.value.length - numfield.value.indexOf(".") > 4)
		{ 
		  numfield.value = numfield.value.substr(0, numfield.value.length -1);      
		}    
	}
  //check for percentage values but decimal number not allowed
	else  if (ftype==6){
		if (!(isFinite(numfield.value)))
    {
			//numfield.value = numfield.value.substr(0, numfield.value.length -1);      
      numfield.value = removechar(numfield.value);
      //recursive
      chkposval(numfield, ftype, fieldname);
			numfield.focus();      
		}
    else if ((numfield.value > 100) || (numfield.value < 0))
    {
      numfield.value = "";
			numfield.focus();      
    }
        
		//check 2 decimal places 
		if (numfield.value.indexOf(".") >= 0 )
		{ 
      numfield.value = numfield.value.substr(0, numfield.value.indexOf(".")) + numfield.value.substr(numfield.value.indexOf(".") + 1, numfield.value.length);
		}    
	}  
  
  //check for percentage values to 2 decimal places
	else  if (ftype==7)
  {
		if (!(isFinite(numfield.value)))
    {
			//numfield.value = numfield.value.substr(0, numfield.value.length -1);
      numfield.value = removechar(numfield.value);
      //recursive
      chkposval(numfield, ftype, fieldname);
			numfield.focus();	      
		}
    else if ((numfield.value > 999) || (numfield.value < 0))
    {
      numfield.value = "";
      numfield.focus();	      
    }
      
		//check 2 decimal places 
		if (numfield.value.indexOf(".") != -1 && numfield.value.length - numfield.value.indexOf(".") > 3)
		{
      numfield.value = numfield.value.substr(0, numfield.value.indexOf(".")) + numfield.value.substr(numfield.value.indexOf(".") + 1, numfield.value.length);
      //recursive      
      chkposval(numfield, ftype, fieldname);      
		}    
	}    
  
}//end function

//<cfif 1 EQ 2>
/******************************************************************************
  check NEGATIVE values, if ftype is 1, no decimal is allowed. 
  if ftype is 2,  whole numbers. if ftype is 3,  percentage values up to 2 decimals. 
  usually used in onkeyup event if allowpos set to 1, then allow both positive and negative. 
  if set to 0, only negative numbers
********************************************************************************/
//</cfif>

function chknegval(numfield, ftype, fieldname, allowpos) {
  var i, firstdig, pfv;
	firstdig = numfield.value.substr(0, 1);
	//  alert("firstdig:"+firstdig); 
	if ( (firstdig == "-") || ( (isFinite(firstdig)) && (allowpos == 1)) ) {
		//set pfv to correct value
		if (firstdig == "-") {
			pfv = numfield.value.substr(1, numfield.value.length);
			//alert("pfv -  :"+pfv);
		}
		else if ((isFinite(firstdig)) && (allowpos == 1)) {
			pfv = numfield.value;
			//alert("pfv + :"+pfv);
		}	
    //check for values to 2 decimal places
		if (ftype == 1) 
    {
			if ((!( isFinite(pfv)))  || (pfv < 0)) 
      {
				numfield.value = numfield.value.substr(0, numfield.value.length - 1);        
			}
			//check 2 decimals
			if (numfield.value.indexOf(".") != -1 && numfield.value.length - numfield.value.indexOf(".") > 3)
			{ 
        numfield.value = numfield.value.substr(0, numfield.value.indexOf(".")) + numfield.value.substr(numfield.value.indexOf(".") + 1, numfield.value.length);
			}
			//numfield.focus();     
		}
    
		//check for whole numbers
		else if (ftype == 2) 
    {
			if ((!(isFinite(pfv))) || (pfv < 0)) 
      {
				//numfield.value = numfield.value.substr(0, numfield.value.length -1);
				numfield.value ="0";
			}
      if (numfield.value.indexOf(".") >=0)
			{ 
        numfield.value = numfield.value.substr(0, numfield.value.indexOf(".")) + numfield.value.substr(numfield.value.indexOf(".") + 1, numfield.value.length);			
      } 
			//numfield.focus();
		}
		//check for percentage values to 2 decimal places
		else if (ftype==3) 
    {
			if ((!(isFinite(pfv))) || (pfv > 100) || (pfv < 0)) 
      {
				numfield.value = numfield.value.substr(0, numfield.value.length -1);
        chknegval(numfield, ftype, fieldname, allowpos);        
			}
			//check 2 decimal places 
			if (numfield.value.indexOf(".") != -1 && numfield.value.length - numfield.value.indexOf(".") > 3) 
      {				
        numfield.value = numfield.value.substr(0, numfield.value.indexOf(".")) + numfield.value.substr(numfield.value.indexOf(".") + 1, numfield.value.length);
			}      
			numfield.focus();
		}
	}
	else {
		numfield.value = numfield.value.substr(0, numfield.value.length -1);    
	}
}//end function

//format currency values, appends decimal zeroes to value if not in format of $0.00 , e.g. usually used in onchange event
function chkcurr(currfield, fieldname, currformat) {
	var dec, g, l, k,formatDec,addZero;
	g = currfield.value;
	if ((isFinite(currfield.value)) && (currfield.value != " ") && (currfield.value.length != 0)) {
		//length after decimal point
		addZero = true;
		if (currformat){
			formatDec = currformat.length - currformat.indexOf(".") - 1;
			//Check if there's any decimal in the format
			if ((currformat.indexOf(".") == -1 )||(currformat.indexOf(".") == 0)||formatDec == 0){
				//if no decimal in the format
				addZero = false;
			}
		}
		if (addZero == true){
			currfield.value = padzero(currfield.value);
		}
	}
	else {
         showMessage("PHM-00209", fieldname);
		if (currfield.value.length > 0) {
			currfield.value = currfield.value.substr(0, currfield.value.length -1);
		}
	}
}

function is_blank(objName)
{
	return (objName.value == "");
}

//pass in FIELD value, return padded with 0s
function padzero(numval) {
  var dec, retval;
  
  if (typeof(numval) == "undefined")
  {
    return numval;
  }
      
  if (numval.indexOf(",") > 0)
  { 
    fieldval = numval;
  }
  else
  {
    var tempvar = Math.round(parseFloat(numval)*100)/100;
    fieldval = "" + tempvar;
  }
  
	//decimals
	if (isFinite(fieldval)) {
		dec = fieldval.length - fieldval.indexOf(".") - 1;
		if ((fieldval.indexOf(".") == -1 )||(fieldval.indexOf(".") == 0)||dec == 0)
		{
			// IF DECIMAL IS NOT THERE THEN ADD THE DECIMAL AND THE TRAILING 2 ZEROS
			retval = eval(fieldval) + '.00';
		}
		else if (dec == 1)//1 decimal
		{
			retval = eval(fieldval) + '0';//pad to 2 decimal
		}
		else if (dec == 2)
		{

			retval = fieldval;
		}
		return retval;
	}
	else {

		return fieldval;
	}
}


function y2k(number) { return (number < 1000) ? number + 1900 : number; }

function removechar(str)
{
  var temp = "";
  
  for(var i=0; i<str.length; i++)
  {
    if(!(isNaN(str.charAt(i))))
    {
      temp += str.charAt(i);
    }        
  }    
  return (temp);
}

function chkphoneval(numfield, ftype, fieldname)
{
	var i, pfv;
	pfv = numfield.value.trim();
  
	if (pfv.length == 0) numfield.value = '';

	if (pfv.length == 1 && pfv == '+') return;

	if (pfv.length > 1 && pfv.slice(0,1)=='+'){
		numfield.value = '+' + removechar(pfv.slice(1));
	}
	else{
		numfield.value = removechar(pfv);
	}
}//end function