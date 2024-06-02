<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Loans;

class LoanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        for($i = 0; $i < 10; $i++) {
            $loan = Loans::create([
                'user_id' => 1,
                'loan_amount' => $this->randomFloat(5, 10000, 10000),
                'amortization' => rand(1,3),
                'status' => 'pending',
            ]);
        }
    }

    function randomFloat($min, $max) {
        return $min + mt_rand() / mt_getrandmax() * ($max - $min);
    }
}
