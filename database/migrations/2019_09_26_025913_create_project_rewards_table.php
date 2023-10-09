<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectRewardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_rewards', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text("name")->nullable();
            $table->text("fac")->nullable();
            $table->text("type")->nullable();
            $table->text("notes")->nullable();
            $table->bigInteger("project_id")->unsigned()->nullable();
            $table->foreign("project_id")->references("id")->on("projects")->onDelete("cascade")->onUpdate("cascade");
            
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
        Schema::dropIfExists('project_rewards');
    }
}
