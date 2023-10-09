<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{

    protected $name;
    protected $faculty;
    protected $field;
    protected $date;
    protected $place;
    protected $targeted_boys;   
    protected $targeted_girls;  
    protected $targeted_staff; 
    protected $targeted_others;
        protected $targeted_specialneeds; 

    protected $financials;
    protected $rewards;
    
 //   protected $hidden  = [ "project_id", "created_at", "updated_at"];
        protected $fillable = ["name", "field", "date", "place", "targeted_others", "targeted_boys", "targeted_girls", "targeted_staff", "targeted_specialneeds", "financials", "rewards", "faculty"]; 
    
    public function objectives()
    {
        return $this->hasMany("App\ProjectObjectives");
    }


    public function financials()
    {
        return $this->hasMany("App\ProjectFinancials");

    }
    
    public function programs()
    {
        return $this->hasMany("App\ProjectProgram");
    }

    public function outsidePartners()
    {
        return $this->hasMany("App\ProjectOutsidePartners");
    }

    public function images(){
        return $this->hasMany("App\ProjectImage");
    }

    
    public function videos(){
        return $this->hasMany("App\ProjectVideo");
    }


    public function rewards(){
        return $this->hasMany("App\ProjectRewards");
    }

}
