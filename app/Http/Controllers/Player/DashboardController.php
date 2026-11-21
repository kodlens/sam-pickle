<?php

namespace App\Http\Controllers\Player;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $user = $request->user();
        $playerProfile = $user->playerProfile;

        return Inertia::render('player/dashboard', [
            'profile' => $playerProfile,
            'stats' => [
                'matchesPlayed' => 18,
                'winRate' => '67%',
                'milestoneLevel' => 'Silver Dink II',
                'badgesUnlocked' => 5,
            ],
        ]);
    }
}
