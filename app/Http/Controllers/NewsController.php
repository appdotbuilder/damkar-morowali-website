<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\NewsArticle;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of news articles.
     */
    public function index(Request $request)
    {
        $articles = NewsArticle::query()
            ->published()
            ->when($request->get('type'), function ($query, $type) {
                return $query->where('type', $type);
            })
            ->when($request->get('category'), function ($query, $category) {
                return $query->where('category', $category);
            })
            ->when($request->get('search'), function ($query, $search) {
                return $query->where(function ($q) use ($search) {
                    $q->where('title', 'like', "%{$search}%")
                      ->orWhere('excerpt', 'like', "%{$search}%")
                      ->orWhere('content', 'like', "%{$search}%");
                });
            })
            ->orderBy('published_at', 'desc')
            ->paginate(12)
            ->withQueryString();

        $featuredArticles = NewsArticle::published()
            ->featured()
            ->orderBy('published_at', 'desc')
            ->limit(3)
            ->get();

        $categories = NewsArticle::published()
            ->whereNotNull('category')
            ->distinct()
            ->pluck('category')
            ->filter();

        return Inertia::render('news/index', [
            'articles' => $articles,
            'featuredArticles' => $featuredArticles,
            'categories' => $categories,
            'filters' => $request->only(['type', 'category', 'search']),
        ]);
    }

    /**
     * Display the specified news article.
     */
    public function show(string $slug)
    {
        $article = NewsArticle::where('slug', $slug)
            ->published()
            ->firstOrFail();

        // Increment view count
        $article->incrementViews();

        // Get related articles
        $relatedArticles = NewsArticle::published()
            ->where('id', '!=', $article->id)
            ->where(function ($query) use ($article) {
                $query->where('category', $article->category)
                      ->orWhere('type', $article->type);
            })
            ->orderBy('published_at', 'desc')
            ->limit(3)
            ->get();

        return Inertia::render('news/show', [
            'article' => $article->load(['author', 'editor']),
            'relatedArticles' => $relatedArticles,
        ]);
    }
}