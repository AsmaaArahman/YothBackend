<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
    protected $faculty;
    public $fillable= ["faculty"];
    public $hidden  = ["id", "created_at", "updated_at"];
}
