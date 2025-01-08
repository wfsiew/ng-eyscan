
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
	
	<style>
	.form-inline > * {
   		margin:5px 3px;
	}
	.form-group{
		display: inline-block;
		margin:0px 3px;
		vertical-align: top;
	}
	
	.modal-dialog {
		height: 100% !important;
		width: 100% !important;
		display: flex;
		align-items: center;
	}
	.modal-content {
		width: auto;
		height: auto;
	}
	</style>
</head>




<body class="main-body">


<div class=" fixed-top bg-white">
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark py-0 pl-1 pr-3 ">
		<a class="navbar-brand pl-1 align-middle" href="" data-target="fn1" >
	    <img class="d-inline-block align-middle " style="xmax-width:160px; max-height:50px;" src="/bn_moh_uat/images/logo/eyris_navbar.png?v=Ver1.4.7" alt="EyRIS">
			
	    
		</a>
		<button class="navbar-toggler collapsed hidden-lg-up " type="button" data-toggle="collapse" data-target="#navbarsMenu" aria-controls="navbarsMenu" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
		</button>
	
		<div class="collapse navbar-collapse pl-4 " id="navbarsMenu">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item" id="fn1">
					<a id="fn1" class="nav-link" data-target="fn1" href="">Home</a>
				</li>
				
				
				
						<li class="nav-item" id="fn3">
							<a class="nav-link" data-target="fn3" href="">Submit Image</a>
						</li>
					
					
					
					<li class="nav-item" id="fn2">
						<a class="nav-link" data-target="fn2" href="">Primary Care</a>
					</li>
				
					<li class="nav-item" id="fn4">
						<a class="nav-link" data-target="fn4" href="">Secondary Grader</a>
					</li>
						
					<li class="nav-item dropdown" id="fn0">
						<a class="nav-link dropdown-toggle" data-target="fn0" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portal Administrator</a>
						<div class="dropdown-menu p-0" aria-labelledby="fn0">
							
							
								<a class="dropdown-item" data-target="fn0_1" href="">Maintain Organizations</a>
							
								<a class="dropdown-item" data-target="fn0_2" href="">Manage Users</a>
							
								<a class="dropdown-item" data-target="fn0_9" href="">Manage Organization Applications</a>
									
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" data-target="fn0_10" href="">Case Investigation</a>
								
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" data-target="fn0_5" href="">Maintain Lookup Codes</a>
								<a class="dropdown-item" data-target="fn0_11" href="">Manage Parameters</a>
								
								
								
							
						</div>
					</li>

				


				
			 	<li class="nav-item dropdown" id="fn5">
					<a class="nav-link dropdown-toggle" data-target="fn5" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Reports</a>
					<div class="dropdown-menu p-0" aria-labelledby="fn5">
						<a class="dropdown-item" data-target="fn5_1" href="">Primary Management Report</a>
						
					</div>
				</li>
								
				
	    </ul>
									
		<ul class="nav navbar-nav xnavbar-right">
			<li class="nav-item dropdown">
			<a href="" class="nav-link dropdown-toggle" data-target="fnprof" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<i class="fa fa-user fa-lg"></i> KC
			</a>
				<ul class="dropdown-menu dropdown-menu-right p-0">
					<li>
						<div class="pt-1 pb-2" style="width:280px;">
							<div class="row px-1 ">
								<div class="col-lg-12 py-2">
									<p class="m-0 text-center">Kian Cheong Lam</p>
									<p class="m-0 text-center small">kiancheong.lam@nova-hub.com</p>
									<p class="m-0 text-center pt-2">
										<a class="py-0 btn btn-primary xbtn-block btn-sm" data-target="fnprof1" href="">
											Account Info
										</a>
									</p>
								</div>		
							</div>
						</div>
					</li>
				</ul>
			</li>
				
			<li class="nav-item" id="fn7">
				<a class="nav-link" data-target="fn7" href="" title="Help"><i class="fas fa-question xtext-white xfa-lg"></i> </a>
			</li>
			
			<li class="nav-item" id="fn8">
				<a class="nav-link" data-target="fn8" href="" title="Log Out"><i class="fas fa-sign-out-alt xtext-white fa-lg"></i> </a>
			</li>
		</ul>
		
		</div>
	</nav>
	
	<div class="row align-items-center">
		<div class="col-10 ">
			<h2 id="hd_text" class="xcontainer-fluid" style="display:none;"></h2>
		</div>

		
	
		
	</div>
									
</div>

<div class="modal fade" id="__nhAboutBox" tabindex="-1" role="dialog" aria-labelledby="__nhAboutBox_title" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content" style="border-top-left-radius: 0.5rem!important; border-top-right-radius: 0.5rem!important;">
			<div class="modal-header m-0 p-0 xpl-2 bg-header xbg-dark text-white d-none" >
				<h5 class="modal-title" id="__nhAboutBox_title"></h5>
				<button id="__nhAboutBox_close" type="button" class="close btn-md m-1 p-0 bg-header xbg-dark text-white" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body m-0 p-0 " style="overflow: hidden; height:620px;">
				<iframe id="__nhAboutBox_iframe" scrolling="no" frameborder="0" style="width:700px; height:620px; "></iframe>
			</div>
			<div class="modal-footer m-0 p-0 d-none">
				<button id="__nhAboutBox_ok" type="button" class="btn btn-primary">Save changes</button>
				<button id="__nhAboutBox_no" type="button" class="btn btn-primary">Save changes</button>
				<button id="__nhAboutBox_cancel" type="button" class="btn btn-primary">Save changes</button>
			</div>
		</div>
	</div>
