<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'lname' => 'Dela Cruz',
                'fname' => 'Juan',
                'mname' => '',
                'email' => 'admin@localhost',
                'password' => Hash::make('a'),
                'role' => 'admin'
            ],
            [
                'lname' => 'Villanueva',
                'fname' => 'Grace',
                'mname' => 'Santos',
                'email' => 'encoder@localhost',
                'password' => Hash::make('a'),
                'role' => 'org'
            ],
            [
                'lname' => 'Bautista',
                'fname' => 'Carlo',
                'mname' => 'Reyes',
                'email' => 'external.encoder@localhost',
                'password' => Hash::make('a'),
                'role' => 'player'
            ],
        ];

        \App\Models\User::insertOrIgnore($data);
    }
}
