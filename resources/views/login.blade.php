<html>

    <head>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<!-- <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css"> -->
	<link rel="stylesheet"  type="text/css" href="{{asset('css/materialize-rtl.min.css')}}"/>
	<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
	<title>الإدارة العامة لرعاية الشباب</title>
	<style>
	 


	 

	 main {
	     flex: 1 0 auto;
	 }

	 /* body {
	    background: #fff;
	    }
	  */
	 .input-field input[type=date]:focus + label,
	 .input-field input[type=text]:focus + label,
	 .input-field input[type=email]:focus + label,
	 .input-field input[type=password]:focus + label {
	     color: #e91e63;
	 }

	 .input-field input[type=date]:focus,
	 .input-field input[type=text]:focus,
	 .input-field input[type=email]:focus,
	 .input-field input[type=password]:focus {
	     border-bottom: 2px solid #e91e63;
	     box-shadow: none;

	     
	 }

	 label{
	     padding-right: 20px;
	 }

	 .icon_style{
	     position: absolute;
	     right: 10px;
	     top: 10px;
	     font-size: 20px;
	     color: white;
	     cursor:pointer; 
	 }

	 body {
	     display: flex;
	     min-height: 100vh;
	     flex-direction: column;
	     direction: rtl;

	     background-image:        linear-gradient(
		 rgba(0, 0, 0, 0.8), 
		 rgba(0, 0, 0, 0.8)
	     ),url("{{asset('assets/login-background.jpeg')}}");
	     background-repeat: no-repeat;
	     background-size: 100% 100%;
	     background-position: center;
	 }
	 
	</style>
    </head>
    <body>
	<div class=""></div>
	<main>
	    <nav class="pink darken-3" style="direction:ltr">
		<div class="nav-wrapper">
		    <img style="max-height:100%;" alt="" src="{{asset("assets/sohagunilogo.png")}}"/>
		    <img style="max-height:85%;" alt="" src="{{asset("assets/pu.png")}}"/>
		</div>
	    </nav>
	    
	    
	    <!-- <div class="row"> -->
	    <!-- <div class="col s6"> -->
	    <center>

		    

		{{--<img class="responsive-img" style="width: 250px;" src="https://i.imgur.com/ax0NCsK.gif" />--}}
		<div class="section"></div>

		<div class="section"></div>

		<div class="container">

		    <div class="z-depth-1 grey lighten-3 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid pink;
				border-radius: 10px; opacity: 82%">
			@if(session()->has("error"))
			    <div class="row" id="alert_box">
				<div class="col s12 m12">
				    <div class="card red darken-1">
					<div class="row">
					    <div class="col s12 m10">
						<div class="card-content white-text">
						    {!!session()->get("error")!!}
						</div>
					    </div>
					    <div class="col s12 m2">
						<i class="fa fa-times icon_style"     id="alert_close" aria-hidden="true"></i>
					    </div>
					</div>
				    </div>
				</div>
			    </div>
			@endif
		<h5 class="pink-text">من فضلك, سجل دخولك</h5>

			<form class="col s12" method="post">
			    <div class='row'>
				<div class='col s12'>
				</div>
			    </div>

			    <div class='row'>
				<div class='input-field input-outlined col s12'>
				    <!-- <input class='validate' type='email' name='email' id='email' /> -->
				    <input required class='validate' type='text' name='username' id='username' />
				    
				    <label  for='username'> اسم الكلية</label>
				</div>
			    </div>

			    <div class='row'>
				<div class='input-field col s12'>
				    <input required class='validate' type='password' name='password' id='password' />
				    <label for='password'>كلمة المرور</label>
				</div>
				<label style='float: right; visibility:hidden'>
				    <a class='pink-text' href='#!'><b>Forgot Password?</b></a>
				</label>
			    </div>

			    <br />
			    <center>
				<div class='row'>
				    <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect pink darken-4'>دخول</button>
				</div>
			    </center>
			</form>
		    </div>
		</div>

	    </center>
	    <!-- </div> -->
	    <!-- <div class="col s6"> -->
	    <!-- <img style="max-width: 100%" alt="" src="https://picsum.photos/900"> -->
	    
	    <!-- </div> -->
	</div>
	<div class="section"></div>
	<div class="section"></div>
	</main>

	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>
	<script>
	 $('#alert_close').click(function(){
	     $( "#alert_box" ).fadeOut( "slow", function() {
	     });
	 });
	</script>
	
    </body>

</html>
