<?php

namespace App\Http\Controllers\Organizer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $user = $request->user();
        $organizerProfile = $user->organizerProfile;

        return Inertia::render('organizer/dashboard', [
            'organization' => $organizerProfile,
            'stats' => [
                'activeTournaments' => 2,
                'totalTeams' => 38,
                'assignedCourts' => 6,
                'completedMatches' => 24,
            ],
        ]);
    }
}
