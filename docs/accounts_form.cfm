
        <!doctype html>
				

<html>
<head>
	
	
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="/bn_moh_uat/commonfiles/jquery/jquery-ui.min.css" />

<link rel="stylesheet" href="/bn_moh_uat/commonfiles/bootstrap/bootstrap-4.6.2-dist/css/bootstrap.min.css">
<link rel="stylesheet" href="/bn_moh_uat/commonfiles/fontawesome-free-5.6.3/css/all.min.css">
<link rel="stylesheet" href="/bn_moh_uat/commonfiles/common_styles.css?v=Ver1.4.7">




<script src="/bn_moh_uat/commonfiles/jquery/jquery-3.6.1.min.js"></script>

<script src="/bn_moh_uat/commonfiles/bootstrap/bootstrap-4.6.2-dist/js/bootstrap.bundle.min.js"></script>
<script src="/bn_moh_uat/commonfiles/js/common.js?v=Ver1.4.7"></script>

<title>EyRIS - Transforming AI Vision into Reality</title>
<link rel="shortcut icon" href="/bn_moh_uat/favicon.ico" type="image/x-icon">
<link rel="icon" href="/bn_moh_uat/favicon.ico" type="image/x-icon">


	<meta charset="utf-8">

	<link rel="stylesheet" href="/bn_moh_uat/commonfiles/datepicker/css/bootstrap-datepicker3.min.css">
	<script src="/bn_moh_uat/commonfiles/datepicker/js/bootstrap-datepicker.min.js"></script>
	<script src="/bn_moh_uat/commonfiles/js/check_date.js?v=Ver1.4.7"></script>
	

<script language="javascript" type="text/javascript">
	//To pass the Client.vesalius_calendar_name to check_date.js
	function getCalendarName(){
		var calendar_name = "";
		
				calendar_name = "GC";
			
		return calendar_name;
	}
	//Wrapper that receive 1 string date and 2 dateObj called from dates() in check_date.cfm(click on the Calendar)
	function ProcessDisplayDate(strDate, valuefield, displayfield){
		if(!typeof strDate==='string' || typeof valuefield === 'undefined' || typeof displayfield === 'undefined'){
			return true;
		}
		
		try{
			var calendar_name = getCalendarName();
			var arrayDate = strDate.split('-');
			var dd=arrayDate[0];
			var mm=arrayDate[1];
			var yy=arrayDate[2];
			var date_type = checkDateType(dd,mm,parseInt(yy));
			var vfield = '';
			var dfield = '';
			
			if(date_type == "GC"){
				vfield = strDate;
				if(calendar_name == "GC")
					dfield = strDate;
				else
					dfield = JConvertDateETL(strDate);
			}
			else{
				vfield = JConvertDateLTE(strDate);
				dfield = strDate;
			}		
			
			valuefield.value = vfield;
			displayfield.value = dfield;
		}
		catch(e){
			//Do anything here
		}
				
		return true;
	}
	//Determine if the date is Local or Gregorian
	function checkDateType(dd, mm, yy){
		 var dateType = "GC";
		 
		 if(typeof mm == 'string'){		 	
			var thaiMonths1 = new Array();
			var thaiMonths2 = new Array();//Shortform
			thaiMonths1[0] = String.fromCharCode(3617,3585,3619,3634,3588,3617);
			thaiMonths1[1] = String.fromCharCode(3585,3640,3617,3616,3634,3614,3633,3609,3608,3660);
			thaiMonths1[2] = String.fromCharCode(3617,3637,3609,3634,3588,3617);
			thaiMonths1[3] = String.fromCharCode(3648,3617,3625,3634,3618,3609);
			thaiMonths1[4] = String.fromCharCode(3614,3620,3625,3616,3634,3588,3617);
			thaiMonths1[5] = String.fromCharCode(3617,3636,3606,3640,3609,3634,3618,3609);
			thaiMonths1[6] = String.fromCharCode(3585,3619,3585,3598,3634,3588,3617);
			thaiMonths1[7] = String.fromCharCode(3626,3636,3591,3627,3634,3588,3617);
			thaiMonths1[8] = String.fromCharCode(3585,3633,3609,3618,3634,3618,3609);
			thaiMonths1[9] = String.fromCharCode(3605,3640,3621,3634,3588,3617);
			thaiMonths1[10] = String.fromCharCode(3614,3620,3624,3592,3636,3585,3634,3618,3609);
			thaiMonths1[11] = String.fromCharCode(3608,3633,3609,3623,3634,3588,3617);	
			thaiMonths2[0] = String.fromCharCode(3617,46,3588,46);
			thaiMonths2[1] = String.fromCharCode(3585,46,3614,46);
			thaiMonths2[2] = String.fromCharCode(3617,3637,46,3588,46);
			thaiMonths2[3] = String.fromCharCode(3648,3617,46,3618,46);
			thaiMonths2[4] = String.fromCharCode(3614,46,3588,46);
			thaiMonths2[5] = String.fromCharCode(3617,3636,46,3618,46);
			thaiMonths2[6] = String.fromCharCode(3585,46,3588,46);
			thaiMonths2[7] = String.fromCharCode(3626,46,3588,46);
			thaiMonths2[8] = String.fromCharCode(3585,46,3618,46);
			thaiMonths2[9] = String.fromCharCode(3605,46,3588,46);
			thaiMonths2[10] = String.fromCharCode(3614,46,3618,46);
			thaiMonths2[11] = String.fromCharCode(3608,46,3588,46);
			
			for (var i = 0;i<12;i++) {	
				if (mm.toUpperCase() == thaiMonths1[i].toUpperCase() || mm.toUpperCase() == thaiMonths2[i].toUpperCase()) {
					dateType = "TC";
					break;
				}
			}
		 }
		 
		 return dateType;
	}
	//Convert date from Gregorian to Local
	function JConvertDateETL(input1){ 
		// Retrieve dd, mm, yyyy
		// Retrieve dd, mm, yyyy
		if(typeof input1 === 'string'){
			var res = input1.split("-");
			var strnull = (input1=='');
		}
		else if(typeof input1 === 'undefined'){
			var strnull = true;
		}
		else{
			var res = input1.value.split("-"); 
			var strnull = (input1.value=='');
		}
		
		if(!strnull){
			var dd=res[0];
			var mm=res[1];
			var yy=res[2];
			var dt=''; 
			var position = 0;
			var localMonths = new Array();
			var calendar_name = getCalendarName();
	
			var engMonths = new Array('Jan','Feb','Mar',
				'Apr','May','Jun','Jul','Aug','Sep',
				'Oct','Nov','Dec','January','February','March',
				'April','May','June','July','August','September',
				'October','November','December');
				
			if(calendar_name == 'GC'){
				dt= dd+'-'+mm+'-'+yy;
			}
			else{
					switch(calendar_name){
						case "TC":
							/*localMonths[0] = String.fromCharCode(3617,3585,3619,3634,3588,3617);
							localMonths[1] = String.fromCharCode(3585,3640,3617,3616,3634,3614,3633,3609,3608,3660);
							localMonths[2] = String.fromCharCode(3617,3637,3609,3634,3588,3617);
							localMonths[3] = String.fromCharCode(3648,3617,3625,3634,3618,3609);
							localMonths[4] = String.fromCharCode(3614,3620,3625,3616,3634,3588,3617);
							localMonths[5] = String.fromCharCode(3617,3636,3606,3640,3609,3634,3618,3609);
							localMonths[6] = String.fromCharCode(3585,3619,3585,3598,3634,3588,3617);
							localMonths[7] = String.fromCharCode(3626,3636,3591,3627,3634,3588,3617);
							localMonths[8] = String.fromCharCode(3585,3633,3609,3618,3634,3618,3609);
							localMonths[9] = String.fromCharCode(3605,3640,3621,3634,3588,3617);
							localMonths[10] = String.fromCharCode(3614,3620,3624,3592,3636,3585,3634,3618,3609);
							localMonths[11] = String.fromCharCode(3608,3633,3609,3623,3634,3588,3617);	*/
							localMonths[0] = String.fromCharCode(3617,46,3588,46);
							localMonths[1] = String.fromCharCode(3585,46,3614,46);
							localMonths[2] = String.fromCharCode(3617,3637,46,3588,46);
							localMonths[3] = String.fromCharCode(3648,3617,46,3618,46);
							localMonths[4] = String.fromCharCode(3614,46,3588,46);
							localMonths[5] = String.fromCharCode(3617,3636,46,3618,46);
							localMonths[6] = String.fromCharCode(3585,46,3588,46);
							localMonths[7] = String.fromCharCode(3626,46,3588,46);
							localMonths[8] = String.fromCharCode(3585,46,3618,46);
							localMonths[9] = String.fromCharCode(3605,46,3588,46);
							localMonths[10] = String.fromCharCode(3614,46,3618,46);
							localMonths[11] = String.fromCharCode(3608,46,3588,46);
							var newyy = parseInt(yy)+543;
							break;
							
						default:	
							var newyy = parseInt(yy);
					}
					
					if(localMonths.length > 0){
						for (var i = 0; i < engMonths.length; i++) 
						{
							if(engMonths[i].toUpperCase() == mm.toUpperCase())
							{
								if(i>=12)
									position=i-12;
								else
									position=i;
				
									break;
							}
						}	
						dt= dd+'-'+localMonths[position]+'-'+newyy;
					}
					else
						dt= dd+'-'+mm+'-'+yy;
			}	
		}
		else
			dt = '';
			
		if(typeof input1 === 'string')
			return dt;
		else if(typeof input1 === 'undefined')
			return dt;
		else
			return input1.value=dt;	
	}
	//Convert date from Local to Gregorian
	function JConvertDateLTE(input1){
				
		// Retrieve dd, mm, yyyy
		if(typeof input1 === 'string'){
			var res = input1.split("-");
			var strnull = (input1=='');
		}
		else if(typeof input1 === 'undefined'){
			var strnull = true;
		}
		else{
			var res = input1.value.split("-"); 
			var strnull = (input1.value=='');
		}
		
		if(!strnull){
			var dd=res[0];
			var mm=res[1];
			var yy=res[2];
			var dateType = checkDateType(dd,mm,yy);
			var dt=''; 
			var position = 0;
			var localMonths = new Array();
			var calendar_name = getCalendarName();
	
			var engMonths = new Array('Jan','Feb','Mar',
				'Apr','May','Jun','Jul','Aug','Sep',
				'Oct','Nov','Dec','January','February','March',
				'April','May','June','July','August','September',
				'October','November','December');
				
			if(dateType == "GC"){
				dt= dd+'-'+mm+'-'+yy;
			}
			else{
					switch(calendar_name){
						case "TC":
							encodeMonths = '';						
							for(var j = 0; j < mm.length; j++){
								encodeMonths = encodeMonths.concat(mm.charCodeAt(j), ';');
							}
							mm = encodeMonths;
							localMonths[0] = "3617;3585;3619;3634;3588;3617;";
							localMonths[1] = "3585;3640;3617;3616;3634;3614;3633;3609;3608;3660;";
							localMonths[2] = "3617;3637;3609;3634;3588;3617;";
							localMonths[3] = "3648;3617;3625;3634;3618;3609;";
							localMonths[4] = "3614;3620;3625;3616;3634;3588;3617;";
							localMonths[5] = "3617;3636;3606;3640;3609;3634;3618;3609;";
							localMonths[6] = "3585;3619;3585;3598;3634;3588;3617;";
							localMonths[7] = "3626;3636;3591;3627;3634;3588;3617;";
							localMonths[8] = "3585;3633;3609;3618;3634;3618;3609;";
							localMonths[9] = "3605;3640;3621;3634;3588;3617;"
							localMonths[10] = "3614;3620;3624;3592;3636;3585;3634;3618;3609;";
							localMonths[11] = "3608;3633;3609;3623;3634;3588;3617;"		
							localMonths[12] = "3617;46;3588;46;";
							localMonths[13] = "3585;46;3614;46;";
							localMonths[14] = "3617;3637;46;3588;46;";
							localMonths[15] = "3648;3617;46;3618;46;";
							localMonths[16] = "3614;46;3588;46;";
							localMonths[17] = "3617;3636;46;3618;46;";
							localMonths[18] = "3585;46;3588;46;";
							localMonths[19] = "3626;46;3588;46;";
							localMonths[20] = "3585;46;3618;46;";
							localMonths[21] = "3605;46;3588;46;";
							localMonths[22] = "3614;46;3618;46;";
							localMonths[23] = "3608;46;3588;46;";					
							var newyy = parseInt(yy)-543;
							break;
							
						default:
							var newyy = parseInt(yy);
					}
					if(localMonths.length > 0){
						for (var i = 0; i < localMonths.length; i++) 
						{
							if(localMonths[i].toUpperCase() == mm.toUpperCase())
							{
								if(i>=12)
									position=i-12;
								else
									position=i;
				
									break;
							}
						}	
						dt= dd+'-'+engMonths[position]+'-'+newyy;
					}
					else
						dt= dd+'-'+mm+'-'+yy;
			}
		}	
		else{
			var dt = '';
		}		
		
		if(typeof input1 === 'string')
			return dt;
		else if(typeof input1 === 'undefined')
			return dt;
		else
			return input1.value=dt;	
		
	}
