<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('role')->default('player')->after('email');
            $table->string('active_role')->default('player')->after('role');
            $table->boolean('can_organize')->default(false)->after('active_role');
            $table->boolean('can_play')->default(true)->after('can_organize');
            $table->string('subscription_type')->default('free')->after('can_play');
            $table->string('subscription_status')->default('active')->after('subscription_type');
            $table->timestamp('trial_ends_at')->nullable()->after('subscription_status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'role',
                'active_role',
                'can_organize',
                'can_play',
                'subscription_type',
                'subscription_status',
                'trial_ends_at',
            ]);
        });
    }
};
