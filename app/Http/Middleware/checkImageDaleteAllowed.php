<?php

namespace App\Http\Middleware;

use Closure;

class checkImageDaleteAllowed
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $image_id = $request->route("image_id");

        if ($image_id == null) {
            return next($request);
        }


        $proj = \App\Project::select("faculty")->whereHas("images", function ($q) {
            $im_id = request()->route("image_id");

            $q->where([["uri", "=", $im_id ]]);

        })->first()->faculty;



        if ($proj == session()->get("user_fac")) {
            return $next($request);
        }else{
            return response()->json(["error", "not allowed"])->setStatusCode(401);
        }



    }
}
