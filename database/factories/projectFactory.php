<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;


$factory->define(\App\ProjectObjectives::class, function (Faker $faker) {
    return [
        "objective"=>$faker->paragraph(),
        "project_id"=>factory(\App\Project::class)->create()->id
    ];
});


$factory->define(\App\ProjectFinancials::class, function (Faker $faker) {
    return [
        "name"=>$faker->sentence(2, true),
        "budget"=>$faker->numberBetween(1000,10000),
        "type"=>$faker->sentence,
        "notes"=>$faker->paragraph,
        "project_id"=>factory(\App\Project::class)->create()->id
    ];
});


$factory->define(\App\ProjectProgram::class, function (Faker $faker) {
    return [
        "program"=>$faker->paragraph(),
        "project_id"=>factory(\App\Project::class)->create()->id
    ];
});


$factory->define(\App\ProjectOutsidePartners::class, function (Faker $faker) {
    return [
        "partner"=>$faker->sentence,
        "project_id"=>factory(\App\Project::class)->create()->id
    ];
});

$factory->define(\App\ProjectRewards::class, function (Faker $faker) {
    return [
        "name"=>$faker->sentence,
        "fac"=>$faker->word(7),
        "type"=>$faker->sentence,
        "notes"=>$faker->paragraph,
        
        "project_id"=>factory(\App\Project::class)->create()->id
    ];
});

$factory->define(\App\ProjectImage::class, function (Faker $faker) {
    return [
        "uri"=>"http://lorempixel.com/g/640/480/",
        "project_id"=>factory(\App\Project::class)->create()->id
    ];
});



$factory->define(\App\Project::class, function (Faker $faker) {
    return [
        "name"=>$faker->sentence(2, true),
        "field"=> $faker->word,
        "faculty"=>$faker->word,
        "date" => $faker->dateTime,
        "place"=> $faker->sentence(2, true),
        "targeted_boys"=> $faker->numberBetween(1,500),
        "targeted_girls"=> $faker->numberBetween(1,500),
        "targeted_staff"=> $faker->numberBetween(1,500),
        "targeted_others"=> $faker->numberBetween(1,500),
        
    ];
});
