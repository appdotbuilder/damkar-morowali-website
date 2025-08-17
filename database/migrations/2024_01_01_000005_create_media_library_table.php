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
        Schema::create('media_library', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('Media title');
            $table->text('description')->nullable()->comment('Media description');
            $table->string('filename')->comment('Original filename');
            $table->string('filepath')->comment('File storage path');
            $table->string('mime_type')->comment('File MIME type');
            $table->integer('file_size')->comment('File size in bytes');
            $table->enum('type', ['image', 'video', 'document', 'audio'])
                ->comment('Media type');
            $table->string('category')->nullable()->comment('Media category');
            $table->json('tags')->nullable()->comment('Media tags');
            $table->json('metadata')->nullable()->comment('Additional metadata (dimensions, duration, etc.)');
            $table->string('alt_text')->nullable()->comment('Alternative text for accessibility');
            $table->boolean('is_public')->default(true)->comment('Whether media is publicly accessible');
            $table->foreignId('uploaded_by')->constrained('users');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('type');
            $table->index('category');
            $table->index('mime_type');
            $table->index('is_public');
            $table->index('uploaded_by');
            $table->index(['type', 'category']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('media_library');
    }
};