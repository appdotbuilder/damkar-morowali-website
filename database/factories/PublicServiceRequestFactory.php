<?php

namespace Database\Factories;

use App\Models\PublicServiceRequest;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PublicServiceRequest>
 */
class PublicServiceRequestFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\PublicServiceRequest>
     */
    protected $model = PublicServiceRequest::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = ['education', 'fire_protection', 'complaint'];
        $type = $this->faker->randomElement($types);
        
        return [
            'ticket_number' => PublicServiceRequest::generateTicketNumber($type),
            'type' => $type,
            'title' => $this->faker->sentence(6),
            'description' => $this->faker->paragraph(3),
            'status' => $this->faker->randomElement(['submitted', 'under_review', 'in_progress', 'completed', 'rejected']),
            'priority' => $this->faker->randomElement(['low', 'medium', 'high', 'urgent']),
            'requester_name' => $this->faker->name(),
            'requester_email' => $this->faker->safeEmail(),
            'requester_phone' => $this->faker->phoneNumber(),
            'requester_organization' => $this->faker->optional()->company(),
            'requester_address' => $this->faker->address(),
            'service_data' => $this->generateServiceData($type),
            'requested_date' => $this->faker->optional()->dateTimeBetween('now', '+1 month'),
            'requested_time' => $this->faker->optional()->time(),
            'assigned_to' => $this->faker->optional()->randomElement([1, 2, 3]),
            'staff_notes' => $this->faker->optional()->paragraph(),
            'public_response' => $this->faker->optional()->paragraph(),
        ];
    }

    /**
     * Generate service-specific data based on type.
     */
    protected function generateServiceData(string $type): array
    {
        return match($type) {
            'education' => [
                'participants' => $this->faker->numberBetween(10, 100),
                'location' => $this->faker->randomElement(['Aula sekolah', 'Ruang kelas', 'Lapangan', 'Gedung serbaguna']),
            ],
            'fire_protection' => [
                'business_type' => $this->faker->randomElement(['Perkantoran', 'Mall', 'Pabrik', 'Rumah Sakit', 'Hotel']),
                'building_area' => $this->faker->numberBetween(100, 5000),
            ],
            default => [],
        };
    }
}