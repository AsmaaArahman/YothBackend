<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class facultySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $facs = [
            "كلية التربية",
            "كلية العلوم",
            "كلية الآداب",
            "كلية الطب البشري",
            "كلية التجارة",
            "كلية الزراعة",
            "كلية التعليم الصناعى",
            "كلية التمريض",
            "كلية الطب البيطري",
            "كلية الهندسة",
            "كلية التربية الرياضية",
            "كلية الصيدلة",
            "كلية الحقوق",
            "كلية اللآثار",
            "كلية الألسن",
            "كلية الحاسبات والمعلومات",
            "المدن الجامعية",
            "مركز نور البصيرة",
        ];
        foreach ($facs as $f) {
            DB::table("faculties")->insert(["faculty"=>$f]);
        }
        

    }
    
}
