<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class userSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
 
        DB::table("users")->insert([
            "name"=>"edu_f",
            "faculty"=>"كلية التربية",
            'password'=>"p_edu_f12"
        ]);

        DB::table("users")->insert([
            "name"=>"sci_f",
            "faculty"=>    "كلية العلوم",
            'password'=>"p_sci_f32"
        ]);

        DB::table("users")->insert([
            "name"=>"art_f",
            "faculty"=>  "كلية الآداب",
            'password'=>"p_art_f1432"
        ]);

        DB::table("users")->insert([
            "name"=>"med_f",
            "faculty"=> "كلية الطب البشري",
            'password'=>"p_med_f90"
        ]);

        DB::table("users")->insert([
            "name"=>"com_f",
            "faculty"=>  "كلية التجارة",
            'password'=>"p_com_f888"
        ]);

        DB::table("users")->insert([
            "name"=>"agr_f",
            "faculty"=>  "كلية الزراعة",
            'password'=>"p_agr_f1732"
        ]);

        DB::table("users")->insert([
            "name"=>"ind_f",
            "faculty"=>  "كلية التعليم الصناعى",
            'password'=>"p_ind_f9090"
        ]);

        DB::table("users")->insert([
            "name"=>"nur_f",
            "faculty"=>  "كلية التمريض",
            'password'=>"p_nur_f1300"
        ]);

        DB::table("users")->insert([
            "name"=>"vet_f",
            "faculty"=> "كلية الطب البيطري",
            'password'=>"p_vet_f654"
        ]);
        DB::table("users")->insert([
            "name"=>"eng_f",
            "faculty"=>  "كلية الهندسة",
            'password'=>"p_eng_f1517"
        ]);
        DB::table("users")->insert([
            "name"=>"spo_f",
            "faculty"=> "كلية التربية الرياضية",
            'password'=>"p_spo_f1494"
        ]);
        DB::table("users")->insert([
            "name"=>"pha_f",
            "faculty"=> "كلية الصيدلة",
            'password'=>"p_spo_f606"
        ]);

        DB::table("users")->insert([
            "name"=>"law_f",
            "faculty"=>   "كلية الحقوق",
            'password'=>"p_law_f1566"
        ]);

        DB::table("users")->insert([
            "name"=>"arc_f",
            "faculty"=>  "كلية اللآثار",
            'password'=>"p_arc_f1979"
        ]);

        DB::table("users")->insert([
            "name"=>"lan_f",
            "faculty"=> "كلية الألسن",
            'password'=>"p_lan_f644"
        ]);

        DB::table("users")->insert([
            "name"=>"csi_f",
            "faculty"=>  "كلية الحاسبات والمعلومات",
            'password'=>"p_csi_f440"
        ]);
        DB::table("users")->insert([
            "name"=>"dorm",
            "faculty"=>  "المدن الجامعية",
            'password'=>"p_dorm_f9846"
        ]);

        DB::table("users")->insert([
            "name"=>"noor",
            "faculty"=>  "مركز نور البصيرة",
            'password'=>"p_noor_f571"
        ]);

        DB::table("users")->insert([
                "name"=>"admin",
                'password'=>"admin_2020"
        ]);

    }
}
