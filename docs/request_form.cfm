
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
		<form name="frmMain" id="frmMain" method="post" class="xbg-secondary" >
		<div class="container-fluid pt-2 pb-2 px-4 bg-light xborder-bottom">
			<input type="hidden" name="item_id" id="item_id" value="0">
			<input type="hidden" name="nameSpecialChars" value="~`!1@2#3$4%5^6&7*8(9)0-_+={}[]|\:;,.<>/?">
			
			<input type="hidden" name="fC5B5E6C29494887D6368D2D1D2F7D62FA221175BE632FA991F7A30ADA9654B3D012102256F1074C26D3702D2A934E8A64940FE23F2F0182F0A821623141853AA" value="A216961EB3D4FEFA7727D8567578AA680A4F27BB">

			<div class="row">
				<div class="col-12">
					<div class="form-group mb-2">
						<label class="control-label mb-1 ">Description </label>
						<input type="text" name="description" id="description" value="" class="form-control" required maxlength="200" 
						oninvalid="this.setCustomValidity('Please fill out this field.')" oninput="setCustomValidity('')">
					</div>

					<div class="form-row xmb-1">
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 px-2 ">
							<div class="form-row row-eq-height ">
								<div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 d-flex ">
									<div class="col border border-info rounded p-2 mb-2">
										<div class="form-row mb-1">
											<div class="form-group col-4">
												<label class="control-label mb-1 ">Screening Model </label>
												<select class="form-control custom-select" name="grading_id" id="grading_id" required >
													<option value="P"  >Fully Automated</option>
													
														<option value="S"  >Semi-Automated</option>
													
												</select>
											</div>
											<div class="form-group col-5">
												<label class="control-label mb-1 ">Image Report Preference </label>
												<select class="form-control custom-select" name="report_ind" id="report_ind" required >
													<option value="MC"  >Macula Centered</option>
													<option value="OC"  >Optic Disc Centered</option>
												</select>
											</div>
										</div>
										<div class="form-row mb-1">
											<div class="form-group col-9">
												<label class="control-label mb-1 ">Parent Organization </label>
												<select class="form-control custom-select" name="parent_company_id" id="parent_company_id" required oninvalid="this.setCustomValidity('Please fill out this field.')" onchange="setCustomValidity('')">
													<option value=""></option>
													
														<option value="8"   >Belait Hospital (TOPCON)</option>
														
														<option value="10"   >Berakas Health Centre</option>
														
														<option value="2"   >Brunei MOH</option>
														
														<option value="3"   >Brunei MOH Ocular Reading Centre</option>
														
														<option value="1"   >EyRIS</option>
														
														<option value="14"   >Mobile Bus 1</option>
														
														<option value="15"   >Mobile Bus 2</option>
														
														<option value="12"   >Muara Health Centre</option>
														
														<option value="11"   >Rimba Health Centre</option>
														
														<option value="6"   >RIPAS Hospital (Endocrinology)</option>
														
														<option value="5"   >RIPAS Hospital (TOPCON)</option>
														
														<option value="13"   >Sengkurong Health Centre</option>
														
														<option value="9"   >Temburong Hospital</option>
														
														<option value="7"   >Tutong Hospital (TOPCON)</option>
														
												</select>
											</div>
										</div>
										<div class="form-row">
											<div class="form-group col-6">
												<label class="control-label mb-1 ">Ocular Reading Centre </label>
												<select class="form-control custom-select" name="secondary_id" id="secondary_id" oninvalid="this.setCustomValidity('Please fill out this field.')" onchange="setCustomValidity('')">
													<option value=""></option>
													
														<option value="8"   >Belait Hospital (TOPCON)</option>
														
														<option value="10"   >Berakas Health Centre</option>
														
														<option value="2"   >Brunei MOH</option>
														
														<option value="3"   >Brunei MOH Ocular Reading Centre</option>
														
														<option value="1"   >EyRIS</option>
														
														<option value="14"   >Mobile Bus 1</option>
														
														<option value="15"   >Mobile Bus 2</option>
														
														<option value="12"   >Muara Health Centre</option>
														
														<option value="11"   >Rimba Health Centre</option>
														
														<option value="6"   >RIPAS Hospital (Endocrinology)</option>
														
														<option value="5"   >RIPAS Hospital (TOPCON)</option>
														
														<option value="13"   >Sengkurong Health Centre</option>
														
														<option value="9"   >Temburong Hospital</option>
														
														<option value="7"   >Tutong Hospital (TOPCON)</option>
														
												</select>
											</div>
											<div class="form-group col-6">
												<label class="control-label mb-1 ">Auxiliary Image Acquisition </label>
												<select class="form-control custom-select" name="collect_company_id" id="collect_company_id" >
													<option value=""></option>
													
														<option value="8"   >Belait Hospital (TOPCON)</option>
														
														<option value="10"   >Berakas Health Centre</option>
														
														<option value="2"   >Brunei MOH</option>
														
														<option value="3"   >Brunei MOH Ocular Reading Centre</option>
														
														<option value="1"   >EyRIS</option>
														
														<option value="14"   >Mobile Bus 1</option>
														
														<option value="15"   >Mobile Bus 2</option>
														
														<option value="12"   >Muara Health Centre</option>
														
														<option value="11"   >Rimba Health Centre</option>
														
														<option value="6"   >RIPAS Hospital (Endocrinology)</option>
														
														<option value="5"   >RIPAS Hospital (TOPCON)</option>
														
														<option value="13"   >Sengkurong Health Centre</option>
														
														<option value="9"   >Temburong Hospital</option>
														
														<option value="7"   >Tutong Hospital (TOPCON)</option>
														
												</select>
											</div>
										</div>
										<div class="form-row">
											<div class="form-group col-4">
												<label class="control-label mb-1 ">Contact Name </label>
												<input type="text" name="contact_name" id="contact_name" value="" class="form-control" maxlength="200" onkeyup="validateSpecialCharacters(this,document.frmMain.nameSpecialChars,'Y','Y');">
											</div>
											<div class="form-group col-4">
												<label class="control-label mb-1 ">Email </label>
												<input type="email" name="contact_email" id="contact_email" value="" class="form-control" maxlength="50" oninvalid="this.setCustomValidity('Please enter a valid email address.')" oninput="setCustomValidity('')" onchange="if (this.value==''){setCustomValidity('');}">
											</div>
											<div class="form-group col-4">
												<label class="control-label mb-1 ">Contact Number </label>
												<input type="text" name="contact_no" id="contact_no" value="" class="form-control" maxlength="20" onkeyup="chkphoneval(this,2,'contact_no');" >
											</div>
										</div>
										<div class="form-row">
											<div class="form-group col-12">
												<label class="control-label mb-1 ">Contact Address </label>
												<textarea name="contact_address" id="contact_address" class="form-control" maxlength="200" style="height: 60px;"></textarea>
											</div>
										</div>
										
									</div>
								</div>

								
								<div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 pb-2">
									<div class="col border border-info rounded p-2 mb-2 xd-flex h-100">
										<div class="form-row mb-0 " >
											
											<div class="form-group col-12">
												<div class="form-row">
													<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
														Diseases
													</div>
												</div>
												
																<div class="form-row ">
																	<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 pl-3 py-1 font-weight-bold">
																		SELENA+
																	</div>
																</div>
															

															<div class="form-row pl-4">
																<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 pl-3 py-1 ">
																	<div class="form-check col-12">
																		<input class="form-check-input diseases " type="checkbox" id="disease_cd_1" name="disease_cd_1" data-id="DR" value="DR" 
																			  style="height:16px; width:16px; " >
																		<label class="form-check-label pl-1" for="disease_cd_1" style="cursor:pointer;">Diabetic Retinopathy</label>
																	</div>
																</div>
															</div>

															

															<div class="form-row pl-4">
																<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 pl-3 py-1 ">
																	<div class="form-check col-12">
																		<input class="form-check-input diseases " type="checkbox" id="disease_cd_2" name="disease_cd_2" data-id="GLAUCOMA" value="GLAUCOMA" 
																			  style="height:16px; width:16px; " >
																		<label class="form-check-label pl-1" for="disease_cd_2" style="cursor:pointer;">Glaucoma Suspect</label>
																	</div>
																</div>
															</div>

															

															<div class="form-row pl-4">
																<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 pl-3 py-1 ">
																	<div class="form-check col-12">
																		<input class="form-check-input diseases " type="checkbox" id="disease_cd_3" name="disease_cd_3" data-id="AMD" value="AMD" 
																			  style="height:16px; width:16px; " >
																		<label class="form-check-label pl-1" for="disease_cd_3" style="cursor:pointer;">Age-Related Macular Degeneration</label>
																	</div>
																</div>
															</div>

															
																<div class="form-row ">
																	<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 pl-3 py-1 font-weight-bold">
																		RetiKID
																	</div>
																</div>
															

															<div class="form-row pl-4">
																<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 pl-3 py-1 ">
																	<div class="form-check col-12">
																		<input class="form-check-input diseases " type="checkbox" id="disease_cd_4" name="disease_cd_4" data-id="CKD" value="CKD" 
																			  style="height:16px; width:16px; " >
																		<label class="form-check-label pl-1" for="disease_cd_4" style="cursor:pointer;">Chronic Kidney Disease</label>
																	</div>
																</div>
															</div>

															
												
												
												<input type="hidden" id="diseases_count" name="diseases_count" value="4">
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>

				</div>				
			</div>
						
		</div>

		<div class="container-fluid px-0 py-2 text-center bg-white  fixed-bottom border-top">
			<button type="button" name="btnCancel" id="btnCancel" class="btn xbtn-sm bg-secondary py-1 text-white mr-1" title="Cancel" >
				<i class="fa fa-times"></i> Cancel</button>

			
				<button type="submit" name="btnSave" id="btnSave" class="btn xbtn-sm bg-primary py-1 text-white ml-1 " title="Save " >
					<i class="fa fa-save"></i> Save</button>
			
		</div>
		
		</form>
	</main>

