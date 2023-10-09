<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectObjectives extends Model
{
    protected $objective;
    protected $fillable = ["objective"];
    protected $hidden  = ["id", "project_id", "created_at", "updated_at"];
    
}
