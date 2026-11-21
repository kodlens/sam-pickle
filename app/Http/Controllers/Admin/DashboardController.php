<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\OrganizerProfile;
use App\Models\PlayerProfile;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('admin/dashboard', [
            'metrics' => [
                'totalUsers' => User::count(),
                'totalOrganizers' => OrganizerProfile::count(),
                'totalPlayers' => PlayerProfile::count(),
                'activeTournaments' => 12,
            ],
        ]);
    }
}
