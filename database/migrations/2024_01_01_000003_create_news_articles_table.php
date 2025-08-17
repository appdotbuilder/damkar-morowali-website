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
        Schema::create('news_articles', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('Article title');
            $table->string('slug')->unique()->comment('URL-friendly slug');
            $table->text('excerpt')->nullable()->comment('Brief article summary');
            $table->longText('content')->comment('Full article content');
            $table->string('featured_image')->nullable()->comment('Featured image path');
            $table->enum('type', ['news', 'press_release', 'announcement', 'education'])
                ->default('news')->comment('Article type');
            $table->enum('status', ['draft', 'under_review', 'published', 'archived'])
                ->default('draft')->comment('Publication status');
            $table->timestamp('published_at')->nullable()->comment('Publication date');
            $table->boolean('is_featured')->default(false)->comment('Whether article is featured');
            $table->json('tags')->nullable()->comment('Article tags');
            $table->string('category')->nullable()->comment('Article category');
            $table->integer('views')->default(0)->comment('View count');
            $table->foreignId('author_id')->constrained('users');
            $table->foreignId('editor_id')->nullable()->constrained('users');
            $table->text('meta_description')->nullable()->comment('SEO meta description');
            $table->string('meta_keywords')->nullable()->comment('SEO meta keywords');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('slug');
            $table->index('type');
            $table->index('status');
            $table->index('published_at');
            $table->index('category');
            $table->index('is_featured');
            $table->index(['status', 'published_at']);
            $table->index(['type', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news_articles');
    }
};