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
        Schema::create('fire_incidents', function (Blueprint $table) {
            $table->id();
            $table->string('incident_number')->unique()->comment('Unique incident identifier');
            $table->string('type')->comment('Type of incident (fire, gas_leak, rescue, etc.)');
            $table->string('title')->comment('Brief incident title');
            $table->text('description')->nullable()->comment('Detailed incident description');
            $table->string('location')->comment('Incident location address');
            $table->decimal('latitude', 10, 8)->nullable()->comment('GPS latitude');
            $table->decimal('longitude', 11, 8)->nullable()->comment('GPS longitude');
            $table->enum('status', ['reported', 'responding', 'on_scene', 'controlled', 'completed', 'cancelled'])
                ->default('reported')->comment('Current incident status');
            $table->enum('severity', ['low', 'medium', 'high', 'critical'])
                ->default('medium')->comment('Incident severity level');
            $table->timestamp('reported_at')->comment('When incident was first reported');
            $table->timestamp('responded_at')->nullable()->comment('When units were dispatched');
            $table->timestamp('arrived_at')->nullable()->comment('When first unit arrived on scene');
            $table->timestamp('controlled_at')->nullable()->comment('When incident was brought under control');
            $table->timestamp('completed_at')->nullable()->comment('When incident was fully resolved');
            $table->integer('response_time_minutes')->nullable()->comment('Response time in minutes');
            $table->integer('units_deployed')->default(1)->comment('Number of fire units deployed');
            $table->integer('personnel_count')->default(0)->comment('Number of personnel involved');
            $table->text('cause')->nullable()->comment('Determined or suspected cause');
            $table->decimal('damage_estimate', 12, 2)->nullable()->comment('Estimated damage in IDR');
            $table->integer('casualties')->default(0)->comment('Number of casualties');
            $table->integer('fatalities')->default(0)->comment('Number of fatalities');
            $table->text('notes')->nullable()->comment('Additional notes and observations');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('incident_number');
            $table->index('type');
            $table->index('status');
            $table->index('severity');
            $table->index('reported_at');
            $table->index(['type', 'status']);
            $table->index(['reported_at', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fire_incidents');
    }
};