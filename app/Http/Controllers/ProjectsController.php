<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;

class ProjectsController extends Controller
{
    public function index()
    {
        $project = new \App\Project();

        if (!is_moderator()) {
            $q = request()->q;
            $per_page = request()->per != null ? request()->per : 2;

            if ($q != null) {
                $data =  $project->with(["objectives", "financials", "programs", "images", "rewards", "outsidePartners"])
                                 ->where("faculty", "=", session()->get("user_fac"));
                
                $data= $data->where([['name', "like", "%$q%"]])
                    ->orWhere([['date', "like", "%$q%"]])
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
                    })->paginate($per_page);
                // $data= $data->where("faculty", "=", session()->get("user_fac"))->paginate($per_page);

            }else{
                  $data =  $project->with(["objectives", "financials", "programs", "images", "rewards", "outsidePartners"])
                        ->where("faculty", "=", session()->get("user_fac"))->paginate($per_page);
            }



            
            /**
             * if user a moderator
             */
        } else {
            $q = request()->q;
            $per_page = request()->per != null ? request()->per : 2;
            if ($q != null) {

                $data = $project->with(["objectives", "financials", "programs", "images", "rewards", "outsidePartners"])
                    ->where([['name', "like", "%$q%"]])
                    ->orWhere([['faculty', "like", "%$q%"]])
                    ->orWhere([['date', "like", "%$q%"]])
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
                    })->paginate(5);
            } else {
                $data =  $project
                    ->with(["objectives", "financials", "programs", "images", "rewards", "outsidePartners"])
                      ->paginate($per_page);                
            }
        }
        
        
        
        return response()
        ->json(["wrapper" => $data])
        ->setStatusCode(200);
        

    
}



    
    public function oneRecord($id)
    {
        $project = new \App\Project();
        return response()
            ->json(["wrapper" => $project->where("id", "=", $id)->with(["objectives", "financials", "programs", "videos", "images", "rewards", "outsidePartners"])->get()]);
    }



    public function store(Request $request)
    {

        if (!isset($request->main_form) && $request->main_form == null) {
            return response()->json(["state" => "error", "message" => "main_form object is required"])->setStatusCode(400);
        }

        $validate = Validator::make($request->main_form, [
                "name"                   => "required",
                //  "faculty"                => "required",
                "field"                  => "required",
                // "date"                   => "required",
                // "place"                  => "required",
                
                // "targeted_boys"          => "numeric",
                // "targeted_girls"         => "numeric",
                // "targeted_staff"         => "numeric",
                // "targeted_others"        => "numeric",
                
                // "objectives"             => "array",
                // "objectives.*.objective" => "required",
                // "financials"          => "array",
                // "financials.*.name"   => "required",
                // "financials.*.budget" => "required|numeric",
                // "financials.*.type"   => "required",
                // "financials.*.notes"  => "required",
                
                // "outside_partners"    => "array",
                // "outside_partners.*.partner"     => "required",
                
                // "programs"               => "array",
                // "programs.*.program"     => "required",

                // "rewards"                => "array",
                // "rewards.*.name"         => "required",
                // "rewards.*.fac"          => "required",
                // "rewards.*.type"         => "required",
                // "rewards.*.notes"        => "required",

                // "images"                 => "array",
                // "images.*.uri"           => "required"

        ]);

        if ($validate->fails()) {
            return response()->json(["status" => " error", "message" => $validate->errors()])->setStatusCode(400);
        }

        $name            = $request->main_form["name"] ?? null;
        $faculty         = is_moderator() ? $request->main_form["faculty"] : session()->get("user_fac");
        $field           = $request->main_form["field"] ?? null;
        $date            = $request->main_form["date"] ?? null;
        $place           = $request->main_form["place"] ?? null;
        $targeted_boys   = $request->main_form["targeted_boys"] ?? null;
        $targeted_girls  = $request->main_form["targeted_girls"] ?? null;
        $targeted_staff  = $request->main_form["targeted_staff"] ?? null;
        $targeted_others = $request->main_form["targeted_others"] ?? null;
        $targeted_specialneeds = $request->main_form["targeted_specialneeds"] ?? null;
        $objectives      = $request->main_form["objectives"] ?? null;
        $financials      = $request->main_form["financials"] ?? null;
        $rewards         = $request->main_form['rewards'] ?? null;
        $programs        = $request->main_form["programs"] ?? null;
        $partners        = $request->main_form["outside_partners"] ?? null;
        $images          = $request->main_form["images"] ?? null;




        $project = new \App\Project();
        $project->name            = $name;
        $project->faculty         = $faculty;
        $project->field           = $field;
        $project->date            = $date;
        $project->place           = $place;
        $project->targeted_boys   = $targeted_boys;
        $project->targeted_girls  = $targeted_girls;
        $project->targeted_staff  = $targeted_staff;
        $project->targeted_others = $targeted_others;
        $project->targeted_specialneeds= $targeted_specialneeds;

        $financials_array = [];
        $rewards_array    = [];
        $objectives_array = [];
        $programs_array   = [];
        $partners_array   = [];
        $images_array      = [];




        if ($financials != null) {
            for ($i = 0; $i < count($financials); ++$i) {
                array_push($financials_array, new \App\ProjectFinancials([
                    "name" => $financials[$i]["name"],
                    "budget" => $financials[$i]["budget"],
                    "type" => $financials[$i]["type"],
                    "notes" => $financials[$i]["notes"],

                ]));
            }
        }




        if ($rewards != null) {
            for ($i = 0; $i < count($rewards); ++$i) {
                array_push($rewards_array, new \App\ProjectRewards([
                    "name" => $rewards[$i]["name"],
                    "fac" => $rewards[$i]["fac"],
                    "type" => $rewards[$i]["type"],
                    "notes" => $rewards[$i]["notes"],

                ]));
            }
        }

        if ($objectives != null) {
            for ($i = 0; $i < count($objectives); ++$i) {
                array_push($objectives_array, new \App\ProjectObjectives([
                    "objective" => $objectives[$i]["objective"],
                ]));
            }
        }

        if ($programs != null) {

            for ($i = 0; $i < count($programs); ++$i) {
                array_push($programs_array, new \App\ProjectProgram([
                    "program" => $programs[$i]["program"],
                ]));
            }
        }

        if ($partners != null) {
            for ($i = 0; $i < count($partners); ++$i) {
                array_push($partners_array, new \App\ProjectOutsidePartners([
                    "partner" => $partners[$i]["partner"],
                ]));
            }
        }


        if ($images != null) {
            for ($i = 0; $i < count($images); ++$i) {
                array_push($images_array, new \App\ProjectImage([
                    "uri" => $images[$i]["uri"],
                ]));
            }
        }





        if (
            $project->save()
            // && $project->programs()->saveMany($programs_array)
            // && $project->images()->saveMany($images_array)
            // && $project->outsidePartners()->saveMany($partners_array)
            // && $$project->objectives()->saveMany($objectives_array)
            // && $project->objectives()->saveMany($financials_array)
        ) {
            if (count($financials_array) != 0) {
                $project->objectives()->saveMany($financials_array);
            }
            if (count($rewards_array) != 0) {
                $project->objectives()->saveMany($rewards_array);
            }
            if (count($objectives_array) != 0) {
                $project->objectives()->saveMany($objectives_array);
            }

            if (count($programs_array) != 0) {
                $project->objectives()->saveMany($programs_array);
            }
            if (count($images_array) != 0) {
                $project->objectives()->saveMany($images_array);
            }
            if (count($partners_array) != 0) {
                $project->objectives()->saveMany($partners_array);
            }

            return response()->json(["status" => "success"])->setStatusCode(200);
        } else {
            return response()->json(["status" => "error"])->setStatusCode(500);
        }
    }


















    public function update(Request $request, $id)
    {
        if (!isset($request->main_form) && $request->main_form == null) {
            return response()->json(["state" => "error", "message" => "main_form object is required"])->setStatusCode(400);
        }



        $validate = Validator::make($request->main_form, [
            //     "name"                   => "required",
            //     // "faculty"                => "required",
            //     "field"                  => "required",
            //     "date"                   => "required",
            //     "place"                  => "required",

            // "targeted_boys"          => "numeric",
            // "targeted_girls"         => "numeric",
            // "targeted_staff"         => "numeric",
            // "targeted_others"        => "numeric",

            // "objectives"             => "array",
            // "objectives.*.objective" => "required",
            // "financials"          => "array",
            // "financials.*.name"   => "required",
            // "financials.*.budget" => "required|numeric",
            // "financials.*.type"   => "required",
            // "financials.*.notes"  => "required",

            // "outside_partners"    => "array",
            // "outside_partners.*.partner"     => "required",

            // "programs"               => "array",
            // "programs.*.program"     => "required",

            // "rewards"                => "array",
            // "rewards.*.name"         => "required",
            // "rewards.*.fac"          => "required",
            // "rewards.*.type"         => "required",
            // "rewards.*.notes"        => "required",

            "images"                 => "array",
            "images.*.uri"           => "required"

        ]);

        // if ($validate->fails()) {
        //     return response()->json(["status" =>" error", "message"=> $validate->errors()])->setStatusCode(400);
        // }



        $name            = $request->main_form["name"] ?? null;
        $faculty         = is_moderator() ? $request->main_form["faculty"] : session()->get("user_fac");
        $field           = $request->main_form["field"] ?? null;
        $date            = $request->main_form["date"] ?? null;
        $place           = $request->main_form["place"] ?? null;
        $targeted_boys   = $request->main_form["targeted_boys"] ?? null;
        $targeted_girls  = $request->main_form["targeted_girls"] ?? null;
        $targeted_staff  = $request->main_form["targeted_staff"] ?? null;
        $targeted_others = $request->main_form["targeted_others"] ?? null;
        $targeted_specialneeds = $request->main_form["targeted_specialneeds"] ?? null;
        $objectives      = $request->main_form["objectives"] ?? null;
        $financials      = $request->main_form["financials"] ?? null;
        $rewards         = $request->main_form['rewards'] ?? null;
        $programs        = $request->main_form["programs"] ?? null;
        $partners        = $request->main_form["outside_partners"] ?? null;
        $images          = $request->main_form["images"] ?? null;


        $project = \App\Project::with(["objectives", "financials", "programs", "videos", "images", "rewards"])->find($id);

        if ($project == null) {
            return response()->json([
                "status" => "error",
                "message" => "can't find a record with id $id"
            ])->setStatusCode(404);
        }



        $financials_array = [];
        $objectives_array = [];
        $programs_array   = [];
        $partners_array   = [];
        $images_array     = [];
        $rewards_array    = [];



        if ($financials != null) {
            for ($i = 0; $i < count($financials); ++$i) {
                array_push($financials_array, new \App\ProjectFinancials([
                    "name" => $financials[$i]["name"],
                    "budget" => $financials[$i]["budget"],
                    "type" => $financials[$i]["type"],
                    "notes" => $financials[$i]["notes"],

                ]));
            }
        }




        if ($rewards != null) {
            for ($i = 0; $i < count($rewards); ++$i) {
                array_push($rewards_array, new \App\ProjectRewards([
                    "name" => $rewards[$i]["name"],
                    // "fac" => $rewards[$i]["fac"],
                    "type" => $rewards[$i]["type"],
                    "notes" => $rewards[$i]["notes"],

                ]));
            }
        }

        if ($objectives != null) {
            for ($i = 0; $i < count($objectives); ++$i) {
                array_push($objectives_array, new \App\ProjectObjectives([
                    "objective" => $objectives[$i]["objective"],
                ]));
            }
        }

        if ($programs != null) {

            for ($i = 0; $i < count($programs); ++$i) {
                array_push($programs_array, new \App\ProjectProgram([
                    "program" => $programs[$i]["program"],
                ]));
            }
        }

        if ($partners != null) {
            for ($i = 0; $i < count($partners); ++$i) {
                array_push($partners_array, new \App\ProjectOutsidePartners([
                    "partner" => $partners[$i]["partner"],
                ]));
            }
        }


        if ($images != null) {
            for ($i = 0; $i < count($images); ++$i) {
                array_push($images_array, new \App\ProjectImage([
                    "uri" => $images[$i]["uri"],
                ]));
            }
        }



        $project->financials()->delete();
        $project->objectives()->delete();
        $project->rewards()->delete();
        $project->programs()->delete();
        $project->outsidePartners()->delete();
        $project->images()->delete();





        if ($project->update([
            "name" => $name,
            // "faculty"=>$faculty,
            "field" => $field,
            "date" => $date,
            "place" => $place,
            "targeted_boys" => $targeted_boys,
            "targeted_girls" => $targeted_girls,
            "targeted_others" => $targeted_others,
            "targeted_staff" => $targeted_staff,
            "targeted_specialneeds"=> $targeted_specialneeds

        ])) {
            if (count($financials_array) != 0) {
                $project->objectives()->saveMany($financials_array);
            }
            if (count($rewards_array) != 0) {
                $project->objectives()->saveMany($rewards_array);
            }
            if (count($objectives_array) != 0) {
                $project->objectives()->saveMany($objectives_array);
            }

            if (count($programs_array) != 0) {
                $project->objectives()->saveMany($programs_array);
            }
            if (count($images_array) != 0) {
                $project->objectives()->saveMany($images_array);
            }
            if (count($partners_array) != 0) {
                $project->objectives()->saveMany($partners_array);
            }
            return response()->json(["status" => "update record successfully"])->setStatusCode(200);
        } else {
            return response()->json(["status" => "error"])->setStatusCode(500);
        }
    }


    public function delete($id)
    {

        $project = \App\Project::find($id);
        $images = [];

        if ($project == null) {
            return response()->json([
                "status" => "error",
                "message" => "can't find a record with id $id"
            ])->setStatusCode(404);
        }
        $images = $project->images()->get();
        foreach ($images as $image) {
                $file = storage_path() . "/app/uploads/" . $image["uri"];
                
                if (file_exists(storage_path() . "/app/uploads/" . $image["uri"])) {
                File::delete($file);
            }
        }

        if ($project->delete()) {

            return response()->json([
                "status" => "success",
                "message" => "record  $id deleted successfully"
            ])->setStatusCode(200);
        }
        return "end";
    }

    public function faculties(){
        $faculties = [];
        $data = \App\Faculty::all();
        
        foreach ($data as $f) {
            array_push($faculties, $f["faculty"]);
        }
        return response()->json($faculties)->setEncodingOptions(JSON_UNESCAPED_UNICODE);
        
    }
    
}
