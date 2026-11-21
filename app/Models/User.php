<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Laravel\Fortify\Contracts\PasskeyUser;
use Laravel\Fortify\PasskeyAuthenticatable;
use Laravel\Fortify\TwoFactorAuthenticatable;

/**
 * @property int $id
 * @property string|null $fname
 * @property string|null $mname
 * @property string|null $lname
 * @property string|null $sex
 * @property string $name
 * @property string $email
 * @property string $role
 * @property string $active_role
 * @property bool $can_organize
 * @property bool $can_play
 * @property string $subscription_type
 * @property string $subscription_status
 * @property Carbon|null $trial_ends_at
 * @property Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $two_factor_secret
 * @property string|null $two_factor_recovery_codes
 * @property Carbon|null $two_factor_confirmed_at
 * @property string|null $remember_token
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 */
#[Fillable([
    'fname',
    'mname',
    'lname',
    'sex',
    'name',
    'email',
    'password',
    'role',
    'active_role',
    'can_organize',
    'can_play',
    'subscription_type',
    'subscription_status',
    'trial_ends_at',
])]
#[Hidden(['password', 'two_factor_secret', 'two_factor_recovery_codes', 'remember_token'])]

class User extends Authenticatable implements MustVerifyEmail, PasskeyUser
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable, PasskeyAuthenticatable, TwoFactorAuthenticatable;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'two_factor_confirmed_at' => 'datetime',
            'trial_ends_at' => 'datetime',
            'can_organize' => 'boolean',
            'can_play' => 'boolean',
        ];
    }

    public function getNameAttribute(?string $value): string
    {
        if (! empty($value)) {
            return $value;
        }

        $full = trim("{$this->fname} {$this->mname} {$this->lname}");

        return ! empty($full) ? $full : ($this->email ?? 'User');
    }

    public function playerProfile(): HasOne
    {
        return $this->hasOne(PlayerProfile::class);
    }

    public function organizerProfile(): HasOne
    {
        return $this->hasOne(OrganizerProfile::class);
    }

    public function isOrganizer(): bool
    {
        return in_array($this->role, ['org', 'organizer']) || $this->can_organize;
    }

    public function isPlayer(): bool
    {
        return $this->role === 'player' || $this->can_play;
    }

    public function isAdmin(): bool
    {
        return $this->role === 'admin';
    }
}
