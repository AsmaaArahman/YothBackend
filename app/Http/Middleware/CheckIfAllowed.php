<?php

namespace App\Http\Middleware;

use Closure;

class CheckIfAllowed
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
        if (is_moderator()) {
            return $next($request);
        }
       
        $id = $request->route("id");
        $fac = session()->get("user_fac");
        $user_id = session()->get("user_id");

        if ($id ==  null) {
            return $next($request);
        }
        $check = \App\Project::where([["id","=", $id], ["faculty","=", $fac]])->first();
        if (!$check || $check == null ) {
            return response()->json(["status"=>"error", "message"=>"resource found or you don't have access to the resource"])->setStatusCode(404);
        }
        return $next($request);
    }
}