</script> 
	<script src="/bn_moh_uat/commonfiles/js/common_numeric.js?v=Ver1.4.7"></script>
 
	<style>
	.form-group{
		xdisplay: inline-block;
		xmargin:0px 3px;
		margin-bottom: 2px;
		xvertical-align: top;
	}
	</style>
</head>
	
		


<body class="bg-light">
	

    <main role="main" class="container-fluid p-0 ">
		<form name="frmMain" id="frmMain" method="post" >

		<div class="container-fluid pt-2 pb-3 px-4 bg-light ">
			<input type="hidden" name="item_id" id="item_id" value="0">
			<input type="hidden" name="addressSpecialChars" value="~!$%^&">
			<input type="hidden" name="nameSpecialChars" value="~`!1@2#3$4%5^6&7*8(9)0-_+={}[]|\:;,.<>/?">
			<input type="hidden" name="user_status_old" id="user_status_old" value="">
			<input type="hidden" name="hcredits_management_ind" id="hcredits_management_ind"   value="N"  >
			
			<input type="hidden" name="f91F36F40EE5F8A6D76215CBE9463DB6B2EEB9ADEFA2EE5A617EE2C1080040D79769FE2D5853D94D3855ED3B44D840687DFA51D5BA59C76848075487B5F278E8E" value="E4CAC99292312ADF23AC08B8F90B05328DCE3D14">
			
			<div class="form-group">
				<label class="control-label mb-1 ">eMail </label>
				<input type="email" name="email" id="email" value="" class="form-control" required maxlength="50"  
					 oninvalid="this.setCustomValidity('Please enter a valid email address.')" oninput="setCustomValidity('')">				
			</div>
			
			<div class="form-row">
				<div class="form-group col-6">
					<label class="control-label mb-1 ">Display Name </label>
					<input type="text" name="display_name" id="display_name" value="" class="form-control" maxlength="20" onkeyup="validateSpecialCharacters(this,document.frmMain.nameSpecialChars,'Y','Y');">
				</div>
				<div class="form-group col-6">
					<label class="control-label mb-1 ">Contact No </label>
					<input type="text" name="contact_no" id="contact_no" value="" class="form-control" maxlength="20" onkeyup="chkphoneval(this,2,'contact_no');" >
				</div>
			</div>
			
			<div class="form-group">
				<label class="control-label mb-1 ">First Name </label>
				<input type="text" name="first_name" id="first_name" value="" class="form-control" required maxlength="100" onkeyup="validateSpecialCharacters(this,document.frmMain.nameSpecialChars,'Y','Y');" oninvalid="this.setCustomValidity('Please fill out this field.')" oninput="setCustomValidity('')">
			</div>
			<div class="form-group">
				<label class="control-label mb-1 ">Last Name </label>
				<input type="text" name="last_name" id="last_name" value="" class="form-control" required maxlength="100" onkeyup="validateSpecialCharacters(this,document.frmMain.nameSpecialChars,'Y','Y');" oninvalid="this.setCustomValidity('Please fill out this field.')" oninput="setCustomValidity('')">
			</div>
			
			<div class="form-group">
				<label class="control-label mb-1 ">Company </label>
				
				<select class="form-control custom-select" name="company_id" id="company_id" required oninvalid="this.setCustomValidity('Please fill out this field.')" onchange="setCustomValidity('')">
					<option value=""></option>
					
							
								<option value="8"   >Belait Hospital (TOPCON)</option>
							
						
							
								<option value="10"   >Berakas Health Centre</option>
							
						
							
								<option value="2"   >Brunei MOH</option>
							
						
							
								<option value="3"   >Brunei MOH Ocular Reading Centre</option>
							
						
							
								<option value="1"   >EyRIS</option>
							
						
							
								<option value="4"   >JPMC</option>
							
						
							
								<option value="14"   >Mobile Bus 1</option>
							
						
							
								<option value="15"   >Mobile Bus 2</option>
							
						
							
								<option value="12"   >Muara Health Centre</option>
							
						
							
								<option value="11"   >Rimba Health Centre</option>
							
						
							
								<option value="6"   >RIPAS Hospital (Endocrinology)</option>
							
						
							
								<option value="5"   >RIPAS Hospital (TOPCON)</option>
							
						
							
								<option value="13"   >Sengkurong Health Centre</option>
							
						
							
								<option value="9"   >Temburong Hospital</option>
							
						
							
								<option value="7"   >Tutong Hospital (TOPCON)</option>
							
						
							
								<option value="17"   >zGrading Centre</option>
							
						
							
								<option value="16"   >zScreening Centre</option>
							
						
				</select>
			</div>
								
			<div class="form-row">
				<div class="form-group col-7">
					<label class="control-label mb-1 ">Grading Group </label>
						<select class="form-control custom-select" name="user_group" id="user_group" required >
						<option value="1" selected >Primary Screener</option>
						
						
							
								<option value="2"  >Secondary Grader</option>
							
							
							
								<option value="3"  >Primary/Secondary User</option>
							

						<option value="10"  >User Admin</option>
						</select>
				</div>
								
				<div class="form-group col-5 d-none" id="amend_credit_ind_group">
						<div class="col-12 xtext-center">
							<label class="control-label " style="cursor: pointer;">Application Management </label><br>										
							<label class="switch">
								<input type="checkbox" name="credits_management_ind" id="credits_management_ind"  value="Y"  >
								<span class="slider round"></span>
							</label>
							
							<span id="status_desc" class="pl-3">
							No
							</span>
						</div>
				</div>

			</div>
						
			<div class="form-row">
				<div class="form-group col-5">
					<label class="control-label mb-1 ">Time Zone </label>
					
					<select class="form-control custom-select" name="timezone_name" id="timezone_name" required oninvalid="this.setCustomValidity('Please fill out this field.')" oninput="setCustomValidity('')" onchange="setCustomValidity('')">
						<option value=""></option>
						
									<option value="Africa/Abidjan"   >Africa/Abidjan</option>
								
									<option value="Africa/Accra"   >Africa/Accra</option>
								
									<option value="Africa/Addis_Ababa"   >Africa/Addis_Ababa</option>
								
									<option value="Africa/Algiers"   >Africa/Algiers</option>
								
									<option value="Africa/Asmara"   >Africa/Asmara</option>
								
									<option value="Africa/Asmera"   >Africa/Asmera</option>
								
									<option value="Africa/Bamako"   >Africa/Bamako</option>
								
									<option value="Africa/Bangui"   >Africa/Bangui</option>
								
									<option value="Africa/Banjul"   >Africa/Banjul</option>
								
									<option value="Africa/Bissau"   >Africa/Bissau</option>
								
									<option value="Africa/Blantyre"   >Africa/Blantyre</option>
								
									<option value="Africa/Brazzaville"   >Africa/Brazzaville</option>
								
									<option value="Africa/Bujumbura"   >Africa/Bujumbura</option>
								
									<option value="Africa/Cairo"   >Africa/Cairo</option>
								
									<option value="Africa/Casablanca"   >Africa/Casablanca</option>
								
									<option value="Africa/Ceuta"   >Africa/Ceuta</option>
								
									<option value="Africa/Conakry"   >Africa/Conakry</option>
								
									<option value="Africa/Dakar"   >Africa/Dakar</option>
								
									<option value="Africa/Dar_es_Salaam"   >Africa/Dar_es_Salaam</option>
								
									<option value="Africa/Djibouti"   >Africa/Djibouti</option>
								
									<option value="Africa/Douala"   >Africa/Douala</option>
								
									<option value="Africa/El_Aaiun"   >Africa/El_Aaiun</option>
								
									<option value="Africa/Freetown"   >Africa/Freetown</option>
								
									<option value="Africa/Gaborone"   >Africa/Gaborone</option>
								
									<option value="Africa/Harare"   >Africa/Harare</option>
								
									<option value="Africa/Johannesburg"   >Africa/Johannesburg</option>
								
									<option value="Africa/Juba"   >Africa/Juba</option>
								
									<option value="Africa/Kampala"   >Africa/Kampala</option>
								
									<option value="Africa/Khartoum"   >Africa/Khartoum</option>
								
									<option value="Africa/Kigali"   >Africa/Kigali</option>
								
									<option value="Africa/Kinshasa"   >Africa/Kinshasa</option>
								
									<option value="Africa/Lagos"   >Africa/Lagos</option>
								
									<option value="Africa/Libreville"   >Africa/Libreville</option>
								
									<option value="Africa/Lome"   >Africa/Lome</option>
								
									<option value="Africa/Luanda"   >Africa/Luanda</option>
								
									<option value="Africa/Lubumbashi"   >Africa/Lubumbashi</option>
								
									<option value="Africa/Lusaka"   >Africa/Lusaka</option>
								
									<option value="Africa/Malabo"   >Africa/Malabo</option>
								
									<option value="Africa/Maputo"   >Africa/Maputo</option>
								
									<option value="Africa/Maseru"   >Africa/Maseru</option>
								
									<option value="Africa/Mbabane"   >Africa/Mbabane</option>
								
									<option value="Africa/Mogadishu"   >Africa/Mogadishu</option>
								
									<option value="Africa/Monrovia"   >Africa/Monrovia</option>
								
									<option value="Africa/Nairobi"   >Africa/Nairobi</option>
								
									<option value="Africa/Ndjamena"   >Africa/Ndjamena</option>
								
									<option value="Africa/Niamey"   >Africa/Niamey</option>
								
									<option value="Africa/Nouakchott"   >Africa/Nouakchott</option>
								
									<option value="Africa/Ouagadougou"   >Africa/Ouagadougou</option>
								
									<option value="Africa/Porto-Novo"   >Africa/Porto-Novo</option>
								
									<option value="Africa/Sao_Tome"   >Africa/Sao_Tome</option>
								
									<option value="Africa/Timbuktu"   >Africa/Timbuktu</option>
								
									<option value="Africa/Tripoli"   >Africa/Tripoli</option>
								
									<option value="Africa/Tunis"   >Africa/Tunis</option>
								
									<option value="Africa/Windhoek"   >Africa/Windhoek</option>
								
									<option value="America/Adak"   >America/Adak</option>
								
									<option value="America/Anchorage"   >America/Anchorage</option>
								
									<option value="America/Anguilla"   >America/Anguilla</option>
								
									<option value="America/Antigua"   >America/Antigua</option>
								
									<option value="America/Araguaina"   >America/Araguaina</option>
								
									<option value="America/Argentina/Buenos_Aires"   >America/Argentina/Buenos_Aires</option>
								
									<option value="America/Argentina/Catamarca"   >America/Argentina/Catamarca</option>
								
									<option value="America/Argentina/ComodRivadavia"   >America/Argentina/ComodRivadavia</option>
								
									<option value="America/Argentina/Cordoba"   >America/Argentina/Cordoba</option>
								
									<option value="America/Argentina/Jujuy"   >America/Argentina/Jujuy</option>
								
									<option value="America/Argentina/La_Rioja"   >America/Argentina/La_Rioja</option>
								
									<option value="America/Argentina/Mendoza"   >America/Argentina/Mendoza</option>
								
									<option value="America/Argentina/Rio_Gallegos"   >America/Argentina/Rio_Gallegos</option>
								
									<option value="America/Argentina/Salta"   >America/Argentina/Salta</option>
								
									<option value="America/Argentina/San_Juan"   >America/Argentina/San_Juan</option>
								
									<option value="America/Argentina/San_Luis"   >America/Argentina/San_Luis</option>
								
									<option value="America/Argentina/Tucuman"   >America/Argentina/Tucuman</option>
								
									<option value="America/Argentina/Ushuaia"   >America/Argentina/Ushuaia</option>
								
									<option value="America/Aruba"   >America/Aruba</option>
								
									<option value="America/Asuncion"   >America/Asuncion</option>
								
									<option value="America/Atikokan"   >America/Atikokan</option>
								
									<option value="America/Atka"   >America/Atka</option>
								
									<option value="America/Bahia"   >America/Bahia</option>
								
									<option value="America/Bahia_Banderas"   >America/Bahia_Banderas</option>
								
									<option value="America/Barbados"   >America/Barbados</option>
								
									<option value="America/Belem"   >America/Belem</option>
								
									<option value="America/Belize"   >America/Belize</option>
								
									<option value="America/Blanc-Sablon"   >America/Blanc-Sablon</option>
								
									<option value="America/Boa_Vista"   >America/Boa_Vista</option>
								
									<option value="America/Bogota"   >America/Bogota</option>
								
									<option value="America/Boise"   >America/Boise</option>
								
									<option value="America/Buenos_Aires"   >America/Buenos_Aires</option>
								
									<option value="America/Cambridge_Bay"   >America/Cambridge_Bay</option>
								
									<option value="America/Campo_Grande"   >America/Campo_Grande</option>
								
									<option value="America/Cancun"   >America/Cancun</option>
								
									<option value="America/Caracas"   >America/Caracas</option>
								
									<option value="America/Catamarca"   >America/Catamarca</option>
								
									<option value="America/Cayenne"   >America/Cayenne</option>
								
									<option value="America/Cayman"   >America/Cayman</option>
								
									<option value="America/Chicago"   >America/Chicago</option>
								
									<option value="America/Chihuahua"   >America/Chihuahua</option>
								
									<option value="America/Coral_Harbour"   >America/Coral_Harbour</option>
								
									<option value="America/Cordoba"   >America/Cordoba</option>
								
									<option value="America/Costa_Rica"   >America/Costa_Rica</option>
								
									<option value="America/Creston"   >America/Creston</option>
								
									<option value="America/Cuiaba"   >America/Cuiaba</option>
								
									<option value="America/Curacao"   >America/Curacao</option>
								
									<option value="America/Danmarkshavn"   >America/Danmarkshavn</option>
								
									<option value="America/Dawson"   >America/Dawson</option>
								
									<option value="America/Dawson_Creek"   >America/Dawson_Creek</option>
								
									<option value="America/Denver"   >America/Denver</option>
								
									<option value="America/Detroit"   >America/Detroit</option>
								
									<option value="America/Dominica"   >America/Dominica</option>
								
									<option value="America/Edmonton"   >America/Edmonton</option>
								
									<option value="America/Eirunepe"   >America/Eirunepe</option>
								
									<option value="America/El_Salvador"   >America/El_Salvador</option>
								
									<option value="America/Ensenada"   >America/Ensenada</option>
								
									<option value="America/Fort_Nelson"   >America/Fort_Nelson</option>
								
									<option value="America/Fort_Wayne"   >America/Fort_Wayne</option>
								
									<option value="America/Fortaleza"   >America/Fortaleza</option>
								
									<option value="America/Glace_Bay"   >America/Glace_Bay</option>
								
									<option value="America/Godthab"   >America/Godthab</option>
								
									<option value="America/Goose_Bay"   >America/Goose_Bay</option>
								
									<option value="America/Grand_Turk"   >America/Grand_Turk</option>
								
									<option value="America/Grenada"   >America/Grenada</option>
								
									<option value="America/Guadeloupe"   >America/Guadeloupe</option>
								
									<option value="America/Guatemala"   >America/Guatemala</option>
								
									<option value="America/Guayaquil"   >America/Guayaquil</option>
								
									<option value="America/Guyana"   >America/Guyana</option>
								
									<option value="America/Halifax"   >America/Halifax</option>
								
									<option value="America/Havana"   >America/Havana</option>
								
									<option value="America/Hermosillo"   >America/Hermosillo</option>
								
									<option value="America/Indiana/Indianapolis"   >America/Indiana/Indianapolis</option>
								
									<option value="America/Indiana/Knox"   >America/Indiana/Knox</option>
								
									<option value="America/Indiana/Marengo"   >America/Indiana/Marengo</option>
								
									<option value="America/Indiana/Petersburg"   >America/Indiana/Petersburg</option>
								
									<option value="America/Indiana/Tell_City"   >America/Indiana/Tell_City</option>
								
									<option value="America/Indiana/Vevay"   >America/Indiana/Vevay</option>
								
									<option value="America/Indiana/Vincennes"   >America/Indiana/Vincennes</option>
								
									<option value="America/Indiana/Winamac"   >America/Indiana/Winamac</option>
								
									<option value="America/Indianapolis"   >America/Indianapolis</option>
								
									<option value="America/Inuvik"   >America/Inuvik</option>
								
									<option value="America/Iqaluit"   >America/Iqaluit</option>
								
									<option value="America/Jamaica"   >America/Jamaica</option>
								
									<option value="America/Jujuy"   >America/Jujuy</option>
								
									<option value="America/Juneau"   >America/Juneau</option>
								
									<option value="America/Kentucky/Louisville"   >America/Kentucky/Louisville</option>
								
									<option value="America/Kentucky/Monticello"   >America/Kentucky/Monticello</option>
								
									<option value="America/Knox_IN"   >America/Knox_IN</option>
								
									<option value="America/Kralendijk"   >America/Kralendijk</option>
								
									<option value="America/La_Paz"   >America/La_Paz</option>
								
									<option value="America/Lima"   >America/Lima</option>
								
									<option value="America/Los_Angeles"   >America/Los_Angeles</option>
								
									<option value="America/Louisville"   >America/Louisville</option>
								
									<option value="America/Lower_Princes"   >America/Lower_Princes</option>
								
									<option value="America/Maceio"   >America/Maceio</option>
								
									<option value="America/Managua"   >America/Managua</option>
								
									<option value="America/Manaus"   >America/Manaus</option>
								
									<option value="America/Marigot"   >America/Marigot</option>
								
									<option value="America/Martinique"   >America/Martinique</option>
								
									<option value="America/Matamoros"   >America/Matamoros</option>
								
									<option value="America/Mazatlan"   >America/Mazatlan</option>
								
									<option value="America/Mendoza"   >America/Mendoza</option>
								
									<option value="America/Menominee"   >America/Menominee</option>
								
									<option value="America/Merida"   >America/Merida</option>
								
									<option value="America/Metlakatla"   >America/Metlakatla</option>
								
									<option value="America/Mexico_City"   >America/Mexico_City</option>
								
									<option value="America/Miquelon"   >America/Miquelon</option>
								
									<option value="America/Moncton"   >America/Moncton</option>
								
									<option value="America/Monterrey"   >America/Monterrey</option>
								
									<option value="America/Montevideo"   >America/Montevideo</option>
								
									<option value="America/Montreal"   >America/Montreal</option>
								
									<option value="America/Montserrat"   >America/Montserrat</option>
								
									<option value="America/Nassau"   >America/Nassau</option>
								
									<option value="America/New_York"   >America/New_York</option>
								
									<option value="America/Nipigon"   >America/Nipigon</option>
								
									<option value="America/Nome"   >America/Nome</option>
								
									<option value="America/Noronha"   >America/Noronha</option>
								
									<option value="America/North_Dakota/Beulah"   >America/North_Dakota/Beulah</option>
								
									<option value="America/North_Dakota/Center"   >America/North_Dakota/Center</option>
								
									<option value="America/North_Dakota/New_Salem"   >America/North_Dakota/New_Salem</option>
								
									<option value="America/Ojinaga"   >America/Ojinaga</option>
								
									<option value="America/Panama"   >America/Panama</option>
								
									<option value="America/Pangnirtung"   >America/Pangnirtung</option>
								
									<option value="America/Paramaribo"   >America/Paramaribo</option>
								
									<option value="America/Phoenix"   >America/Phoenix</option>
								
									<option value="America/Port-au-Prince"   >America/Port-au-Prince</option>
								
									<option value="America/Port_of_Spain"   >America/Port_of_Spain</option>
								
									<option value="America/Porto_Acre"   >America/Porto_Acre</option>
								
									<option value="America/Porto_Velho"   >America/Porto_Velho</option>
								
									<option value="America/Puerto_Rico"   >America/Puerto_Rico</option>
								
									<option value="America/Punta_Arenas"   >America/Punta_Arenas</option>
								
									<option value="America/Rainy_River"   >America/Rainy_River</option>
								
									<option value="America/Rankin_Inlet"   >America/Rankin_Inlet</option>
								
									<option value="America/Recife"   >America/Recife</option>
								
									<option value="America/Regina"   >America/Regina</option>
								
									<option value="America/Resolute"   >America/Resolute</option>
								
									<option value="America/Rio_Branco"   >America/Rio_Branco</option>
								
									<option value="America/Rosario"   >America/Rosario</option>
								
									<option value="America/Santa_Isabel"   >America/Santa_Isabel</option>
								
									<option value="America/Santarem"   >America/Santarem</option>
								
									<option value="America/Santiago"   >America/Santiago</option>
								
									<option value="America/Santo_Domingo"   >America/Santo_Domingo</option>
								
									<option value="America/Sao_Paulo"   >America/Sao_Paulo</option>
								
									<option value="America/Scoresbysund"   >America/Scoresbysund</option>
								
									<option value="America/Shiprock"   >America/Shiprock</option>
								
									<option value="America/Sitka"   >America/Sitka</option>
								
									<option value="America/St_Barthelemy"   >America/St_Barthelemy</option>
								
									<option value="America/St_Johns"   >America/St_Johns</option>
								
									<option value="America/St_Kitts"   >America/St_Kitts</option>
								
									<option value="America/St_Lucia"   >America/St_Lucia</option>
								
									<option value="America/St_Thomas"   >America/St_Thomas</option>
								
									<option value="America/St_Vincent"   >America/St_Vincent</option>
								
									<option value="America/Swift_Current"   >America/Swift_Current</option>
								
									<option value="America/Tegucigalpa"   >America/Tegucigalpa</option>
								
									<option value="America/Thule"   >America/Thule</option>
								
									<option value="America/Thunder_Bay"   >America/Thunder_Bay</option>
								
									<option value="America/Tijuana"   >America/Tijuana</option>
								
									<option value="America/Toronto"   >America/Toronto</option>
								
									<option value="America/Tortola"   >America/Tortola</option>
								
									<option value="America/Vancouver"   >America/Vancouver</option>
								
									<option value="America/Virgin"   >America/Virgin</option>
								
									<option value="America/Whitehorse"   >America/Whitehorse</option>
								
									<option value="America/Winnipeg"   >America/Winnipeg</option>
								
									<option value="America/Yakutat"   >America/Yakutat</option>
								
									<option value="America/Yellowknife"   >America/Yellowknife</option>
								
									<option value="Antarctica/Casey"   >Antarctica/Casey</option>
								
									<option value="Antarctica/Davis"   >Antarctica/Davis</option>
								
									<option value="Antarctica/DumontDUrville"   >Antarctica/DumontDUrville</option>
								
									<option value="Antarctica/Macquarie"   >Antarctica/Macquarie</option>
								
									<option value="Antarctica/Mawson"   >Antarctica/Mawson</option>
								
									<option value="Antarctica/McMurdo"   >Antarctica/McMurdo</option>
								
									<option value="Antarctica/Palmer"   >Antarctica/Palmer</option>
								
									<option value="Antarctica/Rothera"   >Antarctica/Rothera</option>
								
									<option value="Antarctica/South_Pole"   >Antarctica/South_Pole</option>
								
									<option value="Antarctica/Syowa"   >Antarctica/Syowa</option>
								
									<option value="Antarctica/Troll"   >Antarctica/Troll</option>
								
									<option value="Antarctica/Vostok"   >Antarctica/Vostok</option>
								
									<option value="Arctic/Longyearbyen"   >Arctic/Longyearbyen</option>
								
									<option value="Asia/Aden"   >Asia/Aden</option>
								
									<option value="Asia/Almaty"   >Asia/Almaty</option>
								
									<option value="Asia/Amman"   >Asia/Amman</option>
								
									<option value="Asia/Anadyr"   >Asia/Anadyr</option>
								
									<option value="Asia/Aqtau"   >Asia/Aqtau</option>
								
									<option value="Asia/Aqtobe"   >Asia/Aqtobe</option>
								
									<option value="Asia/Ashgabat"   >Asia/Ashgabat</option>
								
									<option value="Asia/Ashkhabad"   >Asia/Ashkhabad</option>
								
									<option value="Asia/Atyrau"   >Asia/Atyrau</option>
								
									<option value="Asia/Baghdad"   >Asia/Baghdad</option>
								
									<option value="Asia/Bahrain"   >Asia/Bahrain</option>
								
									<option value="Asia/Baku"   >Asia/Baku</option>
								
									<option value="Asia/Bangkok"   >Asia/Bangkok</option>
								
									<option value="Asia/Barnaul"   >Asia/Barnaul</option>
								
									<option value="Asia/Beirut"   >Asia/Beirut</option>
								
									<option value="Asia/Bishkek"   >Asia/Bishkek</option>
								
									<option value="Asia/Brunei"   >Asia/Brunei</option>
								
									<option value="Asia/Calcutta"   >Asia/Calcutta</option>
								
									<option value="Asia/Chita"   >Asia/Chita</option>
								
									<option value="Asia/Choibalsan"   >Asia/Choibalsan</option>
								
									<option value="Asia/Chongqing"   >Asia/Chongqing</option>
								
									<option value="Asia/Chungking"   >Asia/Chungking</option>
								
									<option value="Asia/Colombo"   >Asia/Colombo</option>
								
									<option value="Asia/Dacca"   >Asia/Dacca</option>
								
									<option value="Asia/Damascus"   >Asia/Damascus</option>
								
									<option value="Asia/Dhaka"   >Asia/Dhaka</option>
								
									<option value="Asia/Dili"   >Asia/Dili</option>
								
									<option value="Asia/Dubai"   >Asia/Dubai</option>
								
									<option value="Asia/Dushanbe"   >Asia/Dushanbe</option>
								
									<option value="Asia/Famagusta"   >Asia/Famagusta</option>
								
									<option value="Asia/Gaza"   >Asia/Gaza</option>
								
									<option value="Asia/Harbin"   >Asia/Harbin</option>
								
									<option value="Asia/Hebron"   >Asia/Hebron</option>
								
									<option value="Asia/Ho_Chi_Minh"   >Asia/Ho_Chi_Minh</option>
								
									<option value="Asia/Hong_Kong"   >Asia/Hong_Kong</option>
								
									<option value="Asia/Hovd"   >Asia/Hovd</option>
								
									<option value="Asia/Irkutsk"   >Asia/Irkutsk</option>
								
									<option value="Asia/Istanbul"   >Asia/Istanbul</option>
								
									<option value="Asia/Jakarta"   >Asia/Jakarta</option>
								
									<option value="Asia/Jayapura"   >Asia/Jayapura</option>
								
									<option value="Asia/Jerusalem"   >Asia/Jerusalem</option>
								
									<option value="Asia/Kabul"   >Asia/Kabul</option>
								
									<option value="Asia/Kamchatka"   >Asia/Kamchatka</option>
								
									<option value="Asia/Karachi"   >Asia/Karachi</option>
								
									<option value="Asia/Kashgar"   >Asia/Kashgar</option>
								
									<option value="Asia/Kathmandu"   >Asia/Kathmandu</option>
								
									<option value="Asia/Katmandu"   >Asia/Katmandu</option>
								
									<option value="Asia/Khandyga"   >Asia/Khandyga</option>
								
									<option value="Asia/Kolkata"   >Asia/Kolkata</option>
								
									<option value="Asia/Krasnoyarsk"   >Asia/Krasnoyarsk</option>
								
									<option value="Asia/Kuala_Lumpur"   >Asia/Kuala_Lumpur</option>
								
									<option value="Asia/Kuching"   >Asia/Kuching</option>
								
									<option value="Asia/Kuwait"   >Asia/Kuwait</option>
								
									<option value="Asia/Macao"   >Asia/Macao</option>
								
									<option value="Asia/Macau"   >Asia/Macau</option>
								
									<option value="Asia/Magadan"   >Asia/Magadan</option>
								
									<option value="Asia/Makassar"   >Asia/Makassar</option>
								
									<option value="Asia/Manila"   >Asia/Manila</option>
								
									<option value="Asia/Muscat"   >Asia/Muscat</option>
								
									<option value="Asia/Nicosia"   >Asia/Nicosia</option>
								
									<option value="Asia/Novokuznetsk"   >Asia/Novokuznetsk</option>
								
									<option value="Asia/Novosibirsk"   >Asia/Novosibirsk</option>
								
									<option value="Asia/Omsk"   >Asia/Omsk</option>
								
									<option value="Asia/Oral"   >Asia/Oral</option>
								
									<option value="Asia/Phnom_Penh"   >Asia/Phnom_Penh</option>
								
									<option value="Asia/Pontianak"   >Asia/Pontianak</option>
								
									<option value="Asia/Pyongyang"   >Asia/Pyongyang</option>
								
									<option value="Asia/Qatar"   >Asia/Qatar</option>
								
									<option value="Asia/Qyzylorda"   >Asia/Qyzylorda</option>
								
									<option value="Asia/Rangoon"   >Asia/Rangoon</option>
								
									<option value="Asia/Riyadh"   >Asia/Riyadh</option>
								
									<option value="Asia/Saigon"   >Asia/Saigon</option>
								
									<option value="Asia/Sakhalin"   >Asia/Sakhalin</option>
								
									<option value="Asia/Samarkand"   >Asia/Samarkand</option>
								
									<option value="Asia/Seoul"   >Asia/Seoul</option>
								
									<option value="Asia/Shanghai"   >Asia/Shanghai</option>
								
									<option value="Asia/Singapore"   >Asia/Singapore</option>
								
									<option value="Asia/Srednekolymsk"   >Asia/Srednekolymsk</option>
								
									<option value="Asia/Taipei"   >Asia/Taipei</option>
								
									<option value="Asia/Tashkent"   >Asia/Tashkent</option>
								
									<option value="Asia/Tbilisi"   >Asia/Tbilisi</option>
								
									<option value="Asia/Tehran"   >Asia/Tehran</option>
								
									<option value="Asia/Tel_Aviv"   >Asia/Tel_Aviv</option>
								
									<option value="Asia/Thimbu"   >Asia/Thimbu</option>
								
									<option value="Asia/Thimphu"   >Asia/Thimphu</option>
								
									<option value="Asia/Tokyo"   >Asia/Tokyo</option>
								
									<option value="Asia/Tomsk"   >Asia/Tomsk</option>
								
									<option value="Asia/Ujung_Pandang"   >Asia/Ujung_Pandang</option>
								
									<option value="Asia/Ulaanbaatar"   >Asia/Ulaanbaatar</option>
								
									<option value="Asia/Ulan_Bator"   >Asia/Ulan_Bator</option>
								
									<option value="Asia/Urumqi"   >Asia/Urumqi</option>
								
									<option value="Asia/Ust-Nera"   >Asia/Ust-Nera</option>
								
									<option value="Asia/Vientiane"   >Asia/Vientiane</option>
								
									<option value="Asia/Vladivostok"   >Asia/Vladivostok</option>
								
									<option value="Asia/Yakutsk"   >Asia/Yakutsk</option>
								
									<option value="Asia/Yangon"   >Asia/Yangon</option>
								
									<option value="Asia/Yekaterinburg"   >Asia/Yekaterinburg</option>
								
									<option value="Asia/Yerevan"   >Asia/Yerevan</option>
								
									<option value="Atlantic/Azores"   >Atlantic/Azores</option>
								
									<option value="Atlantic/Bermuda"   >Atlantic/Bermuda</option>
								
									<option value="Atlantic/Canary"   >Atlantic/Canary</option>
								
									<option value="Atlantic/Cape_Verde"   >Atlantic/Cape_Verde</option>
								
									<option value="Atlantic/Faeroe"   >Atlantic/Faeroe</option>
								
									<option value="Atlantic/Faroe"   >Atlantic/Faroe</option>
								
									<option value="Atlantic/Jan_Mayen"   >Atlantic/Jan_Mayen</option>
								
									<option value="Atlantic/Madeira"   >Atlantic/Madeira</option>
								
									<option value="Atlantic/Reykjavik"   >Atlantic/Reykjavik</option>
								
									<option value="Atlantic/South_Georgia"   >Atlantic/South_Georgia</option>
								
									<option value="Atlantic/St_Helena"   >Atlantic/St_Helena</option>
								
									<option value="Atlantic/Stanley"   >Atlantic/Stanley</option>
								
									<option value="Australia/ACT"   >Australia/ACT</option>
								
									<option value="Australia/Adelaide"   >Australia/Adelaide</option>
								
									<option value="Australia/Brisbane"   >Australia/Brisbane</option>
								
									<option value="Australia/Broken_Hill"   >Australia/Broken_Hill</option>
								
									<option value="Australia/Canberra"   >Australia/Canberra</option>
								
									<option value="Australia/Currie"   >Australia/Currie</option>
								
									<option value="Australia/Darwin"   >Australia/Darwin</option>
								
									<option value="Australia/Eucla"   >Australia/Eucla</option>
								
									<option value="Australia/Hobart"   >Australia/Hobart</option>
								
									<option value="Australia/LHI"   >Australia/LHI</option>
								
									<option value="Australia/Lindeman"   >Australia/Lindeman</option>
								
									<option value="Australia/Lord_Howe"   >Australia/Lord_Howe</option>
								
									<option value="Australia/Melbourne"   >Australia/Melbourne</option>
								
									<option value="Australia/North"   >Australia/North</option>
								
									<option value="Australia/NSW"   >Australia/NSW</option>
								
									<option value="Australia/Perth"   >Australia/Perth</option>
								
									<option value="Australia/Queensland"   >Australia/Queensland</option>
								
									<option value="Australia/South"   >Australia/South</option>
								
									<option value="Australia/Sydney"   >Australia/Sydney</option>
								
									<option value="Australia/Tasmania"   >Australia/Tasmania</option>
								
									<option value="Australia/Victoria"   >Australia/Victoria</option>
								
									<option value="Australia/West"   >Australia/West</option>
								
									<option value="Australia/Yancowinna"   >Australia/Yancowinna</option>
								
									<option value="Brazil/Acre"   >Brazil/Acre</option>
								
									<option value="Brazil/DeNoronha"   >Brazil/DeNoronha</option>
								
									<option value="Brazil/East"   >Brazil/East</option>
								
									<option value="Brazil/West"   >Brazil/West</option>
								
									<option value="Canada/Atlantic"   >Canada/Atlantic</option>
								
									<option value="Canada/Central"   >Canada/Central</option>
								
									<option value="Canada/Eastern"   >Canada/Eastern</option>
								
									<option value="Canada/Mountain"   >Canada/Mountain</option>
								
									<option value="Canada/Newfoundland"   >Canada/Newfoundland</option>
								
									<option value="Canada/Pacific"   >Canada/Pacific</option>
								
									<option value="Canada/Saskatchewan"   >Canada/Saskatchewan</option>
								
									<option value="Canada/Yukon"   >Canada/Yukon</option>
								
									<option value="CET"   >CET</option>
								
									<option value="Chile/Continental"   >Chile/Continental</option>
								
									<option value="Chile/EasterIsland"   >Chile/EasterIsland</option>
								
									<option value="CST6CDT"   >CST6CDT</option>
								
									<option value="Cuba"   >Cuba</option>
								
									<option value="EET"   >EET</option>
								
									<option value="Egypt"   >Egypt</option>
								
									<option value="Eire"   >Eire</option>
								
									<option value="EST"   >EST</option>
								
									<option value="EST5EDT"   >EST5EDT</option>
								
									<option value="Etc/GMT"   >Etc/GMT</option>
								
									<option value="Etc/GMT-0"   >Etc/GMT-0</option>
								
									<option value="Etc/GMT-1"   >Etc/GMT-1</option>
								
									<option value="Etc/GMT-10"   >Etc/GMT-10</option>
								
									<option value="Etc/GMT-11"   >Etc/GMT-11</option>
								
									<option value="Etc/GMT-12"   >Etc/GMT-12</option>
								
									<option value="Etc/GMT-13"   >Etc/GMT-13</option>
								
									<option value="Etc/GMT-14"   >Etc/GMT-14</option>
								
									<option value="Etc/GMT-2"   >Etc/GMT-2</option>
								
									<option value="Etc/GMT-3"   >Etc/GMT-3</option>
								
									<option value="Etc/GMT-4"   >Etc/GMT-4</option>
								
									<option value="Etc/GMT-5"   >Etc/GMT-5</option>
								
									<option value="Etc/GMT-6"   >Etc/GMT-6</option>
								
									<option value="Etc/GMT-7"   >Etc/GMT-7</option>
								
									<option value="Etc/GMT-8"   >Etc/GMT-8</option>
								
									<option value="Etc/GMT-9"   >Etc/GMT-9</option>
								
									<option value="Etc/GMT+0"   >Etc/GMT+0</option>
								
									<option value="Etc/GMT+1"   >Etc/GMT+1</option>
								
									<option value="Etc/GMT+10"   >Etc/GMT+10</option>
								
									<option value="Etc/GMT+11"   >Etc/GMT+11</option>
								
									<option value="Etc/GMT+12"   >Etc/GMT+12</option>
								
									<option value="Etc/GMT+2"   >Etc/GMT+2</option>
								
									<option value="Etc/GMT+3"   >Etc/GMT+3</option>
								
									<option value="Etc/GMT+4"   >Etc/GMT+4</option>
								
									<option value="Etc/GMT+5"   >Etc/GMT+5</option>
								
									<option value="Etc/GMT+6"   >Etc/GMT+6</option>
								
									<option value="Etc/GMT+7"   >Etc/GMT+7</option>
								
									<option value="Etc/GMT+8"   >Etc/GMT+8</option>
								
									<option value="Etc/GMT+9"   >Etc/GMT+9</option>
								
									<option value="Etc/GMT0"   >Etc/GMT0</option>
								
									<option value="Etc/Greenwich"   >Etc/Greenwich</option>
								
									<option value="Etc/UCT"   >Etc/UCT</option>
								
									<option value="Etc/Universal"   >Etc/Universal</option>
								
									<option value="Etc/UTC"   >Etc/UTC</option>
								
									<option value="Etc/Zulu"   >Etc/Zulu</option>
								
									<option value="Europe/Amsterdam"   >Europe/Amsterdam</option>
								
									<option value="Europe/Andorra"   >Europe/Andorra</option>
								
									<option value="Europe/Astrakhan"   >Europe/Astrakhan</option>
								
									<option value="Europe/Athens"   >Europe/Athens</option>
								
									<option value="Europe/Belfast"   >Europe/Belfast</option>
								
									<option value="Europe/Belgrade"   >Europe/Belgrade</option>
								
									<option value="Europe/Berlin"   >Europe/Berlin</option>
								
									<option value="Europe/Bratislava"   >Europe/Bratislava</option>
								
									<option value="Europe/Brussels"   >Europe/Brussels</option>
								
									<option value="Europe/Bucharest"   >Europe/Bucharest</option>
								
									<option value="Europe/Budapest"   >Europe/Budapest</option>
								
									<option value="Europe/Busingen"   >Europe/Busingen</option>
								
									<option value="Europe/Chisinau"   >Europe/Chisinau</option>
								
									<option value="Europe/Copenhagen"   >Europe/Copenhagen</option>
								
									<option value="Europe/Dublin"   >Europe/Dublin</option>
								
									<option value="Europe/Gibraltar"   >Europe/Gibraltar</option>
								
									<option value="Europe/Guernsey"   >Europe/Guernsey</option>
								
									<option value="Europe/Helsinki"   >Europe/Helsinki</option>
								
									<option value="Europe/Isle_of_Man"   >Europe/Isle_of_Man</option>
								
									<option value="Europe/Istanbul"   >Europe/Istanbul</option>
								
									<option value="Europe/Jersey"   >Europe/Jersey</option>
								
									<option value="Europe/Kaliningrad"   >Europe/Kaliningrad</option>
								
									<option value="Europe/Kiev"   >Europe/Kiev</option>
								
									<option value="Europe/Kirov"   >Europe/Kirov</option>
								
									<option value="Europe/Lisbon"   >Europe/Lisbon</option>
								
									<option value="Europe/Ljubljana"   >Europe/Ljubljana</option>
								
									<option value="Europe/London"   >Europe/London</option>
								
									<option value="Europe/Luxembourg"   >Europe/Luxembourg</option>
								
									<option value="Europe/Madrid"   >Europe/Madrid</option>
								
									<option value="Europe/Malta"   >Europe/Malta</option>
								
									<option value="Europe/Mariehamn"   >Europe/Mariehamn</option>
								
									<option value="Europe/Minsk"   >Europe/Minsk</option>
								
									<option value="Europe/Monaco"   >Europe/Monaco</option>
								
									<option value="Europe/Moscow"   >Europe/Moscow</option>
								
									<option value="Europe/Nicosia"   >Europe/Nicosia</option>
								
									<option value="Europe/Oslo"   >Europe/Oslo</option>
								
									<option value="Europe/Paris"   >Europe/Paris</option>
								
									<option value="Europe/Podgorica"   >Europe/Podgorica</option>
								
									<option value="Europe/Prague"   >Europe/Prague</option>
								
									<option value="Europe/Riga"   >Europe/Riga</option>
								
									<option value="Europe/Rome"   >Europe/Rome</option>
								
									<option value="Europe/Samara"   >Europe/Samara</option>
								
									<option value="Europe/San_Marino"   >Europe/San_Marino</option>
								
									<option value="Europe/Sarajevo"   >Europe/Sarajevo</option>
								
									<option value="Europe/Saratov"   >Europe/Saratov</option>
								
									<option value="Europe/Simferopol"   >Europe/Simferopol</option>
								
									<option value="Europe/Skopje"   >Europe/Skopje</option>
								
									<option value="Europe/Sofia"   >Europe/Sofia</option>
								
									<option value="Europe/Stockholm"   >Europe/Stockholm</option>
								
									<option value="Europe/Tallinn"   >Europe/Tallinn</option>
								
									<option value="Europe/Tirane"   >Europe/Tirane</option>
								
									<option value="Europe/Tiraspol"   >Europe/Tiraspol</option>
								
									<option value="Europe/Ulyanovsk"   >Europe/Ulyanovsk</option>
								
									<option value="Europe/Uzhgorod"   >Europe/Uzhgorod</option>
								
									<option value="Europe/Vaduz"   >Europe/Vaduz</option>
								
									<option value="Europe/Vatican"   >Europe/Vatican</option>
								
									<option value="Europe/Vienna"   >Europe/Vienna</option>
								
									<option value="Europe/Vilnius"   >Europe/Vilnius</option>
								
									<option value="Europe/Volgograd"   >Europe/Volgograd</option>
								
									<option value="Europe/Warsaw"   >Europe/Warsaw</option>
								
									<option value="Europe/Zagreb"   >Europe/Zagreb</option>
								
									<option value="Europe/Zaporozhye"   >Europe/Zaporozhye</option>
								
									<option value="Europe/Zurich"   >Europe/Zurich</option>
								
									<option value="GB"   >GB</option>
								
									<option value="GB-Eire"   >GB-Eire</option>
								
									<option value="GMT"   >GMT</option>
								
									<option value="GMT-0"   >GMT-0</option>
								
									<option value="GMT+0"   >GMT+0</option>
								
									<option value="GMT0"   >GMT0</option>
								
									<option value="Greenwich"   >Greenwich</option>
								
									<option value="Hongkong"   >Hongkong</option>
								
									<option value="HST"   >HST</option>
								
									<option value="Iceland"   >Iceland</option>
								
									<option value="Indian/Antananarivo"   >Indian/Antananarivo</option>
								
									<option value="Indian/Chagos"   >Indian/Chagos</option>
								
									<option value="Indian/Christmas"   >Indian/Christmas</option>
								
									<option value="Indian/Cocos"   >Indian/Cocos</option>
								
									<option value="Indian/Comoro"   >Indian/Comoro</option>
								
									<option value="Indian/Kerguelen"   >Indian/Kerguelen</option>
								
									<option value="Indian/Mahe"   >Indian/Mahe</option>
								
									<option value="Indian/Maldives"   >Indian/Maldives</option>
								
									<option value="Indian/Mauritius"   >Indian/Mauritius</option>
								
									<option value="Indian/Mayotte"   >Indian/Mayotte</option>
								
									<option value="Indian/Reunion"   >Indian/Reunion</option>
								
									<option value="Iran"   >Iran</option>
								
									<option value="Israel"   >Israel</option>
								
									<option value="Jamaica"   >Jamaica</option>
								
									<option value="Japan"   >Japan</option>
								
									<option value="Kwajalein"   >Kwajalein</option>
								
									<option value="Libya"   >Libya</option>
								
									<option value="MET"   >MET</option>
								
									<option value="Mexico/BajaNorte"   >Mexico/BajaNorte</option>
								
									<option value="Mexico/BajaSur"   >Mexico/BajaSur</option>
								
									<option value="Mexico/General"   >Mexico/General</option>
								
									<option value="MST"   >MST</option>
								
									<option value="MST7MDT"   >MST7MDT</option>
								
									<option value="Navajo"   >Navajo</option>
								
									<option value="NZ"   >NZ</option>
								
									<option value="NZ-CHAT"   >NZ-CHAT</option>
								
									<option value="Pacific/Apia"   >Pacific/Apia</option>
								
									<option value="Pacific/Auckland"   >Pacific/Auckland</option>
								
									<option value="Pacific/Bougainville"   >Pacific/Bougainville</option>
								
									<option value="Pacific/Chatham"   >Pacific/Chatham</option>
								
									<option value="Pacific/Chuuk"   >Pacific/Chuuk</option>
								
									<option value="Pacific/Easter"   >Pacific/Easter</option>
								
									<option value="Pacific/Efate"   >Pacific/Efate</option>
								
									<option value="Pacific/Enderbury"   >Pacific/Enderbury</option>
								
									<option value="Pacific/Fakaofo"   >Pacific/Fakaofo</option>
								
									<option value="Pacific/Fiji"   >Pacific/Fiji</option>
								
									<option value="Pacific/Funafuti"   >Pacific/Funafuti</option>
								
									<option value="Pacific/Galapagos"   >Pacific/Galapagos</option>
								
									<option value="Pacific/Gambier"   >Pacific/Gambier</option>
								
									<option value="Pacific/Guadalcanal"   >Pacific/Guadalcanal</option>
								
									<option value="Pacific/Guam"   >Pacific/Guam</option>
								
									<option value="Pacific/Honolulu"   >Pacific/Honolulu</option>
								
									<option value="Pacific/Johnston"   >Pacific/Johnston</option>
								
									<option value="Pacific/Kiritimati"   >Pacific/Kiritimati</option>
								
									<option value="Pacific/Kosrae"   >Pacific/Kosrae</option>
								
									<option value="Pacific/Kwajalein"   >Pacific/Kwajalein</option>
								
									<option value="Pacific/Majuro"   >Pacific/Majuro</option>
								
									<option value="Pacific/Marquesas"   >Pacific/Marquesas</option>
								
									<option value="Pacific/Midway"   >Pacific/Midway</option>
								
									<option value="Pacific/Nauru"   >Pacific/Nauru</option>
								
									<option value="Pacific/Niue"   >Pacific/Niue</option>
								
									<option value="Pacific/Norfolk"   >Pacific/Norfolk</option>
								
									<option value="Pacific/Noumea"   >Pacific/Noumea</option>
								
									<option value="Pacific/Pago_Pago"   >Pacific/Pago_Pago</option>
								
									<option value="Pacific/Palau"   >Pacific/Palau</option>
								
									<option value="Pacific/Pitcairn"   >Pacific/Pitcairn</option>
								
									<option value="Pacific/Pohnpei"   >Pacific/Pohnpei</option>
								
									<option value="Pacific/Ponape"   >Pacific/Ponape</option>
								
									<option value="Pacific/Port_Moresby"   >Pacific/Port_Moresby</option>
								
									<option value="Pacific/Rarotonga"   >Pacific/Rarotonga</option>
								
									<option value="Pacific/Saipan"   >Pacific/Saipan</option>
								
									<option value="Pacific/Samoa"   >Pacific/Samoa</option>
								
									<option value="Pacific/Tahiti"   >Pacific/Tahiti</option>
								
									<option value="Pacific/Tarawa"   >Pacific/Tarawa</option>
								
									<option value="Pacific/Tongatapu"   >Pacific/Tongatapu</option>
								
									<option value="Pacific/Truk"   >Pacific/Truk</option>
								
									<option value="Pacific/Wake"   >Pacific/Wake</option>
								
									<option value="Pacific/Wallis"   >Pacific/Wallis</option>
								
									<option value="Pacific/Yap"   >Pacific/Yap</option>
								
									<option value="Poland"   >Poland</option>
								
									<option value="Portugal"   >Portugal</option>
								
									<option value="posixrules"   >posixrules</option>
								
									<option value="PRC"   >PRC</option>
								
									<option value="PST8PDT"   >PST8PDT</option>
								
									<option value="ROC"   >ROC</option>
								
									<option value="ROK"   >ROK</option>
								
									<option value="Singapore"   >Singapore</option>
								
									<option value="Turkey"   >Turkey</option>
								
									<option value="UCT"   >UCT</option>
								
									<option value="Universal"   >Universal</option>
								
									<option value="US/Alaska"   >US/Alaska</option>
								
									<option value="US/Aleutian"   >US/Aleutian</option>
								
									<option value="US/Arizona"   >US/Arizona</option>
								
									<option value="US/Central"   >US/Central</option>
								
									<option value="US/East-Indiana"   >US/East-Indiana</option>
								
									<option value="US/Eastern"   >US/Eastern</option>
								
									<option value="US/Hawaii"   >US/Hawaii</option>
								
									<option value="US/Indiana-Starke"   >US/Indiana-Starke</option>
								
									<option value="US/Michigan"   >US/Michigan</option>
								
									<option value="US/Mountain"   >US/Mountain</option>
								
									<option value="US/Pacific"   >US/Pacific</option>
								
									<option value="US/Samoa"   >US/Samoa</option>
								
									<option value="UTC"   >UTC</option>
								
									<option value="W-SU"   >W-SU</option>
								
									<option value="WET"   >WET</option>
								
									<option value="Zulu"   >Zulu</option>
								
					</select>
				</div>
								
				<div class="form-group col-3">
					<label class="control-label mb-1 " for="user_status">Status </label>
					<select class="form-control custom-select" name="user_status" id="user_status" required >
						<option value="A"  >Active</option>
						<option value="I"  >Inactive</option>
						<option value="S"  >Suspended</option>
					</select>
				</div>

				<div class="form-group col-4">
					<label class="control-label mb-1 ">Inactive Date </label>
					<input type="text" id="inactive_date" name="inactive_date" class="form-control" style="max-width: 145px;" maxlength="11" value="" onblur="if(!(check_date(this))){this.value='';}">					
				</div>
			</div>
												
		</div>
		
		<div class="container-fluid my-0 xpb-2 px-4 bg-light xborder-bottom">
			<div id="d_err" ></div>
		</div>
		
		<div class="container-fluid px-0 py-2 text-center bg-white  fixed-bottom border-top">
		
			<button name="btnCancel" id="btnCancel" class="btn xbtn-sm bg-secondary py-1 text-white mr-1" value="Cancel" >
				<i class="fa fa-times"></i> Cancel</button>
			<button type="submit" name="btnSave" id="btnSave" class="btn xbtn-sm bg-primary py-1 text-white ml-1 " value="Save" >
				<i class="fa fa-save"></i> Save</button>
		</div>
		
		</form>
	</main>

