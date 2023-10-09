<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function index(){
            if (session()->has("user_id") && session()->get("role") == 0) {
                return redirect("/");
        }
        return view("login");
        
    }

    public function login(Request $request){
        $username = $request->username;
        $password = $request->password;

        if ($username == null || $password == null) {
            session()->flash("error", "<li>اادخل الاسم وكلمة المرور</li>");
            return back();
        }

        $user = \App\User::where([["name","=",$username], ["password", "=", $password]])->first();
        
        if ($user !== null) {
             $fac =  isset($user["faculty"])? $user["faculty"] : null;
            session()->put("user_id", $user["id"]);
            session()->put("user_fac", $fac);
            session()->put("role", $user["admin"]);

            if($user["admin"] == 1 ) {
                    return redirect("/admin");
            } 
            return redirect("/");
        }else{
            session()->flash("error", "<li>خطأ في اسم المستخدم أو كلمة المرور </li>");
            return back();  
        }
        
        
    }

    public function logout(){
        session()->flush();
        return redirect("/login");
    }
}
