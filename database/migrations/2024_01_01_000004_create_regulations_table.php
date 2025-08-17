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
        Schema::create('regulations', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('Regulation title');
            $table->string('slug')->unique()->comment('URL-friendly slug');
            $table->string('regulation_number')->nullable()->comment('Official regulation number');
            $table->enum('type', ['perda', 'perbup', 'sop', 'guideline', 'manual'])
                ->comment('Type of regulation document');
            $table->text('description')->nullable()->comment('Regulation description');
            $table->longText('content')->comment('Full regulation content');
            $table->string('document_file')->nullable()->comment('PDF file path');
            $table->enum('status', ['draft', 'active', 'superseded', 'archived'])
                ->default('draft')->comment('Regulation status');
            $table->date('effective_date')->nullable()->comment('When regulation becomes effective');
            $table->date('superseded_date')->nullable()->comment('When regulation was superseded');
            $table->string('category')->comment('Regulation category');
            $table->json('tags')->nullable()->comment('Regulation tags');
            $table->foreignId('created_by')->constrained('users');
            $table->foreignId('approved_by')->nullable()->constrained('users');
            $table->timestamp('approved_at')->nullable()->comment('When regulation was approved');
            $table->integer('version')->default(1)->comment('Regulation version number');
            $table->foreignId('supersedes_id')->nullable()->constrained('regulations');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('slug');
            $table->index('regulation_number');
            $table->index('type');
            $table->index('status');
            $table->index('category');
            $table->index('effective_date');
            $table->index(['type', 'status']);
            $table->index(['category', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('regulations');
    }
};