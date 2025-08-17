<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePublicServiceRequestRequest;
use App\Models\PublicServiceRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicServiceController extends Controller
{
    /**
     * Display the public services page.
     */
    public function index()
    {
        return Inertia::render('services/index');
    }

    /**
     * Show the form for creating a new service request.
     */
    public function create(Request $request)
    {
        $type = $request->get('type', 'education');
        
        if (!in_array($type, ['education', 'fire_protection', 'complaint'])) {
            abort(404);
        }

        return Inertia::render('services/create', [
            'type' => $type,
        ]);
    }

    /**
     * Store a newly created service request.
     */
    public function store(StorePublicServiceRequestRequest $request)
    {
        $data = $request->validated();
        $data['ticket_number'] = PublicServiceRequest::generateTicketNumber($data['type']);

        $serviceRequest = PublicServiceRequest::create($data);

        return redirect()->route('services.show', $serviceRequest->ticket_number)
            ->with('success', 'Permohonan berhasil diajukan dengan nomor tiket: ' . $serviceRequest->ticket_number);
    }

    /**
     * Display the specified service request.
     */
    public function show(string $ticketNumber)
    {
        $request = PublicServiceRequest::where('ticket_number', $ticketNumber)->firstOrFail();

        return Inertia::render('services/show', [
            'request' => $request,
        ]);
    }


}