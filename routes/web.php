<?php

use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Organizer\DashboardController as OrganizerDashboardController;
use App\Http\Controllers\Player\DashboardController as PlayerDashboardController;
use App\Http\Controllers\RoleSwitchController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    // Traffic-cop redirect based on user's active role
    Route::get('/dashboard', function (Request $request) {
        $user = $request->user();

        $activeRole = $user->active_role ?? $user->role;

        return match ($activeRole) {
            'org', 'organizer' => redirect()->route('organizer.dashboard'),
            'admin' => redirect()->route('admin.dashboard'),
            default => redirect()->route('player.dashboard'),
        };
    })->name('dashboard');

    // Role switcher
    Route::post('/switch-role', RoleSwitchController::class)->name('role.switch');

    // Organizer module routes
    Route::prefix('organizer')->name('organizer.')->group(function () {
        Route::get('/dashboard', [OrganizerDashboardController::class, 'index'])->name('dashboard');
    });

    // Player module routes
    Route::prefix('player')->name('player.')->group(function () {
        Route::get('/dashboard', [PlayerDashboardController::class, 'index'])->name('dashboard');
    });

    // Admin module routes
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
    });
});

require __DIR__.'/settings.php';