</body>
<script>
	
$(function(){
	_init();
		
	$("#btnCancel").on('click',function(e){
		e.preventDefault();
		
		window.parent.document.getElementById('__nhPopWindow_no').click();
		return false;
	});
	
	
	$("form").submit(function( event ) {			
		event.preventDefault();
		
		_Save();
		
		return false;
	});
		
	$("#user_status").on('change',function(){
		if ($(this).val() == "A") {
			//-- clear out inactive date if its <= current date
			if ( fn_CompareDateSysdate("inactive_date","00:00" ) ) {;					
				$( "#inactive_date" ).val("");
			}
		}
	});
	
	$("#credits_management_ind").on('click',function(e){
		if ($(this).is(':checked')) {
			$("#hcredits_management_ind" ).val('Y');
			$("#status_desc" ).replaceWith('<span id="status_desc" class="pl-3">Yes</span>' );
		} else {
			$("#hcredits_management_ind" ).val('N');
			$("#status_desc" ).replaceWith('<span id="status_desc" class="pl-3">No</span>' );
		}
				
	});

	$('#user_group, #company_id').on('change',function(){
		var t_user_group = $('#user_group').val(),
				t_company_id = $('#company_id').val();
		if (t_user_group == '10' && t_company_id == '1'){
			$('#amend_credit_ind_group').removeClass('d-none');
		}
		else{
			$('#amend_credit_ind_group').addClass('d-none').val();
			$("#status_desc" ).replaceWith('<span id="status_desc" class="pl-3">No</span>' );
			$("#hcredits_management_ind" ).val('N');
		}
	})
});