</div>

<div class="modal fade" id="__nhPopWindow" tabindex="-1" role="dialog" aria-labelledby="__nhPopWindow_title" aria-hidden="true" >
  <div class="modal-dialog" role="document" >
    <div class="modal-content" style="border-top-left-radius: 0.5rem!important; border-top-right-radius: 0.5rem!important; ">
      <div class="modal-header m-0 p-1 pl-2 bg-header text-white">
        <h5 class="modal-title" id="__nhPopWindow_title"></h5>
        <button id="__nhPopWindow_close" type="button" class="close btn-md m-1 p-0 bg-header text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body m-0 p-0">
      	<iframe id="__nhPopWindow_iframe" xwidth="500px" xheight="400px" scrolling="no" frameborder="0" ></iframe>
      </div>
      <div class="modal-footer d-none">
        <button id="__nhPopWindow_ok" type="button" class="btn btn-primary">Save changes</button>
        <button id="__nhPopWindow_no" type="button" class="btn btn-primary">Save changes</button>
        <button id="__nhPopWindow_cancel" type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="__nhMessageBox" tabindex="-1" role="dialog" aria-labelledby="__nhMessageBox_title" aria-hidden="true" data-keyboard="false">
  <div class="modal-dialog" role="document">
    <div class="modal-content" style="border-top-left-radius: 0.5rem!important; border-top-right-radius: 0.5rem!important;">
      <div class="modal-header m-0 p-1 pl-2 bg-header xbg-dark text-white">
        <h5 class="modal-title" id="__nhMessageBox_title"></h5>
        <button id="__nhMessageBox_close" type="button" class="close btn-md m-1 p-0 bg-header xbg-dark text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body m-0 p-0" style="overflow: hidden;">
      	<iframe id="__nhMessageBox_iframe" width="500px" height="230px" scrolling="no" frameborder="0"></iframe>
      </div>
      <div class="modal-footer d-none">
        <button id="__nhMessageBox_ok" type="button" class="btn btn-primary">Save changes</button>
        <button id="__nhMessageBox_no" type="button" class="btn btn-primary">Save changes</button>
        <button id="__nhMessageBox_cancel" type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<div class="modal" id="__nhErrorBox" tabindex="-1" role="dialog" aria-labelledby="__nhErrorBox_title" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content" style="border-top-left-radius: 0.5rem!important; border-top-right-radius: 0.5rem!important;">
      <div class="modal-header m-0 p-1 bg-header text-white">
        <h5 class="modal-title" id="__nhErrorBox_title">Application Error</h5>
        <button type="button" class="close btn-md m-1 p-0 bg-dark text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div id="__nhErrorBox_content" class="modal-body m-0 p-0" style="width: 100%;max-height: 500px; overflow-y: auto;">
      </div>
      <div class="modal-footer justify-content-center m-0 p-1 ">
        <button id="__nhMessageBox_ok" type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="__nhAnimator" tabindex="-1" role="dialog" aria-hidden="true" style="position: absolute; max-height: 140px; max-width: 120px;overflow: hidden; ">
  <div class="modal-dialog" role="document">
    <div class="modal-content" style="background-color: rgba(0,0,0,.0001); border: none;">
      <div class="modal-header m-0 p-1 bg-header text-white" style="display: none;overflow: hidden; ">
      </div>
      <div class="modal-body m-4 p-4">
      	
      	<div class="nhAnimator"></div>
      </div>
      <div class="modal-footer justify-content-center m-0 p-1" style="display: none;">
      </div>
    </div>
  </div>
</div>



