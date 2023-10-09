<?php

namespace App\Http\Middleware;

use Closure;

class CheckLogin
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
                if (!session()->has("user_id")) {
                        return redirect("/login");
                                                
                }

                //Note: 0 means normal user;
                // this prevent the admin from accessing those routes
                if(session()->get("role") != 0) {
                        return redirect("/login");
                }

                return $next($request);
        }
}
