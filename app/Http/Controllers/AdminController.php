<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
        public function index() {
                $facs= \App\Faculty::all();

                $q= request()->get("q");
                if($q) {
                        $projects= \App\Project::where([['name', "like", "%$q%"]])
                                 ->orWhere([['faculty', "like", "%$q%"]])
                                 ->orWhere([['date', "l]ike", "%$q%"]])
                                 ->orWhere([['place', "like", "%$q%"]])
                                 ->orWhere([['field', "like", "%$q%"]])
                                 ->orWhere([['targeted_boys', "like", "%$q%"]])
                                 ->orWhere([['targeted_girls', "like", "%$q%"]])
                                 ->orWhere([['targeted_others', "like", "%$q%"]])
                                 ->orWhere([['targeted_staff', "like", "%$q%"]])
                                 ->orWhereHas("financials", function ($query) {
                                         $q = request()->q;
                                         $query->where("name", "like", "%$q%");
                                         $query->where("budget", "like", "%$q%");
                                         $query->where("type", "like", "%$q%");
                                         $query->where("notes", "like", "%$q%");
                                 })->orWhereHas("rewards", function ($query) {
                                         $q = request()->q;
                                         $query->where("name", "like", "%$q%");
                                         $query->where("fac", "like", "%$q%");
                                         $query->where("type", "like", "%$q%");
                                         $query->where("notes", "like", "%$q%");
                                 })->orWhereHas("programs", function ($query) {
                                         $q = request()->q;
                                         $query->where("program", "like", "%$q%");
                                 })->orWhereHas("outsidePartners", function ($query) {
                                         $q = request()->q;
                                         $query->where("partner", "like", "%$q%");
                                 })->orWhereHas("objectives", function ($query) {
                                         $q = request()->q;
                                         $query->where("objective", "like", "%$q%");
                                 })->paginate(10);
                } else {
                        $projects= \App\Project::paginate(10);
                }
                
                
                return view("admin")->with([
                        "facs"=>$facs,
                        "projects"=> $projects
                ]);
        } 



        public function facultyProjects($id) {
                $facs= \App\Faculty::all();

                $fac= \App\Faculty::find($id);
                
                $projects= \App\Project::where("faculty", "=", $fac->faculty)->paginate(5);
                return view("facultyProjects")->with([
                        "facs"=>$facs,
                        "fac" => $fac,
                        "projects"=> $projects
                ]);
        } 


        
        public function singleProject($id) {
                $facs= \App\Faculty::all();

                $project = \App\Project::find($id);
                return view("singleProject")->with([
                        "project"=>$project,
                        "facs"=>$facs
                        
                ]);
        } 
        

}

