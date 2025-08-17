<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

/**
 * App\Models\NewsArticle
 *
 * @property int $id
 * @property string $title
 * @property string $slug
 * @property string|null $excerpt
 * @property string $content
 * @property string|null $featured_image
 * @property string $type
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $published_at
 * @property bool $is_featured
 * @property array|null $tags
 * @property string|null $category
 * @property int $views
 * @property int $author_id
 * @property int|null $editor_id
 * @property string|null $meta_description
 * @property string|null $meta_keywords
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 *
 * @property-read \App\Models\User $author
 * @property-read \App\Models\User|null $editor
 *
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle query()
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle published()
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle featured()
 * @method static \Database\Factories\NewsArticleFactory factory($count = null, $state = [])
 *
 * @mixin \Eloquent
 */
class NewsArticle extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'featured_image',
        'type',
        'status',
        'published_at',
        'is_featured',
        'tags',
        'category',
        'views',
        'author_id',
        'editor_id',
        'meta_description',
        'meta_keywords',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'published_at' => 'datetime',
        'is_featured' => 'boolean',
        'tags' => 'array',
        'views' => 'integer',
    ];

    /**
     * Get the author of the article.
     */
    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    /**
     * Get the editor of the article.
     */
    public function editor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'editor_id');
    }

    /**
     * Scope a query to only include published articles.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePublished($query)
    {
        return $query->where('status', 'published')
            ->where('published_at', '<=', now());
    }

    /**
     * Scope a query to only include featured articles.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    /**
     * Get the article type in a human-readable format.
     */
    public function getTypeDisplayAttribute(): string
    {
        return match($this->type) {
            'news' => 'Berita',
            'press_release' => 'Press Release',
            'announcement' => 'Pengumuman',
            'education' => 'Edukasi',
            default => ucwords(str_replace('_', ' ', $this->type))
        };
    }

    /**
     * Automatically generate slug when title is set.
     */
    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($article) {
            if (empty($article->slug)) {
                $article->slug = Str::slug($article->title);
                
                // Ensure slug is unique
                $count = static::where('slug', 'like', $article->slug . '%')->count();
                if ($count > 0) {
                    $article->slug = $article->slug . '-' . ($count + 1);
                }
            }
        });
    }

    /**
     * Increment the view count.
     */
    public function incrementViews(): void
    {
        $this->increment('views');
    }
}