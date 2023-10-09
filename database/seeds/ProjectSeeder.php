<?php

use Illuminate\Database\Seeder;
use Faker\Factory;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Project::class, 5)->create()->each(function ($model) {

            for ($i = 0; $i < 3; ++$i) {
                $model->objectives()->save(factory("App\ProjectObjectives")->make());



                $model->financials()->save(factory("App\ProjectFinancials")->make());



                $model->outsidePartners()->save(factory("App\ProjectOutsidePartners")->make());



                $model->images()->save(factory("App\ProjectImage")->make());



                $model->programs()->save(factory("App\ProjectProgram")->make());



                $model->rewards()->save(factory("App\ProjectRewards")->make());
            }
        });
    }
}
