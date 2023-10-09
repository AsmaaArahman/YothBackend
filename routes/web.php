<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get("/login", "LoginController@index");
Route::post("/login", "LoginController@login");
Route::any("/logout", "LoginController@logout");



Route::group(["middleware"=>["checkIfAdmin"]], function(){
        Route::get("/admin/", "AdminController@index");
        Route::get("/admin/fac/{id}", "AdminController@facultyProjects");
        Route::get("/admin/project/{id}", "AdminController@singleProject");

});

        



Route::get("/{home?}/", function(){return view("home");})->where('home', 'home.*')->middleware("CheckLogin");

Route::group(["prefix"=>"api", "middleware"=>[ "CheckLogin", "CheckIfAllowed"]], function(){
        
    Route::get("/projects", "ProjectsController@index");
    Route::get("/projects/{id}", "ProjectsController@oneRecord");
    Route::post("/projects", "ProjectsController@store");
    Route::post("/projects/update/{id}", "ProjectsController@update");
    Route::delete("/projects/{id}", "ProjectsController@delete");
    Route::post("/upload/images", "ImageUploadController@images");
    Route::delete("/upload/images/{image_id}", "ImageUploadController@deleteImage")->middleware("checkImageDaleteAllowed");

    Route::get("/faculties", "ProjectsController@faculties");
    

});


Route::get("/uploads/{id}", function($id=null){
    if (!file_exists(storage_path()."/app/uploads/".$id)) {
        return response()->json(["status" => "error", 'message'=>"file dosn't exist"])->setStatusCode(404);
    }
    return response()->file(storage_path(). "/app/uploads/" .$id);
});

Route::get("/test", "test@index");
