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
        Schema::create('public_service_requests', function (Blueprint $table) {
            $table->id();
            $table->string('ticket_number')->unique()->comment('Unique ticket identifier');
            $table->enum('type', ['education', 'fire_protection', 'complaint', 'ppid'])
                ->comment('Type of service request');
            $table->string('title')->comment('Request title');
            $table->text('description')->comment('Detailed request description');
            $table->enum('status', ['submitted', 'under_review', 'in_progress', 'completed', 'rejected'])
                ->default('submitted')->comment('Current request status');
            $table->enum('priority', ['low', 'medium', 'high', 'urgent'])
                ->default('medium')->comment('Request priority level');
            
            // Requester information
            $table->string('requester_name')->comment('Name of person making request');
            $table->string('requester_email')->comment('Email address of requester');
            $table->string('requester_phone')->comment('Phone number of requester');
            $table->string('requester_organization')->nullable()->comment('Organization name if applicable');
            $table->text('requester_address')->comment('Requester address');
            
            // Service-specific data (JSON for flexibility)
            $table->json('service_data')->nullable()->comment('Service-specific structured data');
            
            // Scheduling information
            $table->date('requested_date')->nullable()->comment('Requested service date');
            $table->time('requested_time')->nullable()->comment('Requested service time');
            $table->date('scheduled_date')->nullable()->comment('Scheduled service date');
            $table->time('scheduled_time')->nullable()->comment('Scheduled service time');
            
            // Assignment and handling
            $table->foreignId('assigned_to')->nullable()->constrained('users');
            $table->text('staff_notes')->nullable()->comment('Internal staff notes');
            $table->text('public_response')->nullable()->comment('Public response message');
            $table->timestamp('responded_at')->nullable()->comment('When request was responded to');
            $table->timestamp('completed_at')->nullable()->comment('When request was completed');
            
            $table->timestamps();
            
            // Indexes for performance
            $table->index('ticket_number');
            $table->index('type');
            $table->index('status');
            $table->index('priority');
            $table->index('requester_email');
            $table->index('assigned_to');
            $table->index('requested_date');
            $table->index(['type', 'status']);
            $table->index(['status', 'priority']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('public_service_requests');
    }
};