<script>
	var tselected = "fn0_10";		//-- init current menu id
		
	$(function(){
		fnInit();			//-- set active menu
		
		$('.nav-link, .dropdown-item, a').on('click',function(e){
			e.preventDefault();
						
			var tMenuId = $(this).data('target');
						
			switch (tMenuId){
	    		case 'fn1':
	    		_offBeforeClose();
					top.location.href="/bn_moh_uat/application/homepage/index.cfm?tid=" + tMenuId;
	    			break;
					
	    		case 'fn2':
					_offBeforeClose();
					top.location.href="/bn_moh_uat/application/primary/index.cfm?tid=" + tMenuId;
	    			break;
					
	    		case 'fn3':
	    			_offBeforeClose();
						top.location.href="/bn_moh_uat/application/submit_image/index.cfm?tid=" + tMenuId;
					break;
					
	    		case 'fn4': case 'fn4_1':
						_offBeforeClose();
						top.location.href="/bn_moh_uat/application/secondary/index.cfm?tid=" + tMenuId;
	    			break;
					
	    		case 'fn0_1':
						_offBeforeClose();
						top.location.href="/bn_moh_uat/mnt/company/index.cfm?tid=" + tMenuId;
						break;
					
	    		case 'fn0_2':
						_offBeforeClose();
						top.location.href="/bn_moh_uat/mnt/accounts/index.cfm?tgrp=1&tid=" + tMenuId;
						break;
					
	    		case 'fn0_3':
						_offBeforeClose();
						top.location.href="/bn_moh_uat/mnt/accounts/index.cfm?tgrp=2&tid=" + tMenuId;
						break;
					
	    		case 'fn0_4':
						_offBeforeClose();
						_resetAcc();
						//top.location.href="/bn_moh_uat/application/secondary/index.cfm?tid=" + tMenuId;
						break;
					
	    		case 'fn0_5':
						_offBeforeClose();
						top.location.href="/bn_moh_uat/mnt/lookup/index.cfm?tid=" + tMenuId;
						break;
						
	    		case 'fn0_6':
						_offBeforeClose();
						top.location.href="/bn_moh_uat/mnt/secondary_assessment/index.cfm?tid=" + tMenuId;
						break;
						
	    		case 'fn0_7':
						_offBeforeClose();
						top.location.href="/bn_moh_uat/mnt/assessment_matrix/index.cfm?tid=" + tMenuId;
						break;
					
	    		case 'fnprof1':
						_offBeforeClose();
						top.location.href="/bn_moh_uat/mnt/user/index.cfm?tid=" + tMenuId;
	    			break;
					
	    		case 'fnprof2':	case 'fn8':			//-- logout
						_offBeforeClose();
						top.location.href="/bn_moh_uat/logon/logout.cfm?tid=" + tMenuId;
	    				break;
					
	    		case 'fn5_1':
						_offBeforeClose();
						top.location.href="/bn_moh_uat/application/reports/mgt/index.cfm?tid=" + tMenuId;
						break;
					
	    		case 'fn6':
	    				_offBeforeClose();
						top.location.href="/bn_moh_uat/application/submit_image/batch_submit.cfm?tid=" + tMenuId;
						break;
					
	    		case 'fn7_1':
						fn_download("/bn_moh_uat/EySCAN User Guide V1.1.pdf", true);
						break;
					
	    		case 'fn7':
						_offBeforeClose();
						_aboutpage();
						break;
						
	    		case 'fn0_8':
						_offBeforeClose();
						top.location.href="/bn_moh_uat/mnt/manage_billing/index.cfm?tid=" + tMenuId;
						break;
						
	    		case 'fn0_9':
						_offBeforeClose();
						top.location.href="/bn_moh_uat/mnt/application/index.cfm?tid=" + tMenuId;
						break;
					
	    		case 'fn0_10':
						_offBeforeClose();
						top.location.href="/bn_moh_uat/application/manage_data/index.cfm?tid=" + tMenuId;
						break;
					
	    		case 'fn0_11':
						_offBeforeClose();
						top.location.href="/bn_moh_uat/mnt/system_param/index.cfm?tid=" + tMenuId;
						break;
					
	    		case 'fn0_12':
						_offBeforeClose();
						top.location.href="/bn_moh_uat/application/case_download/index.cfm?tid=" + tMenuId;
						break;
					
	    		case 'fn8':
	    				_offBeforeClose();
						top.location.href="/bn_moh_uat/mnt/company/credits.cfm?tid=" + tMenuId;
						break;
								
    		}		//-- end switch tMenuId
			
			return;
		});
		
	});			//-- end $function()
	
	function fnInit() {
		var vmenuactive = tselected;
		if (tselected == "fn4_1") {
			vmenuactive = "fn4";
		}
		
		$("#" + vmenuactive).removeClass('nav-item').addClass('nav-item active');		//-- set active menu class
				
		//-- replace header text
		switch (tselected){
    		case 'fn1':
					$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Home</h2>' );
    			$('#image_centre').removeClass('d-none');
    			break;
				
    		case 'fn2':
					$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Image Report</h2>' );
					$('#image_centre').removeClass('d-none');
    			break;
				
    		case 'fn3':
					$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Submit Image</h2>' );
					$('#image_centre').removeClass('d-none');
    			break;
				
    		case 'fn4':
					$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Worklist</h2>' );
    			break;
				
    		case 'fn4_1':
					$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Image Viewer</h2>' );
    			break;
								  
    		case 'fn0_1': 
					$("#fn0").removeClass('nav-item').addClass('nav-item active');		//-- set active menu class
					$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Maintain Organizations</h2>' );
    			break;
			
			case 'fn0_2':
				$("#fn0").removeClass('nav-item').addClass('nav-item active');		//-- set active menu class
				$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Manage Users</h2>' ); 
    			break;
			
			case 'fn0_3':
				$("#fn0").removeClass('nav-item').addClass('nav-item active');		//-- set active menu class
				$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Manage Users</h2>' );
    			break;
			
			case 'fn0_4':
				$("#fn0").removeClass('nav-item').addClass('nav-item active');		//-- set active menu class
				$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Reset User ID/Password</h2>' );
    			break;
			
			case 'fn0_5':
				$("#fn0").removeClass('nav-item').addClass('nav-item active');		//-- set active menu class
				$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Maintain Lookup Code</h2>' );
    			break;
			
			case 'fn0_6':
				$("#fn0").removeClass('nav-item').addClass('nav-item active');		//-- set active menu class
				$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Maintain Secondary Assessment Code</h2>' );
    			break;
			
			case 'fn0_7':
				$("#fn0").removeClass('nav-item').addClass('nav-item active');		//-- set active menu class
				$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Assessment Matrix</h2>' );
    			break;
				
    		case 'fnprof1':
				$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Account Info</h2>' );
				break; 
			
			case 'fn5_1':
				$("#fn5").removeClass('nav-item').addClass('nav-item active');		//-- set active menu class
				$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Primary Management Report</h2>' );
    			break;
				
			case 'fn6':
					$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Batch Submit</h2>' );
					$('#image_centre').removeClass('d-none');
				break;
				/*
			case 'fn7_2':
				$("#fn0").removeClass('nav-item').addClass('nav-item active');		//-- set active menu class
				$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">About</h2>' );
    			break;
				*/
			case 'fn7':
				$("#fn0").removeClass('nav-item').addClass('nav-item active');		//-- set active menu class
				$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Help</h2>' );
    			break;
			
			case 'fn0_8':
				$("#fn0").removeClass('nav-item').addClass('nav-item active');		//-- set active menu class
				$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Manage Billing</h2>' );
    			break;
			
			case 'fn0_9':
				$("#fn0").removeClass('nav-item').addClass('nav-item active');		//-- set active menu class
				$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Manage Organization Applications</h2>' );
    			break;
				
    		case 'fn0_10':
				$("#fn0").removeClass('nav-item').addClass('nav-item active');		//-- set active menu class
				$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Case Investigation</h2>' );
				$('#image_centre').removeClass('d-none');
    			break;
			
			case 'fn0_11':
				$("#fn0").removeClass('nav-item').addClass('nav-item active');		//-- set active menu class
				$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Manage Parameters</h2>' );
    			break;
			
			case 'fn0_12':
				$("#fn0").removeClass('nav-item').addClass('nav-item active');		//-- set active menu class
				$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">Case Download</h2>' );
    			break;

			case 'fn8':
				$("#fn0").removeClass('nav-item').addClass('nav-item active');		//-- set active menu class
				$("#hd_text" ).replaceWith('<h2 id="hd_text" class="container-fluid py-1">View Credits</h2>' );
    			break;

   		}		//-- end switch tMenuId
			
			_promptBeforeClose();
	};
	
	function _promptBeforeClose(){
		$(window).on('beforeunload',function(evt){
			return "Please use log out instead of close window directly";
		});
	}
	function _offBeforeClose(){
		$(window).off('beforeunload');
	}
	
	function _resetAcc(){
		var vsrc = "/mnt/accounts/reset_user_form.cfm?title=Reset&noreturn=Y"
		var vparams = "";
		var viframesetting = "w500h310";
		
		popWindow(vsrc, vparams, viframesetting).then(function(answer){			//'Prompt user before rerouting')
			if(answer == 'ok'){
				_offBeforeClose();
				var vmsgno = "SYS-00019";
				var vmsgtxt = "User Account";
				displayMsg(vmsgno, vmsgtxt).then(function(){
					//top.location.href="/bn_moh_uat/mnt/accounts/index.cfm"; 
				});
			}
		})
	}
	
	function _aboutpage(){
		var vsrc = "/aboutpage.cfm?title=About"
		var vparams = "";
		var viframesetting = "w500h300";
		
		popAbout(vsrc, vparams, viframesetting).then(function(answer){			//'Prompt user before rerouting')
			if(answer == 'ok'){
				_offBeforeClose();
				var vmsgno = "SYS-00019";
				var vmsgtxt = "About";
				displayMsg(vmsgno, vmsgtxt).then(function(){
					//top.location.href="/bn_moh_uat/mnt/accounts/index.cfm"; 
				});
			}
		});
	}
	