</body>
<script>
$(function(){
	_init();
	
	
	
	$(".diseases").on('click',function(e){
		$cbx_group = $("input:checkbox[name^='disease_cd']");
		if ($cbx_group.is(":checked")) {
			// checkboxes become unrequired as long as one is checked
			$cbx_group.prop("required", false).each(function() {
				this.setCustomValidity("");
			});
		} else {
			// require checkboxes and set custom validation error message
			$cbx_group.prop("required", true).each(function() {
				this.setCustomValidity("Please select at least one item from the Diseases list.");
			});
		}

	});
	
	$("#btnCancel").on('click',function(e){
		e.preventDefault();
		
		window.parent.document.getElementById('__nhPopWindow_no').click();
		return false;
	});
		
	$("form").submit(function( event ) {
		event.preventDefault();

		_Save(this);
		
		return false;
	});
	
});

function _Validate(){
	//-- validate data entries
	//-- check if any of the diseases has been ticked
	//-- check if any of the diseases has been ticked
	var ln_disease_cnt = 0;
	$(".diseases" ).each(function(index) {
		if ( $(this).prop("checked") ) {
			ln_disease_cnt++;
		}
	});
	if (ln_disease_cnt == 0){
		$(".diseases").prop('required', true);
		$(".diseases").removeClass('form-check-input diseases').addClass('form-check-input diseases is-invalid');
		
		//displayMsg('SYS-00002', 'Diseases');
		return false;
	} else {
		$(".diseases").prop('required', false);
		$(".diseases").removeClass('form-check-input diseases is-invalid').addClass('form-check-input diseases ');
	}

	//-- validate date entries
	//-- check trial date range if both fields are entered =============
	var arrDate = new Array("trial_startdate","trial_enddate");
	var arrTime = new Array();
	var arrDateLabel = new Array('Effective Date From', 'Date To');
	var lbValid = fn_ChkDateValue(arrDate, arrTime, arrDateLabel, "GT", "trial_startdate","", true );
	if (!lbValid){return false;}
	
	//-- check subscription date range if both fields are entered =============
	arrDate = new Array("subscribe_startdate","subscribe_enddate");		
	lbValid = fn_ChkDateValue(arrDate, arrTime, arrDateLabel, "GT", "subscribe_startdate","", true );
	if (!lbValid){return false;}
		
	return true;
}

