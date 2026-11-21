<?php

namespace App\Actions\Fortify;

use App\Concerns\PasswordValidationRules;
use App\Concerns\ProfileValidationRules;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules, ProfileValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, mixed>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            ...$this->profileRules(),
            'password' => $this->passwordRules(),
            'role' => ['required', 'string', 'in:player,organizer'],
            'organization_name' => ['required_if:role,organizer', 'nullable', 'string', 'max:255'],
            'city' => ['nullable', 'string', 'max:255'],
            'skill_rating' => ['nullable', 'string', 'max:20'],
        ], [
            'organization_name.required_if' => 'The organization / club name is required for tournament organizers.',
        ])->validate();

        return DB::transaction(function () use ($input) {
            $isOrganizer = ($input['role'] ?? 'player') === 'organizer';

            $user = User::create([
                'name' => $input['name'],
                'email' => $input['email'],
                'password' => $input['password'],
                'role' => $isOrganizer ? 'organizer' : 'player',
                'active_role' => $isOrganizer ? 'organizer' : 'player',
                'can_organize' => $isOrganizer,
                'can_play' => true,
                'subscription_type' => $isOrganizer ? 'pro' : 'free',
                'subscription_status' => $isOrganizer ? 'trialing' : 'active',
                'trial_ends_at' => $isOrganizer ? now()->addDays(14) : null,
            ]);

            if ($isOrganizer) {
                $user->organizerProfile()->create([
                    'organization_name' => $input['organization_name'] ?? 'My Club',
                    'city' => $input['city'] ?? null,
                    'contact_number' => $input['contact_number'] ?? null,
                    'verified_status' => 'active',
                ]);

                // Also initialize player profile so organizer can join games anytime!
                $user->playerProfile()->create([
                    'skill_rating' => $input['skill_rating'] ?? '3.5',
                    'milestone_points' => 0,
                ]);
            } else {
                $user->playerProfile()->create([
                    'skill_rating' => $input['skill_rating'] ?? '3.0',
                    'milestone_points' => 0,
                ]);
            }

            return $user;
        });
    }
}