</script>

	
	<main role="main" class="container-fluid pt-3">
		<div class="container-fluid pb-4">
			<div class="row pb-1">
				<div id="filter" class="container-fluid py-2 pl-0 ">
					<form name="frmFilter" id="frmFilter" xclass="form-inline" action="/bn_moh_uat/application/manage_data/index.cfm?tid=fn0_12"  method="post">
	                    <input type="hidden" name="recno" id="recno" value="1000" >
						<input type="hidden" name="image_from" id="image_from" value="">
						<input type="hidden" name="result_status" id="result_status" value="">

						<div class="row ">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
								<div class="form-row">
									
									<div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 px-2">
										<div class="form-row">
											<div class="col-12 xborder xrounded px-2 py-1 xbg-white">
												<div class="form-row">
													<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 pb-1">
														Diseases
													</div>
												</div>

												<div class="form-row border rounded bg-white">
													<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 pl-3 py-1">

														<div class="form-row ">
															<div class="col-xl-3 col-lg-6 col-md-4 col-sm-12 py-1">
																<div class="form-check">
																	<input class="form-check-input " type="checkbox" id="disease_dr" name="disease_dr"  value="DR" style="cursor: pointer; height:16px; width:16px;" >
																	<label class="form-check-label pl-1" for="disease_dr" style="cursor: pointer;">
																		Diabetic Retinopathy
																	</label>
																</div>
															</div>
 
															<div class="col-xl-4 col-lg-6 col-md-4 col-sm-12 py-1">
																<div class="form-check">
																	<input class="form-check-input" type="checkbox" id="disease_glaucoma" name="disease_glaucoma"  value="GLAUCOMA" style="cursor: pointer; height:16px; width:16px;">
																	<label class="form-check-label pl-1" for="disease_glaucoma" style="cursor: pointer;">
																		Glaucoma Suspect
																	</label>
																</div>
															</div>

															<div class="col-xl-4 col-lg-6 col-md-4 col-sm-12 py-1">
																<div class="form-check">
																	<input class="form-check-input" type="checkbox" id="disease_amd" name="disease_amd"  value="AMD" style="cursor: pointer; height:16px; width:16px;">
																	<label class="form-check-label pl-1" for="disease_amd" style="cursor: pointer;">
																		Age-Related Macular Degeneration
																	</label>
																</div>
															</div>

														</div>

													</div>

												</div>
											</div>

										</div>

									</div>

									<div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 px-2">
										<div class="form-row">
											<div class="col-12 xborder xrounded px-2 py-1 xbg-white">
												
												<div class="form-row">
													<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 pb-1">
														Result
													</div>
												</div>
												<div class="form-row  border rounded bg-white">
													<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 pl-3 py-1">
														<div class="form-row ">
															<div class="col-xl-2 col-lg-6 col-md-6 col-sm-12 py-1">
																<div class="form-check">
																	<input class="form-check-input sel_result" type="checkbox" id="referable" name="referable"  data-result-code="R,RDR,VTDR" style="cursor: pointer; height:16px; width:16px;">
																	<label class="form-check-label pl-1" for="referable" style="cursor: pointer;">Referable</label>
																</div>
															</div>
															<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 py-1">
																<div class="form-check">
																	<input class="form-check-input sel_result" type="checkbox" id="non-referable" name="nonreferable"  data-result-code="N" style="cursor: pointer; height:16px; width:16px;">
																	<label class="form-check-label pl-1" for="non-referable" style="cursor: pointer;">Non Referable</label>
																</div>
															</div>
															<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 py-1">
																<div class="form-check">
																	<input class="form-check-input sel_result" type="checkbox" id="ungradable" name="ungradable"  data-result-code="U" style="cursor: pointer; height:16px; width:16px;">
																	<label class="form-check-label pl-1" for="ungradable" style="cursor: pointer;">Ungradable</label>
																</div>
															</div>
															<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 py-1">
																<div class="form-check">
																	<input class="form-check-input sel_result" type="checkbox" id="all-nr" name="allnr"  data-result-code="ANR" style="cursor: pointer; height:16px; width:16px;">
																	<label class="form-check-label pl-1" for="all-nr" style="cursor: pointer;">All Non Referable</label>
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
						</div>

						
						<div class="row pt-2">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
								<div class="row">
									<div class="col-xl-9 col-lg-9 col-md-9 col-sm-12  ">
									
										<div class="form-group ">
											<label class="control-label mb-1 ">From </label>
											<div class="input-group">
											<input id="date_from" name="date_from" type="text" class="form-control" style="max-width: 145px;" maxlength="11" value="01-Jan-2025" onblur="if(!(check_date(this))){this.value='';}">
											</div>
										</div>
										
										<div class="form-group ">	    								
											<label class="control-label mb-1 ">To </label>
											<div class="input-group">
											<input id="date_to" name="date_to" type="text" class="form-control" style="max-width: 145px;" maxlength="11" value="08-Jan-2025" onblur="if(!(check_date(this))){this.value='';}">
											</div>		
										</div>

										

										<div class="form-group" style="max-width: 500px;">
											<label class="control-label mb-1 ">Company</label>
											<select class="form-control custom-select" name="company_id" id="company_id"  >
												
												
														<option value="8"  >Belait Hospital (TOPCON)</option>
													
														<option value="10"  >Berakas Health Centre</option>
													
														<option value="2"  >Brunei MOH</option>
													
														<option value="3"  >Brunei MOH Ocular Reading Centre</option>
													
														<option value="1"  selected  >EyRIS</option>
													
														<option value="4"  >JPMC</option>
													
														<option value="14"  >Mobile Bus 1</option>
													
														<option value="15"  >Mobile Bus 2</option>
													
														<option value="12"  >Muara Health Centre</option>
													
														<option value="11"  >Rimba Health Centre</option>
													
														<option value="6"  >RIPAS Hospital (Endocrinology)</option>
													
														<option value="5"  >RIPAS Hospital (TOPCON)</option>
													
														<option value="13"  >Sengkurong Health Centre</option>
													
														<option value="9"  >Temburong Hospital</option>
													
														<option value="7"  >Tutong Hospital (TOPCON)</option>
													
														<option value="17"  >zGrading Centre</option>
													
														<option value="16"  >zScreening Centre</option>
													
											</select>
										</div>
										<div class="form-group">
											<label class="control-label mb-1 " for="status" style="cursor: pointer;">Include Sub Centres </label>
											<div class="custom-control custom-checkbox " >
												<input type="checkbox" class="custom-control custom-control-lg " id="sub_comp_ind" name="sub_comp_ind"  value="Y" style="cursor: pointer; height:16px; width:16px;">
											</div> 
										</div>

									</div>
																			
									<div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 mt-3  xd-flex xalign-items-end " >
										<div class="btn-group float-right" >
											<button name="btnSearch" id="btnSearch" class="form-control btn bg-primary text-white mr-3" value="Search">
												<i class="fa fa-search"></i> Search</button>
											<button name="btnDownload" id="btnDownload" class="form-control btn bg-primary text-white" value="Download Images" disabled>
												<i class="fa fa-cloud-download-alt"></i> Download Image</button>
										</div>
									</div>
										

								</div>
							</div>
						</div>
							
					</form>
				</div>			
				
			</div>
			
			<div class="row box-shadow">
				<div class="col-xl-12 col-lg-12 ">
					
					<div class="row p-1 bg-header text-white">
						<div class="col-xl-1 col-md-1 col-lg-1 col-sm-12 " style="max-width:30px; ">
							<div class="checkbox">
								<input name="chk_all" id="chk_all" type="checkbox" style="cursor: pointer;" disabled >
							</div>
						</div>
						<div class="col-xl-2 col-md-2 col-lg-2 col-sm-12">Case Reference ID</div>
						<div class="col-xl-2 col-md-2 col-lg-2 col-sm-12 ">Date Submitted <i class="fa fa-sort-down"></i>
								<br>Date of Image</div>
						<div class="col-xl-2 col-md-2 col-lg-2 col-sm-12">Submitted by<br>Capture Site</div>
						<div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 " >
							<div class="row">
								<div class="col-xl-6 col-md-6 col-lg-6 col-sm-12 ">Right Eye</div>
								<div class="col-xl-6 col-md-6 col-lg-6 col-sm-12 ">Left Eye</div>
							</div>
							<div class="row">
								<div class="col-xl-2 col-md-2 col-lg-2 col-sm-12 ">DR</div>
								<div class="col-xl-2 col-md-2 col-lg-2 col-sm-12 ">Glaucoma</div>
								<div class="col-xl-2 col-md-2 col-lg-2 col-sm-12 ">AMD</div>

								<div class="col-xl-2 col-md-2 col-lg-2 col-sm-12 ">DR</div>
								<div class="col-xl-2 col-md-2 col-lg-2 col-sm-12 ">Glaucoma</div>
								<div class="col-xl-2 col-md-2 col-lg-2 col-sm-12 ">AMD</div>
							</div>
						</div>
					</div>
					
					
						
						<div class="row py-1 border-bottom text-center bg-white">
							<div class="col-md-12 col-lg-12 ">No Record Found.</div>
						</div>
					
					
				</div>	<!-- /.col-12 -->
						
				
				

			</div>
	
		</div>	<!-- /.container-fluid -->
		
		<div class="clearfix"></div>

	</main>		<!-- /.main -->
	<input type="hidden" id="hidden_from" value="01-Jan-2025">
	<input type="hidden" id="hidden_to" value="08-Jan-2025">
	<input type="hidden" id="hidden_company_id" value="1">
	<input type="hidden" id="hidden_sub_company_ind" value="N">
	<input type="hidden" id="hidden_dr_ind" value="N">
	<input type="hidden" id="hidden_gla_ind" value="N">
	<input type="hidden" id="hidden_amd_ind" value="N">
	<input type="hidden" id="hidden_ref_ind" value="N">
	<input type="hidden" id="hidden_nonref_ind" value="N">
	<input type="hidden" id="hidden_ug_ind" value="N">
 

