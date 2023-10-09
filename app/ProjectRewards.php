<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectRewards extends Model
{
    public $fillable = ["name", "fac", "type", "notes"];
    public $hidden  = ["id", "project_id", "created_at", "updated_at"];
    
}
