<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectVideo extends Model
{
    
    protected $uri;
    protected $fillable = ["uri"];
   
    protected $hidden  = ["id", "project_id", "created_at", "updated_at"];
}
