<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\PublicServiceRequest
 *
 * @property int $id
 * @property string $ticket_number
 * @property string $type
 * @property string $title
 * @property string $description
 * @property string $status
 * @property string $priority
 * @property string $requester_name
 * @property string $requester_email
 * @property string $requester_phone
 * @property string|null $requester_organization
 * @property string $requester_address
 * @property array|null $service_data
 * @property string|null $requested_date
 * @property string|null $requested_time
 * @property string|null $scheduled_date
 * @property string|null $scheduled_time
 * @property int|null $assigned_to
 * @property string|null $staff_notes
 * @property string|null $public_response
 * @property \Illuminate\Support\Carbon|null $responded_at
 * @property \Illuminate\Support\Carbon|null $completed_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 *
 * @property-read \App\Models\User|null $assignedUser
 *
 * @method static \Illuminate\Database\Eloquent\Builder|PublicServiceRequest newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PublicServiceRequest newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PublicServiceRequest query()
 * @method static \Illuminate\Database\Eloquent\Builder|PublicServiceRequest whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PublicServiceRequest whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PublicServiceRequest pending()
 * @method static \Database\Factories\PublicServiceRequestFactory factory($count = null, $state = [])
 *
 * @mixin \Eloquent
 */
class PublicServiceRequest extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'ticket_number',
        'type',
        'title',
        'description',
        'status',
        'priority',
        'requester_name',
        'requester_email',
        'requester_phone',
        'requester_organization',
        'requester_address',
        'service_data',
        'requested_date',
        'requested_time',
        'scheduled_date',
        'scheduled_time',
        'assigned_to',
        'staff_notes',
        'public_response',
        'responded_at',
        'completed_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'service_data' => 'array',
        'requested_date' => 'date',
        'scheduled_date' => 'date',
        'responded_at' => 'datetime',
        'completed_at' => 'datetime',
    ];

    /**
     * Get the assigned user for this request.
     */
    public function assignedUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    /**
     * Scope a query to only include pending requests.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePending($query)
    {
        return $query->whereIn('status', ['submitted', 'under_review', 'in_progress']);
    }

    /**
     * Get the request type in a human-readable format.
     */
    public function getTypeDisplayAttribute(): string
    {
        return match($this->type) {
            'education' => 'Permohonan Edukasi/Simulasi',
            'fire_protection' => 'Rekomendasi Proteksi Kebakaran',
            'complaint' => 'Pengaduan Non-Darurat',
            'ppid' => 'Keterbukaan Informasi Publik',
            default => ucwords(str_replace('_', ' ', $this->type))
        };
    }

    /**
     * Get the request status in a human-readable format.
     */
    public function getStatusDisplayAttribute(): string
    {
        return match($this->status) {
            'submitted' => 'Diajukan',
            'under_review' => 'Dalam Peninjauan',
            'in_progress' => 'Sedang Diproses',
            'completed' => 'Selesai',
            'rejected' => 'Ditolak',
            default => ucwords(str_replace('_', ' ', $this->status))
        };
    }

    /**
     * Generate a unique ticket number.
     */
    public static function generateTicketNumber(string $type): string
    {
        $prefix = match($type) {
            'education' => 'EDU',
            'fire_protection' => 'FPR',
            'complaint' => 'COM',
            'ppid' => 'PPID',
            default => 'SVC'
        };
        
        $date = now()->format('ymd');
        $sequence = static::where('type', $type)
            ->whereDate('created_at', today())
            ->count() + 1;
        
        return sprintf('%s-%s-%04d', $prefix, $date, $sequence);
    }
}