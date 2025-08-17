<?php

namespace Database\Factories;

use App\Models\FireIncident;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FireIncident>
 */
class FireIncidentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\FireIncident>
     */
    protected $model = FireIncident::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = ['fire', 'gas_leak', 'rescue', 'medical', 'hazmat'];
        $statuses = ['reported', 'responding', 'on_scene', 'controlled', 'completed', 'cancelled'];
        $severities = ['low', 'medium', 'high', 'critical'];
        
        $reportedAt = $this->faker->dateTimeBetween('-6 months', 'now');
        $respondedAt = null;
        $arrivedAt = null;
        $controlledAt = null;
        $completedAt = null;
        $responseTimeMinutes = null;
        
        $status = $this->faker->randomElement($statuses);
        
        if (in_array($status, ['responding', 'on_scene', 'controlled', 'completed'])) {
            $respondedAt = Carbon::instance($reportedAt)->addMinutes(random_int(1, 10));
            $responseTimeMinutes = random_int(1, 10);
        }
        
        if (in_array($status, ['on_scene', 'controlled', 'completed'])) {
            $arrivedAt = $respondedAt->copy()->addMinutes(random_int(5, 25));
            $responseTimeMinutes += random_int(5, 25);
        }
        
        if (in_array($status, ['controlled', 'completed'])) {
            $controlledAt = $arrivedAt->copy()->addMinutes(random_int(10, 120));
        }
        
        if ($status === 'completed') {
            $completedAt = $controlledAt->copy()->addMinutes(random_int(10, 60));
        }

        $locations = [
            'Jl. Merdeka No. 45, Kolonodale',
            'Pasar Sentral Kolonodale',
            'Jl. Trans Sulawesi KM 12',
            'Kompleks Perkantoran Pemda',
            'SMPN 1 Kolonodale',
            'Rumah Sakit Umum Morowali',
            'Terminal Angkutan Kolonodale',
            'Jl. Diponegoro No. 23',
            'Kawasan Industri Petasia',
            'Pelabuhan Kolonodale'
        ];

        return [
            'incident_number' => 'INC-' . date('ymd', $reportedAt->getTimestamp()) . '-' . str_pad((string)$this->faker->unique()->numberBetween(1, 9999), 4, '0', STR_PAD_LEFT),
            'type' => $this->faker->randomElement($types),
            'title' => $this->generateTitle(),
            'description' => $this->faker->paragraph(3),
            'location' => $this->faker->randomElement($locations),
            'latitude' => $this->faker->latitude(-2.5, -1.5),
            'longitude' => $this->faker->longitude(121.0, 122.5),
            'status' => $status,
            'severity' => $this->faker->randomElement($severities),
            'reported_at' => $reportedAt,
            'responded_at' => $respondedAt,
            'arrived_at' => $arrivedAt,
            'controlled_at' => $controlledAt,
            'completed_at' => $completedAt,
            'response_time_minutes' => $responseTimeMinutes,
            'units_deployed' => random_int(1, 4),
            'personnel_count' => random_int(4, 20),
            'cause' => $this->faker->optional(0.7)->randomElement([
                'Korsleting listrik',
                'Kebocoran gas',
                'Rokok yang tidak dimatikan',
                'Kompor gas meledak',
                'Sambaran petir',
                'Bakar sampah tidak terkendali',
                'Kontak listrik',
                'Bahan kimia',
                'Tidak diketahui'
            ]),
            'damage_estimate' => $this->faker->optional(0.6)->randomFloat(2, 1000000, 500000000),
            'casualties' => $this->faker->numberBetween(0, 5),
            'fatalities' => $this->faker->numberBetween(0, 2),
            'notes' => $this->faker->optional(0.5)->paragraph(),
        ];
    }

    /**
     * Generate incident title based on type.
     */
    protected function generateTitle(): string
    {
        $titles = [
            'fire' => [
                'Kebakaran Rumah Tinggal',
                'Kebakaran Toko',
                'Kebakaran Pabrik',
                'Kebakaran Lahan',
                'Kebakaran Kendaraan',
                'Kebakaran Gudang'
            ],
            'gas_leak' => [
                'Kebocoran Gas LPG',
                'Kebocoran Gas Industri',
                'Kebocoran Pipa Gas'
            ],
            'rescue' => [
                'Penyelamatan dari Ketinggian',
                'Evakuasi Korban Kecelakaan',
                'Penyelamatan dari Reruntuhan',
                'Penyelamatan Hewan'
            ],
            'medical' => [
                'Bantuan Medis Darurat',
                'Evakuasi Pasien',
                'Pertolongan Pertama'
            ],
            'hazmat' => [
                'Tumpahan Bahan Kimia',
                'Kebocoran Bahan Berbahaya',
                'Kontaminasi Lingkungan'
            ]
        ];

        $type = $this->faker->randomElement(array_keys($titles));
        return $this->faker->randomElement($titles[$type]);
    }

    /**
     * Indicate that the incident is active.
     */
    public function active(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => $this->faker->randomElement(['reported', 'responding', 'on_scene']),
        ]);
    }

    /**
     * Indicate that the incident is completed.
     */
    public function completed(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'completed',
        ]);
    }

    /**
     * Indicate that the incident is critical.
     */
    public function critical(): static
    {
        return $this->state(fn (array $attributes) => [
            'severity' => 'critical',
        ]);
    }
}