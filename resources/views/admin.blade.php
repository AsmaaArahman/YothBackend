<!DOCTYPE html>
<html lang="en">
    <head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>الرئيسية</title>

	<link rel="stylesheet" type="text/css" href="{{ asset('fonts/font-awesome-4.2.0/css/font-awesome.min.css')}}" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="" crossorigin="">
	<link rel="stylesheet" type="text/css" href="{{ asset('css/style.css')}}" />

	<style>
	 nav{
	     background-color: #880e4f !important;
	 }
	</style>

    </head>
    <body>
	<!-- start main -->
	    <nav class="navbar navbar-expand-lg navbar-dark" dir="ltr">
		<div class="container-fluid">

		    <a class="">
			<img  alt="" src="{{asset("assets/sohagunilogo.png")}}"/>
			<img  style="max-width: 70px" alt="" src="{{asset("assets/pu.png")}}"/>
		    </a>

		    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		    </button>
		    <div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
			    <li class="nav-item">
				<a class="nav-link " aria-current="page" href="/admin">الرئيسية</a>
			    </li>
			    <li class="nav-item">
				<a class="nav-link " aria-current="page" href="/logout">تسجيل الخروج</a>
			    </li>
			    
			</ul>
			<div class="mx-1">
		 <select class="form-select"  onchange="location=this.value">
		     <option value="" selected>اختر كلية</option>
		 @foreach($facs as $fac)
		 
		 <option value="/admin/fac/{{$fac->id}}" onchange="location=this.value">
		 <a href="/admin/fac/{{ $fac->id }}"><i class="fa fa-arrow-circle-left"></i> {{ $fac->faculty }}</a>
		 </option>
		 
		 @endforeach

		 </select>
		 </div>
			<form class="d-flex" action="">
			    <input name="q" class="form-control me-2" type="search" placeholder="ابحث عن مشروع معين" aria-label="Search">
			    <button class="btn btn-success" type="submit">بحث</button>
			</form>
		    </div>
		</div>
	    </nav>



	    <div id="main" class="container">


	    <!-- <div class="containerr" style="margin: 20px;">
		 <!-- <div class="container" id="container"> -->
            <div class="card">
		<table class="table table-striped text-center ">
		    <thead class="pink lighten-5">
			<th>اسم المشروع</th>
			<th>المجال</th>
			<th>الكلية</th>
			<th>تاريخ التنفيذ</th>
			<th></th>
		    </thead>

		    <tbody>
			@foreach($projects as $project)
			    <tr>
				<td>{{$project->name}}</td>
				<td>{{$project->field}}</td>
				<td>{{$project->faculty}}</td>
				<td>{{explode(" ", $project->date )[0]}}</td>
				<td>
				    <a href="/admin/project/{{ $project->id }}" class="btn btn-primary">
					عرض
				    </a>
				</td>
			    </tr>
			@endforeach
		    </tbody>
		</table>

		{!! $projects->links() !!}
		
	    </div> 
	    
	</div>


	<footer>
            <p>جميع الحقوق محفوظة لوحدة البرمجيات - مركز الخدمات الالكترونيه - جامعة سوهاج</p>
        </footer><!-- end footer --> 
	</div>


	<script src="{{asset('js/jquery-1.11.1.min.js')}}"></script>
	<script src="{{asset('js/bootstrap.min.js')}}"></script>
	<script src="{{asset('js/script.js')}}"></script>
	<script src="{{asset('js/wow.min.js')}}"></script>
	<script>new WOW().init();</script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
</html>
