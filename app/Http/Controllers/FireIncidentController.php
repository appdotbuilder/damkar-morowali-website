<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\FireIncident;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FireIncidentController extends Controller
{
    /**
     * Display a listing of fire incidents.
     */
    public function index(Request $request)
    {
        $incidents = FireIncident::query()
            ->when($request->get('type'), function ($query, $type) {
                return $query->where('type', $type);
            })
            ->when($request->get('status'), function ($query, $status) {
                return $query->where('status', $status);
            })
            ->when($request->get('search'), function ($query, $search) {
                return $query->where(function ($q) use ($search) {
                    $q->where('title', 'like', "%{$search}%")
                      ->orWhere('location', 'like', "%{$search}%")
                      ->orWhere('incident_number', 'like', "%{$search}%");
                });
            })
            ->recent()
            ->paginate(10)
            ->withQueryString();

        $stats = [
            'total_this_month' => FireIncident::whereMonth('reported_at', now()->month)->count(),
            'active_incidents' => FireIncident::active()->count(),
            'avg_response_time' => FireIncident::whereNotNull('response_time_minutes')
                ->whereMonth('reported_at', now()->month)
                ->avg('response_time_minutes'),
            'total_casualties' => FireIncident::whereMonth('reported_at', now()->month)
                ->sum('casualties'),
        ];

        return Inertia::render('incidents/index', [
            'incidents' => $incidents,
            'stats' => $stats,
            'filters' => $request->only(['type', 'status', 'search']),
        ]);
    }

    /**
     * Display the specified fire incident.
     */
    public function show(FireIncident $incident)
    {
        return Inertia::render('incidents/show', [
            'incident' => $incident,
        ]);
    }
}