function _Save(){
	//-- check mandatory before saving
	
	//-- save data	
	$.ajax({
		url: "/bn_moh_uat/mnt/accounts/cfc_accounts.cfc?method=saveInfo",
		type: "POST",
		cache: false,
		data: $('#frmMain').serializeArray(),
		success: function( response ) {
			var t_returnMsg = fn_parseAJAXRespond(response);
			if (!t_returnMsg.status){
				return false;
			}
			var returnMsg = JSON.parse(t_returnMsg.message);
				if (!returnMsg.success){
					fn_HideAnimator();
					//$("#d_err" ).replaceWith('<div id="d_err" class="small text-danger">' + returnMsg.data + '</div>' );
					
					$("#d_err" ).replaceWith('<div id="d_err" class="alert alert-danger text-center small py-0">' + returnMsg.data + '</div>' );
					
					
										
					//displayMsg(returnMsg.message).then(function(){
					//});
					return false;
			} else{
				fn_HideAnimator();
				$("#d_err").hide();
				
				window.parent.document.getElementById('__nhPopWindow_ok').click();
				
				return true;
			}
		},
		error: function(request, status, error){
			fn_ajaxFail(request, status, error).then(function(){
				
			});
			fn_HideAnimator();
		},
		beforeSend: function(){
			fn_ShowAnimator();
		},
		complete: function(){
			fn_HideAnimator();
		}
	});		//-- end ajax
}