</body>
<script>
var vdaterange = "366";
var vappdir = "bn_moh_uat";
var tselectedpage = "pgn_1";		//-- init current select pagination button
var vpagerec = parseInt("1000");			//-- number of records that can be displayed by page
var vtotpages = parseInt("0");		//-- calculated total number of pagination buttons
var vpagebutton = parseInt("5");	//-- max number of pagination buttons that can be displayed
var _URL = "";
fn_ShowAnimator();

$(function(){
	_initPage();
		
	$(".pview").on('click',function(e){
		e.preventDefault();
		
		var vref_id = $(this).data('ref-id');	
		fn_Report(vref_id);				//-- preview report
	});
	
	$(".sel_result").on('click',function(e){
		//e.preventDefault();
		var vid = this.id ;

		if (vid == "all-nr") {
			$('#referable').prop('checked',false);
			$('#non-referable').prop('checked',false);
			$('#ungradable').prop('checked',false);
			
		} else {
			$('#all-nr').prop('checked',false);
		}
		//var vref_id = $(this).data('ref-id');	
		
	});

	$("#pagerec").on('change',function(e){
		e.preventDefault();
		$("#recno").val( $(this).val() );
		$("#btnSearch").trigger("click");
	});
			
	$("#btnSearch").on('click',function(e){
		e.preventDefault();
		
		// check mandatory
		var arrMandatoryFields = new Array("date_from","date_to");
		var arrMandatoryFieldsLabel = new Array('Date From', 'Date To');
		lbValid = fn_check_mandatory("textbox",arrMandatoryFields,arrMandatoryFieldsLabel);
		if (!lbValid){return false;}
		
		//-- check date range	
		lbValid = fn_ChkDateRange(arrMandatoryFields, arrMandatoryFieldsLabel, vdaterange, "date_from","", true )
		if (!lbValid){return false;}
		
		if (!check_date_ft($('#date_from')[0],$('#date_to')[0])){
			
			displayMsg("SYS-00041","Date To","Date From");
			
			return false;
		}
		

		//-- collate disease and result criteria
		var v_result_status = "";
		if ( $("#non-referable").is(':checked') ) {
			v_result_status = v_result_status + "," + $('#non-referable').data('result-code');
		}
		if ( $("#referable").is(':checked') ) {
			v_result_status = v_result_status + "," + $('#referable').data('result-code');
		}
		if ( $("#ungradable").is(':checked') ) {
			v_result_status = v_result_status + "," + $('#ungradable').data('result-code');
		}

		//-- if NR is selected all other checkbox is disabled
		if ( $("#all-nr").is(':checked') ) {
			v_result_status = "," + $('#all-nr').data('result-code');
		}

		v_result_status = v_result_status.substr(1, v_result_status.length);

		$('#result_status').val( v_result_status );

		_offBeforeClose();
		$('#image_from').val($('#collect_company_id').val());
		$( "#frmFilter" ).submit();
		
		return false;
	});
			
	$("#btnDownload").on('click',function(e){
		e.preventDefault();
		// check ticked images
		if ($("input[type='checkbox'][name^='chk_item_']:checked").length == 0){
			displayMsg("SYS-00026");
			return false;
		}
		var v_case_list = '';
		$("input[type='checkbox'][name^='chk_item_']:checked").each(function(index){
			v_case_list += (v_case_list=='')?$(this).data('ref-id'):(','+$(this).data('ref-id'));
		});

		var fd = new FormData();
		fd.append("as_case_list",v_case_list);
		fd.append("as_from",$('#hidden_from').val());
		fd.append("as_to",$('#hidden_to').val());
		fd.append("as_company_id",$('#hidden_company_id').val());
		fd.append("as_sub_company_ind",$('#hidden_sub_company_ind').val());
		fd.append("as_dr_ind",$('#hidden_dr_ind').val());
		fd.append("as_gla_ind",$('#hidden_gla_ind').val());
		fd.append("as_amd_ind",$('#hidden_amd_ind').val());
		fd.append("as_ref_ind",$('#hidden_ref_ind').val());
		fd.append("as_nonref_ind",$('#hidden_nonref_ind').val());
		fd.append("as_ug_ind",$('#hidden_ug_ind').val());
		$.ajax({
			url: "/bn_moh_uat/application/manage_data/cfc_download.cfc?method=downloadData",
			type: "POST",
			cache: false,
			contentType: false,
			processData: false,
			data: fd,
			/* 
			data: {
						as_case_list: v_case_list,
						as_from: $('#hidden_from').val(),
						as_to: $('#hidden_to').val(),
						as_company_id: $('#hidden_company_id').val(),
						as_sub_company_ind: $('#hidden_sub_company_ind').val(),
						as_dr_ind: $('#hidden_dr_ind').val(),
						as_gla_ind: $('#hidden_gla_ind').val(),
						as_amd_ind: $('#hidden_amd_ind').val(),
						as_ref_ind: $('#hidden_ref_ind').val(),
						as_nonref_ind: $('#hidden_nonref_ind').val(),
						as_ug_ind: $('#hidden_ug_ind').val()
						},
			 */
			success: function( response ) {
				var t_returnMsg = fn_parseAJAXRespond(response);
				if (!t_returnMsg.status){
					//fn_SetButtonStatus($(".form_submit"),true);
					return false;
				}
				var returnMsg = JSON.parse(t_returnMsg.message);
				
				if (!returnMsg.success){
					fn_HideAnimator();
					displayMsg(returnMsg.message).then(function(){
						//fn_SetButtonStatus($('.form_submit'),true);
					});
					return false;
				}
				else{
					fn_download(returnMsg.data);
					fn_HideAnimator();
				}
			},
			error: function(request, status, error){
	
				fn_ajaxFail(request, status, error)
					.then(function(){
						fn_SetButtonStatus($('.form_submit'),true);
					});
				fn_HideAnimator();
			},
	    beforeSend: function(){
	    	fn_ShowAnimator();
	    },
	    complete: function(){
	    	//fn_HideAnimator();
	    }
		});
	});
	
	$(".page-item").on('click',function(e){
		e.preventDefault();
		
		var vid = this.id;
		var vpgn_btn = vid;
		var vstart = parseInt( $(this).data('pgn-start') );
		var vend = parseInt( $(this).data('pgn-end') );
		var vcurrent = parseInt( $(this).data('pgn-current') );
				
		var vbtn_start = vcurrent;
		if (vbtn_start == vtotpages){
			vbtn_start = (vbtn_start -  vpagebutton) + 1;
		}
		var vbtn_end = (vcurrent + vpagebutton) - 1;
		if (vbtn_end > vtotpages){ vbtn_end = vtotpages;}
		
		if (vid == "pgn_prev"){
			vbtn_start = 1;
			vbtn_end = vpagebutton;
			vpgn_btn = "pgn_"+vcurrent;		
		}
		if (vid == "pgn_next"){
			vbtn_start = (vcurrent - vpagebutton) + 1;
			vbtn_end = vcurrent;
			vpgn_btn = "pgn_"+vcurrent;		
		}
		
		//-- hide all div image records
		$('.rec-img').css('display', 'none');
		
		//-- display selected div page records
		for (i = vstart; i < vend+1; i++) { 
			$('#pg-' + i).css('display', '');
		}
		
		var vbtn_difference = vtotpages - vbtn_start;
		if (vbtn_difference == 0){
			vbtn_start = (vbtn_start - vpagebutton) + 1;
			vbtn_end = vtotpages;
		} else {
			if (vbtn_difference+1 < vpagebutton) {
				vbtn_start = vbtn_start - (vpagebutton - (vbtn_difference+1));
				vbtn_end = (vbtn_start + vpagebutton) - 1;
			}
		}
		
		//-- hide/unhide pagination buttons
		for (i = 1; i < vtotpages+1; i++) { 		//-- totpages = calculated total number of pagination buttons
			if (i >= vbtn_start && i <= vbtn_end){
				$('#pgn_' + i).css('display', '');
			} else {
				$('#pgn_' + i).css('display', 'none');
			}
		}
		
		if (vcurrent > 1){
			$("#pgn_prev").removeClass('page-item disabled').addClass('page-item');
			$("#pgn_prev").css('disabled', '');
		} else {
			$("#pgn_prev").removeClass('page-item').addClass('page-item disabled');
			$("#pgn_prev").css('disabled', 'disabled');
		}
		if (vcurrent < vtotpages){
			$("#pgn_next").removeClass('page-item disabled').addClass('page-item');
			$("#pgn_next").css('disabled', '');
		} else {
			$("#pgn_next").removeClass('page-item').addClass('page-item disabled');
			$("#pgn_next").css('disabled', 'disabled');
		}
		
		$("#" + tselectedpage).removeClass('page-item active').addClass('page-item');
		$("#"+vpgn_btn).removeClass('page-item').addClass('page-item active');
		tselectedpage = vpgn_btn;
		
		//-- refresh showing record text
		$("#dispdesc").text("Showing " + vstart + " to " + vend + " of " + 0 + " cases");
		//-- hide/unhide page buttons
		
	});
	
});

