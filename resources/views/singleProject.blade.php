<!DOCTYPE html>
<html lang="en">
    <head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title> {{ $project->name }}</title>
	<link rel="stylesheet" type="text/css" href="{{ asset('/fonts/font-awesome-4.2.0/css/font-awesome.min.css')}}" />
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="" crossorigin="">

	<link rel="stylesheet" type="text/css" href="{{ asset('/css/style.css')}}" />
    </head>
    <body>

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
		    </div>
		</div>
	    </nav>

	<!-- start main -->
	<div id="main">

	    <div class="containerr container" style="margin: 20px;">
		<div class="card">
		    <div class="card-body">
			
		<table class="table">
		    <tr>
			<td>اسم المشروع</td>
			<td> {{$project->name }}</td>
		    </tr>

		    <tr>
			<td>الكلية</td>
			<td> {{$project->faculty}}</td>
		    </tr>


		    @if($project->field)
			<tr>
			    <td>المجال</td>
			    <td>{{$project->field }}</td>
			</tr>
		    @endif

		    @if($project->objectives()->count() != 0)
			<tr>
			    <td>الأهداف</td>
			    <td>
				<ul>
				    @foreach($project->objectives()->get() as $obj)
					<li>{{ $obj->objective }}</li>
				    @endforeach
				</ul>
			    </td>
			</tr>
		    @endif

		    @if($project->place)
			<tr>
			    <td>مكان التنفيذ</td>
			    <td>{{$project->place }}</td>
			</tr>
		    @endif

		    
		    @if($project->date)
			<tr>
			    <td>موعد التنفيذ</td>
			    <td>{{$project->date }}</td>
			</tr>
		    @endif

		    <tr>
			<td>عدد المستفيدين</td>
			<td>
			    <ul>
				@if($project->targeted_boys )<li> {{$project->targeted_boys }} -  طالب</li> @endif
				@if($project->targeted_girls ) <li>{{ $project->targeted_girls }} - طالبة</li> @endif
				@if($project->targeted_staff ) <li>{{ $project->targeted_staff }} -  عضو هيئة تدريس</li> @endif
				@if($project->targeted_staff ) <li>{{ $project->targeted_specialneeds }} -  ذوي احتياجات خاصة</li> @endif
				@if($project->targeted_others ) <li>{{ $project->targeted_others }} -  عاملين</li> @endif
			    </ul>
			</td>
		    </tr>


		    @if($project->outsidePartners()->count() != 0)
			<tr>
			    <td>الجهات الخارجية المشاركة</td>
			    <td>
				<ul>
				    @foreach($project->outsidePartners()->get() as $out)
					<li>{{ $out->partner }}</li>
				    @endforeach
				</ul>
			    </td>
			</tr>
		    @endif
		    
		    @if($project->financials()->count() != 0)

		    <tr>
			<td>تفاصيل الموازنة التقديرية للمشروع</td>
			<td>
			    <table class="table">
				<thead>
				    <tr>
					<th>البيان</th>
					<th>الميزانية المقترحة</th>
					<th>نوع الدعم</th>
					<th>ملاحظات</th>
				    </tr>
				</thead>
				
				<tbody>
				    @foreach($project->financials()->get() as $fin)
					<tr>
					    <td>{{$fin->name }}</td>
					    <td>{{$fin->budget }}</td>
					    <td>{{$fin->type }}</td>
					    <td>{{$fin->notes }}</td>
					</tr>
				    @endforeach
				</tbody>
			    </table>
			</td>
		    </tr>
		    @endif

		    @if($project->programs()->count() != 0)
			<tr>
			    <td>البرنامج التفصيلي للمشروع</td>
			    <td>
				<ul>
				    @foreach($project->programs()->get() as $program)
					<li>{{ $program->program }}</li>
				    @endforeach
				</ul>
			    </td>
			</tr>
		    @endif
		    

		    @if($project->rewards()->count() != 0)
			<tr>
			    <td>الجوائز</td>
			    <td>
				<table class="table">
				    <thead>
					<tr>
					    <th>الاسم</th>
					    <th>المركز</th>
					    <th>ملاحظات</th>
					</tr>
				    </thead>
				    
				    <tbody>
					@foreach($project->rewards()->get() as $reward)
					    <tr>
						<td>{{$reward->name }}</td>
						<td>{{$reward->type }}</td>
						<td>{{$reward->notes }}</td>
					    </tr>
					@endforeach
				    </tbody>
				</table>
			    </td>
			</tr>
		    @endif

		    @if($project->images()->count() != 0)
			<tr>
			    <td>الصور</td>
			    <td>
				<div class="row">
				    
				    @foreach($project->images()->get() as $image)
					<div class="col-sm-3">
					    <img class="prev-img" alt="" src="/uploads/{{$image->uri }}"/>
					</div>
				    @endforeach
				</div>
			    </td>
			</tr>
		    @endif


		</table>
	    </div>
	</div>
		
	    </div>
	    
	    

	    <!-- start footer -->
	    <footer>
		<p>جميع الحقوق محفوظة لوحدة البرمجيات - مركز الخدمات الالكترونيه - جامعة سوهاج</p>
	    </footer>
	</div>
	
	<script src="{{asset('/js/jquery-1.11.1.min.js')}}"></script>
	<script src="{{asset('/js/bootstrap.min.js')}}"></script>
	<script src="{{asset('/js/script.js')}}"></script>
	<script src="{{asset('/js/wow.min.js')}}"></script>
	<script>new WOW().init();</script>

		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    </body>
</html>
