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
        Schema::create('ppid_requests', function (Blueprint $table) {
            $table->id();
            $table->string('request_number')->unique()->comment('Unique PPID request identifier');
            $table->string('requester_name')->comment('Name of information requester');
            $table->string('requester_email')->comment('Email address of requester');
            $table->string('requester_phone')->comment('Phone number of requester');
            $table->text('requester_address')->comment('Requester address');
            $table->string('identity_type')->comment('Type of identity document');
            $table->string('identity_number')->comment('Identity document number');
            $table->string('identity_file')->nullable()->comment('Identity document file path');
            $table->text('information_requested')->comment('Detailed information being requested');
            $table->text('purpose')->comment('Purpose of information request');
            $table->enum('classification', ['public', 'excluded', 'confidential'])
                ->nullable()->comment('Information classification');
            $table->enum('status', ['submitted', 'under_review', 'approved', 'partially_approved', 'rejected', 'completed'])
                ->default('submitted')->comment('Request status');
            $table->enum('decision', ['granted', 'partially_granted', 'denied', 'pending'])
                ->nullable()->comment('Final decision on request');
            $table->text('decision_reason')->nullable()->comment('Reason for decision');
            $table->date('decision_date')->nullable()->comment('Date decision was made');
            $table->string('response_file')->nullable()->comment('Response document file path');
            $table->foreignId('assigned_to')->nullable()->constrained('users');
            $table->text('staff_notes')->nullable()->comment('Internal processing notes');
            $table->integer('processing_days')->nullable()->comment('Days taken to process request');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('request_number');
            $table->index('requester_email');
            $table->index('status');
            $table->index('classification');
            $table->index('decision');
            $table->index('assigned_to');
            $table->index('decision_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ppid_requests');
    }
};