function _initPage(){
	$('#date_from').datepicker({
		todayBtn: "linked",
		orientation: "bottom left",
		autoclose: true,
		format: "dd-M-yyyy",
		todayHighlight: true
	}).on('show', function(e) {
    $('.datepicker').css('top',$(this).offset().top+$(this).outerHeight(true));
    });
	
	$('#date_to').datepicker({
		todayBtn: "linked",
		orientation: "bottom left",
		autoclose: true,
		format: "dd-M-yyyy",
		todayHighlight: true
	}).on('show', function(e) {
    $('.datepicker').css('top',$(this).offset().top+$(this).outerHeight(true));
    });
	
	$('#chk_all').on('click',function(ev){
		//ev.preventDefault();
		$("input[type='checkbox'][name^='chk_item_']").prop('checked',$(this).is(':checked'));
	})
	
	$("input[type='checkbox'][name^='chk_item_']").on('click',function(ev){
		if ($("input[type='checkbox'][name^='chk_item_']:checked").length == $("input[type='checkbox'][name^='chk_item_']").length){
			$('#chk_all').prop('checked',true);
		}
		else{
			$('#chk_all').prop('checked',false);
		}
		
	});
	
	fn_HideAnimator();
}

function fn_Report(aRefID){
	var vcfrfile = "eye_report.cfr";
	//var vcfmfile = "/bn_moh_uat/application/reports/eye_report.cfm";
	var vcfmfile = "eye_report.cfm";
	
	//-- Set report name parameters needed for the CFReport --->
    var reportParamName    = new Array();
    reportParamName[1] = "reference_id";
	
	//-- Set report value parameters needed for the CFReport --->
    var reportParamValue    = new Array();
	reportParamValue[1] = validateArrayValue( aRefID );
	
	executeReport(vcfrfile, vcfmfile, reportParamName, reportParamValue,"PRIMARYCARE");
}

