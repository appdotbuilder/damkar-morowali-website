<?php

use App\Http\Controllers\FireIncidentController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PublicServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Home page
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Public routes
Route::get('/tentang', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/kontak', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/galeri', function () {
    return Inertia::render('gallery');
})->name('gallery');

// Public Services
Route::controller(PublicServiceController::class)->group(function () {
    Route::get('/layanan', 'index')->name('services.index');
    Route::get('/layanan/buat', 'create')->name('services.create');
    Route::post('/layanan', 'store')->name('services.store');
    Route::get('/layanan/{ticketNumber}', 'show')->name('services.show');
});

// News & Articles
Route::controller(NewsController::class)->group(function () {
    Route::get('/berita', 'index')->name('news.index');
    Route::get('/berita/{slug}', 'show')->name('news.show');
});

// Fire Incidents (Data & Statistics)
Route::controller(FireIncidentController::class)->group(function () {
    Route::get('/data-statistik', 'index')->name('incidents.index');
    Route::get('/insiden/{incident}', 'show')->name('incidents.show');
});

// Static pages
Route::get('/keselamatan-kebakaran', function () {
    return Inertia::render('fire-safety');
})->name('fire-safety');

Route::get('/regulasi', function () {
    return Inertia::render('regulations');
})->name('regulations');

Route::get('/ppid', function () {
    return Inertia::render('ppid');
})->name('ppid');

// Admin routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