function _Save(aForm){
	//-- validate entries
	if (!_Validate()){return false;}
	
	//-- save data
	var vmsgtxt = "Company";
	$.ajax({
		url: "/bn_moh_uat/mnt/application/cfc_application.cfc?method=saveInfo",
		type: "POST",
		cache: false,
		//data: $('#frmMain').serializeArray(),
		data: new FormData(aForm),
		contentType: false,
		processData: false,
		success: function( response ) {
			var t_returnMsg = fn_parseAJAXRespond(response);
			if (!t_returnMsg.status){
				return false;
			}
			var returnMsg = JSON.parse(t_returnMsg.message);
				if (!returnMsg.success){
					fn_HideAnimator();
					if (returnMsg.message == 'SYS-00071'){
						displayMsg(returnMsg.message,returnMsg.data);
					}
					else{
					displayMsg(returnMsg.message,"Organization Name").then(function(){
							
					});
					}
					return false;
			} else{
				fn_HideAnimator();

				if ('0'=='0'){
					var t_reference_no = String(returnMsg.data);
					t_reference_no = 'SS'+t_reference_no.slice(0,8)+'-'+t_reference_no.slice(8);
					displayMsg('SYS-00057',t_reference_no).then(function(){
						window.parent.document.getElementById('__nhPopWindow_ok').click();
					})
				}
				else{
					window.parent.document.getElementById('__nhPopWindow_ok').click();
				}
				
								
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
	top.$('#__nhPopWindow_title').html('New Application');
		
	if ($("#grading_id").val() == "S") {
		$( "#secondary_id" ).prop( "required", true ).prop('disabled',false);
		
	} else {
		$( "#secondary_id" ).prop( "required", false ).prop('disabled',true).val('');
	}

	$("#grading_id").on('change',function(){
		if ($(this).val() == "S") {
			$( "#secondary_id" ).prop( "required", true ).prop('disabled',false);
		} else {
			$( "#secondary_id" ).prop( "required", false ).val('').change().prop('disabled',true);
			
		}
	});

	if ($('#item_id').val() == '0') {
		$(".diseases").prop('required', true);
		$('.diseases').attr('oninvalid','this.setCustomValidity(\'Please select at least one item from the Diseases list.\');');
	} else {
		$(".diseases").prop('required', false);
		$(".diseases").prop('oninvalid', null);
	}

	fn_SetFocus($("#description"));
}

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
	    	