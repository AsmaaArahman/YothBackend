<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text("name")->nullable();
            $table->text("faculty")->nullable();
            $table->text("field")->nullable();
            $table->dateTime("date")->nullable();
            $table->text("place")->nullable();
            $table->integer("targeted_boys")->unsigned()->nullable();
            $table->integer("targeted_girls")->unsigned()->nullable();
            $table->integer("targeted_staff")->unsigned()->nullable();
            $table->integer("targeted_others")->unsigned()->nullable();
            $table->integer("targeted_specialneeds")->unsigned()->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
