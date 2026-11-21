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
        Schema::create('player_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('skill_rating')->default('3.0');
            $table->string('dupr_id')->nullable();
            $table->unsignedInteger('milestone_points')->default(0);
            $table->string('preferred_hand')->nullable();
            $table->json('badges')->nullable();
            $table->timestamps();
        });

        Schema::create('organizer_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('organization_name');
            $table->string('city')->nullable();
            $table->string('contact_number')->nullable();
            $table->string('verified_status')->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organizer_profiles');
        Schema::dropIfExists('player_profiles');
    }
};
