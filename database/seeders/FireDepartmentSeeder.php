<?php

namespace Database\Seeders;

use App\Models\FireIncident;
use App\Models\NewsArticle;
use App\Models\User;
use Illuminate\Database\Seeder;

class FireDepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create admin users
        $admin = User::factory()->create([
            'name' => 'Administrator',
            'email' => 'admin@damkarmorowali.go.id',
        ]);

        $author = User::factory()->create([
            'name' => 'Humas Damkar',
            'email' => 'humas@damkarmorowali.go.id',
        ]);

        $editor = User::factory()->create([
            'name' => 'Editor Konten',
            'email' => 'editor@damkarmorowali.go.id',
        ]);

        // Create fire incidents
        $this->command->info('Creating fire incidents...');
        
        // Create some recent active incidents
        FireIncident::factory(5)->active()->create();
        
        // Create completed incidents
        FireIncident::factory(50)->completed()->create();
        
        // Create some critical incidents
        FireIncident::factory(8)->critical()->create();

        // Create news articles
        $this->command->info('Creating news articles...');
        
        // Create featured articles
        NewsArticle::factory(5)
            ->featured()
            ->published()
            ->create([
                'author_id' => $author->id,
                'editor_id' => $editor->id,
            ]);

        // Create regular news articles
        NewsArticle::factory(25)
            ->published()
            ->create([
                'author_id' => $author->id,
                'editor_id' => $editor->id,
            ]);

        // Create press releases
        NewsArticle::factory(10)
            ->pressRelease()
            ->published()
            ->create([
                'author_id' => $author->id,
                'editor_id' => $editor->id,
            ]);

        // Create educational articles
        NewsArticle::factory(15)
            ->educational()
            ->published()
            ->create([
                'author_id' => $author->id,
                'editor_id' => $editor->id,
            ]);

        // Create some draft articles
        NewsArticle::factory(8)
            ->state(['status' => 'draft'])
            ->create([
                'author_id' => $author->id,
            ]);

        $this->command->info('Fire department sample data created successfully!');
    }
}