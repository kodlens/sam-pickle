<?php

namespace Database\Seeders;

use App\Models\OrganizerProfile;
use App\Models\PlayerProfile;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

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
                'name' => 'Juan Dela Cruz',
                'email' => 'admin@localhost',
                'password' => Hash::make('a'),
                'role' => 'admin',
                'active_role' => 'admin',
                'can_organize' => true,
                'can_play' => true,
                'subscription_type' => 'pro',
                'subscription_status' => 'active',
                'trial_ends_at' => null,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'lname' => 'Villanueva',
                'fname' => 'Grace',
                'mname' => 'Santos',
                'name' => 'Grace Villanueva',
                'email' => 'encoder@localhost',
                'password' => Hash::make('a'),
                'role' => 'org',
                'active_role' => 'organizer',
                'can_organize' => true,
                'can_play' => true,
                'subscription_type' => 'pro',
                'subscription_status' => 'trialing',
                'trial_ends_at' => now()->addDays(14),
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'lname' => 'Bautista',
                'fname' => 'Carlo',
                'mname' => 'Reyes',
                'name' => 'Carlo Bautista',
                'email' => 'external.encoder@localhost',
                'password' => Hash::make('a'),
                'role' => 'player',
                'active_role' => 'player',
                'can_organize' => false,
                'can_play' => true,
                'subscription_type' => 'free',
                'subscription_status' => 'active',
                'trial_ends_at' => null,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'lname' => 'Tan',
                'fname' => 'David',
                'mname' => 'Lim',
                'name' => 'David Tan',
                'email' => 'organizer2@localhost',
                'password' => Hash::make('a'),
                'role' => 'org',
                'active_role' => 'organizer',
                'can_organize' => true,
                'can_play' => true,
                'subscription_type' => 'pro',
                'subscription_status' => 'active',
                'trial_ends_at' => now()->addDays(30),
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'lname' => 'Mendoza',
                'fname' => 'Patricia',
                'mname' => 'Cruz',
                'name' => 'Patricia Mendoza',
                'email' => 'player2@localhost',
                'password' => Hash::make('a'),
                'role' => 'player',
                'active_role' => 'player',
                'can_organize' => false,
                'can_play' => true,
                'subscription_type' => 'free',
                'subscription_status' => 'active',
                'trial_ends_at' => null,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'lname' => 'Aquino',
                'fname' => 'Mark',
                'mname' => 'Santos',
                'name' => 'Mark Aquino',
                'email' => 'player3@localhost',
                'password' => Hash::make('a'),
                'role' => 'player',
                'active_role' => 'player',
                'can_organize' => false,
                'can_play' => true,
                'subscription_type' => 'free',
                'subscription_status' => 'active',
                'trial_ends_at' => null,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        User::insertOrIgnore($data);

        // Seed corresponding Organizer and Player profiles
        $organizer1 = User::where('email', 'encoder@localhost')->first();
        if ($organizer1 && ! $organizer1->organizerProfile) {
            OrganizerProfile::firstOrCreate(
                ['user_id' => $organizer1->id],
                [
                    'organization_name' => 'Pacific Pickleball Club',
                    'city' => 'Manila',
                    'contact_number' => '+63 917 123 4567',
                    'verified_status' => 'active',
                ]
            );

            PlayerProfile::firstOrCreate(
                ['user_id' => $organizer1->id],
                [
                    'skill_rating' => '4.0',
                    'milestone_points' => 320,
                    'preferred_hand' => 'Right',
                ]
            );
        }

        $organizer2 = User::where('email', 'organizer2@localhost')->first();
        if ($organizer2 && ! $organizer2->organizerProfile) {
            OrganizerProfile::firstOrCreate(
                ['user_id' => $organizer2->id],
                [
                    'organization_name' => 'Metro Smash Arena',
                    'city' => 'Cebu City',
                    'contact_number' => '+63 918 987 6543',
                    'verified_status' => 'active',
                ]
            );

            PlayerProfile::firstOrCreate(
                ['user_id' => $organizer2->id],
                [
                    'skill_rating' => '4.5',
                    'milestone_points' => 540,
                    'preferred_hand' => 'Right',
                ]
            );
        }

        $player1 = User::where('email', 'external.encoder@localhost')->first();
        if ($player1 && ! $player1->playerProfile) {
            PlayerProfile::firstOrCreate(
                ['user_id' => $player1->id],
                [
                    'skill_rating' => '3.5',
                    'milestone_points' => 180,
                    'preferred_hand' => 'Right',
                ]
            );
        }

        $player2 = User::where('email', 'player2@localhost')->first();
        if ($player2 && ! $player2->playerProfile) {
            PlayerProfile::firstOrCreate(
                ['user_id' => $player2->id],
                [
                    'skill_rating' => '3.0',
                    'milestone_points' => 95,
                    'preferred_hand' => 'Left',
                ]
            );
        }

        $player3 = User::where('email', 'player3@localhost')->first();
        if ($player3 && ! $player3->playerProfile) {
            PlayerProfile::firstOrCreate(
                ['user_id' => $player3->id],
                [
                    'skill_rating' => '4.0',
                    'milestone_points' => 410,
                    'preferred_hand' => 'Right',
                ]
            );
        }
    }
}
