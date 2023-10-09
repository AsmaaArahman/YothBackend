<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectProgram extends Model
{
    
    protected $program;
    protected $fillable = ["program"];
    protected $hidden  = ["id", "project_id", "created_at", "updated_at"];

}
