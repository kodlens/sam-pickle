<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class RoleSwitchController extends Controller
{
    public function __invoke(Request $request): RedirectResponse
    {
        $user = $request->user();

        $targetRole = $request->input('role');

        if (! in_array($targetRole, ['player', 'organizer', 'admin'])) {
            return back();
        }

        if ($targetRole === 'organizer' && ! $user->can_organize && $user->role !== 'admin') {
            return back()->with('error', 'You need an organizer account to access this portal.');
        }

        $user->update([
            'active_role' => $targetRole,
        ]);

        return match ($targetRole) {
            'organizer' => redirect()->route('organizer.dashboard'),
            'admin' => redirect()->route('admin.dashboard'),
            default => redirect()->route('player.dashboard'),
        };
    }
}
