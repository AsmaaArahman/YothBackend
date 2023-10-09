<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectFinancials extends Model
{

    protected $name;
    protected $budget;
    protected $type;
    protected $note;

    public $hidden  = ["id", "project_id", "created_at", "updated_at"];
    public $fillable = ["name", "budget", "type", "notes"];

    public function project(){
        return $this->belongsTo("App\Project");
    }
}
