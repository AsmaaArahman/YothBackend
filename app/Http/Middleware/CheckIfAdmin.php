<?php

namespace App\Http\Middleware;

use Closure;

class CheckIfAdmin
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

                //Note: 1 means normal admin;
                if(session()->get("role") != 1) {
                        session()->flush();
                        return redirect("/login");
                }

                return $next($request);
        }
}