function fn_removeDownload(){
	if (_URL == "") return;
	$.ajax({
		url: "/bn_moh_uat/application/primary/cfc_download.cfc?method=removeDownload",
		type: "GET",
		cache: false,
		data: {as_file: _URL},
		success: function( response ) {

			var t_returnMsg = fn_parseAJAXRespond(response);
			if (!t_returnMsg.status){
				fn_HideAnimator();
				return false;
			}
			var returnMsg = JSON.parse(t_returnMsg.message);
			
			if (!returnMsg.success){
				fn_HideAnimator();
				displayMsg(returnMsg.message).then(function(){
					//fn_SetButtonStatus($('.form_submit'),true);
				});
				return false;
			}
			else{
				fn_HideAnimator();
			}
		},
		error: function(request, status, error){

			fn_ajaxFail(request, status, error)
				.then(function(){
					fn_SetButtonStatus($('.form_submit'),true);
				});
			fn_HideAnimator();
		},
    beforeSend: function(){
    	fn_ShowAnimator();
    },
    complete: function(){
    	fn_HideAnimator();
    }
	});
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
								sessionStorage.setItem('sessionid', '2F42CB8561132DCCC23176E4D693486D_2099760_23c33f9c0378f4ad-A58CD75B-0A7A-DDB7-380CB866B5CC86CA');
								sessionStorage.setItem('event_id', '20250108003721');
							}
							else if (sessionStorage.getItem('sessionid') != '2F42CB8561132DCCC23176E4D693486D_2099760_23c33f9c0378f4ad-A58CD75B-0A7A-DDB7-380CB866B5CC86CA'){
								var t_event_id = '0';
								if (sessionStorage.getItem('event_id') != null){
									t_event_id = sessionStorage.getItem('event_id');
								}
								top.location.href='https://eyris.io/bn_moh_uat/invalid_session.cfm?event_id=' + t_event_id;
							}
							
	    		</script>
	    	