function _init(){
	top.$('#__nhPopWindow_title').html('New User Account'); 
		$('#email').focus();
	
	
	$('#inactive_date').datepicker({
		todayBtn: "linked",
		orientation: "top right",
		autoclose: true,
		format: "dd-M-yyyy",
		todayHighlight: true
	}).on('show', function(e) {
    	//$('.datepicker').css('top',$(this).offset().top+$(this).outerHeight(true));
    });
}


function fn_CompareDateSysdate(aDate, aTime){
	if ($("#"+aDate).val()) {
	} else {
		return true;
	}
	if ($("#"+aTime).val()) {
		var larr_time = $("#"+aTime).val().split(":");
	} else {
		var larr_time = aTime.split(":");
	}
	
	var ld_sysdate = new Date();
	var ld_date = new ctod($("#"+aDate).val());
	//var larr_time = $("#"+aTime).val().split(":");
	var ldt_date = new Date (ld_date.getFullYear(), ld_date.getMonth(), ld_date.getDate(),parseInt(larr_time[0]),parseInt(larr_time[1]));
	
	if (ldt_date > ld_sysdate){
		return false;
	}
	
	return true;
};


</script>
</html>

				  
				  <script>
				  	
				  		function windowResize(){
								if ($('.navbar').length > 0) $('body').css('margin-top',$('.navbar').height()+60);
							};
							windowResize();
							$(window).on('resize',windowResize);
				  	
							if (sessionStorage.getItem('sessionid') === null){
								sessionStorage.setItem('sessionid', '2F42CB8561132DCCC23176E4D693486D_2105348_458e7b7fee5bedb9-F206D385-052B-3469-6A1B0E2E8DE58FAD');
								sessionStorage.setItem('event_id', '20250109003821');
							}
							else if (sessionStorage.getItem('sessionid') != '2F42CB8561132DCCC23176E4D693486D_2105348_458e7b7fee5bedb9-F206D385-052B-3469-6A1B0E2E8DE58FAD'){
								var t_event_id = '0';
								if (sessionStorage.getItem('event_id') != null){
									t_event_id = sessionStorage.getItem('event_id');
								}
								top.location.href='https://eyris.io/bn_moh_uat/invalid_session.cfm?event_id=' + t_event_id;
							}
							
	    		</script>
	    	