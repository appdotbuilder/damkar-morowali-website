<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\FireIncident
 *
 * @property int $id
 * @property string $incident_number
 * @property string $type
 * @property string $title
 * @property string|null $description
 * @property string $location
 * @property float|null $latitude
 * @property float|null $longitude
 * @property string $status
 * @property string $severity
 * @property \Illuminate\Support\Carbon $reported_at
 * @property \Illuminate\Support\Carbon|null $responded_at
 * @property \Illuminate\Support\Carbon|null $arrived_at
 * @property \Illuminate\Support\Carbon|null $controlled_at
 * @property \Illuminate\Support\Carbon|null $completed_at
 * @property int|null $response_time_minutes
 * @property int $units_deployed
 * @property int $personnel_count
 * @property string|null $cause
 * @property float|null $damage_estimate
 * @property int $casualties
 * @property int $fatalities
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder|FireIncident newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|FireIncident newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|FireIncident query()
 * @method static \Illuminate\Database\Eloquent\Builder|FireIncident whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FireIncident whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FireIncident whereSeverity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FireIncident recent()
 * @method static \Illuminate\Database\Eloquent\Builder|FireIncident active()
 * @method static \Database\Factories\FireIncidentFactory factory($count = null, $state = [])
 *
 * @mixin \Eloquent
 */
class FireIncident extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'incident_number',
        'type',
        'title',
        'description',
        'location',
        'latitude',
        'longitude',
        'status',
        'severity',
        'reported_at',
        'responded_at',
        'arrived_at',
        'controlled_at',
        'completed_at',
        'response_time_minutes',
        'units_deployed',
        'personnel_count',
        'cause',
        'damage_estimate',
        'casualties',
        'fatalities',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'reported_at' => 'datetime',
        'responded_at' => 'datetime',
        'arrived_at' => 'datetime',
        'controlled_at' => 'datetime',
        'completed_at' => 'datetime',
        'latitude' => 'decimal:8',
        'longitude' => 'decimal:8',
        'damage_estimate' => 'decimal:2',
        'units_deployed' => 'integer',
        'personnel_count' => 'integer',
        'response_time_minutes' => 'integer',
        'casualties' => 'integer',
        'fatalities' => 'integer',
    ];

    /**
     * Scope a query to only include recent incidents.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeRecent($query)
    {
        return $query->orderBy('reported_at', 'desc');
    }

    /**
     * Scope a query to only include active incidents.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->whereIn('status', ['reported', 'responding', 'on_scene']);
    }

    /**
     * Get the incident type in a human-readable format.
     */
    public function getTypeDisplayAttribute(): string
    {
        return match($this->type) {
            'fire' => 'Kebakaran',
            'gas_leak' => 'Kebocoran Gas',
            'rescue' => 'Penyelamatan',
            'medical' => 'Medis',
            'hazmat' => 'Bahan Berbahaya',
            default => ucwords(str_replace('_', ' ', $this->type))
        };
    }

    /**
     * Get the incident status in a human-readable format.
     */
    public function getStatusDisplayAttribute(): string
    {
        return match($this->status) {
            'reported' => 'Dilaporkan',
            'responding' => 'Merespon',
            'on_scene' => 'Di TKP',
            'controlled' => 'Terkendali',
            'completed' => 'Selesai',
            'cancelled' => 'Dibatalkan',
            default => ucwords(str_replace('_', ' ', $this->status))
        };
    }
}