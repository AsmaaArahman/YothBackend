<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class test extends Controller
{
    public function index(){
        $a = new \App\Project();
        return response()->json(["main_form"=>$a->with(["objectives","financials", "programs", "videos", "images"])->get()]);
    }
}
