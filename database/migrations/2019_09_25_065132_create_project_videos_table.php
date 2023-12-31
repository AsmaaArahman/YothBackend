<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_videos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text("uri")->nullable();
            $table->bigInteger("project_id")->unsigned()->nullable();
            $table->timestamps();

            $table->foreign("project_id")->references("id")->on("projects")->onDelete("cascade")->onUpdate("cascade");

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_videos');
    }
}
