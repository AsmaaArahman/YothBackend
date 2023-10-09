<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectOutsidePartners extends Model
{
    protected $partner;
    protected $fillable = ["partner"];
    protected $hidden  = ["id", "project_id", "created_at", "updated_at"];

}
