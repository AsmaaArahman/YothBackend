<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class ImageUploadController extends Controller
{
    public function images(Request $request){
        if ($request->hasFile("images")) {

            $images = $request->file("images");
            if (is_array($images)) {

                $count  = count($images);
                $names = [];
                
                $validtor =  Validator::make($request->all(), [
                    "images.*" => "between:0,2048|mimes:jpeg,png,svg,gif"
                ], []);

                if ($validtor->fails()) {
                    return response()->json(["status"=>"error", "message"=>$validtor->errors()])->setStatusCode(400);
                }
                
                foreach ($images as $image) {
                    $name = $image->store("uploads");
                    $name = substr($name, strlen("uploads/"));
                    array_push($names,["uri" => $name]);
                }
                return  response()->json(["status"=>"success", "message"=>"$count images have been successfully uploaded", "images" => $names])->setStatusCode(200);
            }

            return response()->json(["status"=>"error", "message"=>"images must be an array of file"])->setStatusCode(400);
        }

        return response()->json(["status"=>"error", "message"=>"bad request, no images found "])->setStatusCode(400);
    }


    public function deleteImage($image_id = null){

        if ($image_id != null) {
            $file = \App\ProjectImage::where("uri",$image_id)->first();
            if ($file != null) {
                $file->delete();
            }
                  
        }
        
        $file = storage_path()."/app/uploads/" . $image_id;
        if (file_exists($file)) {
            if (File::delete($file)) {
                return response()->json([
                    "status"=> "success",
                    "message"=> "the file $image_id deleted successfully"
                ])->setStatusCode(200);
            }
        }else{
            return response()->json([
                "status" => "error",
                "message" => "No such file found!"
            ])->setStatusCode(404);
        }
    }
}
