<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('auth/register');
    }

    /**
     * Handle an incoming registration request.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'fname' => ['required', 'string', 'max:255'],
            'mname' => ['nullable', 'string', 'max:255'],
            'lname' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'confirmed', Password::defaults()],
            'role' => ['required', 'string', 'in:player,organizer'],
            'organization_name' => ['required_if:role,organizer', 'nullable', 'string', 'max:255'],
            'city' => ['nullable', 'string', 'max:255'],
            'skill_rating' => ['nullable', 'string', 'max:20'],
        ], [
            'fname.required' => 'First name is required.',
            'lname.required' => 'Last name is required.',
            'organization_name.required_if' => 'Organization or club name is required for tournament organizers.',
        ]);

        $user = DB::transaction(function () use ($request) {
            $isOrganizer = $request->role === 'organizer';
            $fullName = trim("{$request->fname} {$request->mname} {$request->lname}");

            $user = User::create([
                'fname' => $request->fname,
                'mname' => $request->mname,
                'lname' => $request->lname,
                'name' => $fullName,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role' => $isOrganizer ? 'org' : 'player',
                'active_role' => $isOrganizer ? 'organizer' : 'player',
                'can_organize' => $isOrganizer,
                'can_play' => true,
                'subscription_type' => $isOrganizer ? 'pro' : 'free',
                'subscription_status' => $isOrganizer ? 'trialing' : 'active',
                'trial_ends_at' => $isOrganizer ? now()->addDays(14) : null,
            ]);

            if ($isOrganizer) {
                $user->organizerProfile()->create([
                    'organization_name' => $request->organization_name ?? 'My Club',
                    'city' => $request->city,
                    'verified_status' => 'active',
                ]);

                // Organizers can also play in tournaments
                $user->playerProfile()->create([
                    'skill_rating' => $request->skill_rating ?? '3.5',
                    'milestone_points' => 0,
                ]);
            } else {
                $user->playerProfile()->create([
                    'skill_rating' => $request->skill_rating ?? '3.0',
                    'milestone_points' => 0,
                ]);
            }

            return $user;
        });

        Auth::login($user);

        $request->session()->regenerate();

        return redirect()->route('dashboard');
    }
}
