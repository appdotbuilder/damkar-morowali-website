<?php

namespace Database\Factories;

use App\Models\NewsArticle;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\NewsArticle>
 */
class NewsArticleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\NewsArticle>
     */
    protected $model = NewsArticle::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->generateTitle();
        $slug = Str::slug($title);
        $publishedAt = $this->faker->dateTimeBetween('-6 months', 'now');

        return [
            'title' => $title,
            'slug' => $slug,
            'excerpt' => $this->faker->paragraph(2),
            'content' => $this->generateContent(),
            'featured_image' => null,
            'type' => $this->faker->randomElement(['news', 'press_release', 'announcement', 'education']),
            'status' => $this->faker->randomElement(['published', 'published', 'published', 'draft']), // More published articles
            'published_at' => $publishedAt,
            'is_featured' => $this->faker->boolean(20), // 20% chance of being featured
            'tags' => $this->generateTags(),
            'category' => $this->faker->randomElement([
                'Kegiatan', 
                'Edukasi', 
                'Pelatihan', 
                'Sosialisasi', 
                'Operasional',
                'Kerjasama',
                'Pengumuman'
            ]),
            'views' => $this->faker->numberBetween(10, 1000),
            'author_id' => User::factory(),
            'editor_id' => $this->faker->boolean(70) ? User::factory() : null,
            'meta_description' => $this->faker->sentence(15),
            'meta_keywords' => implode(', ', $this->faker->words(8)),
        ];
    }

    /**
     * Generate article title.
     */
    protected function generateTitle(): string
    {
        $titles = [
            'Sosialisasi Pencegahan Kebakaran di Sekolah',
            'Pelatihan Petugas Pemadam Kebakaran Tingkat Dasar',
            'Pemeriksaan Fasilitas Proteksi Kebakaran di Gedung Perkantoran',
            'Simulasi Evakuasi Darurat di Rumah Sakit',
            'Kampanye Kesadaran Keselamatan Kebakaran di Pasar Tradisional',
            'Pelatihan Penggunaan APAR untuk Masyarakat',
            'Kerjasama dengan PMI dalam Penanganan Darurat',
            'Inspeksi Berkala Sistem Sprinkler di Mall',
            'Program Sekolah Siaga Kebakaran',
            'Workshop Safety Riding untuk Petugas Damkar',
            'Gladi Bersih Penanggulangan Bencana Kabupaten',
            'Pembaruan Standar Operasional Prosedur',
            'Pengadaan Peralatan Pemadam Kebakaran Modern',
            'Pelatihan Penyelamatan di Ketinggian',
            'Sosialisasi Peraturan Proteksi Kebakaran Terbaru',
            'Pemeriksaan Kelaikan Kendaraan Pemadam Kebakaran',
            'Program Desa Siaga Kebakaran',
            'Pelatihan First Aid untuk Petugas Lapangan',
            'Kampanye Anti Membakar Sampah Sembarangan',
            'Simulasi Penanganan Kebocoran Gas di Permukiman'
        ];

        return $this->faker->randomElement($titles);
    }

    /**
     * Generate article content.
     */
    protected function generateContent(): string
    {
        $paragraphs = [];
        $paragraphCount = random_int(5, 12);

        // Opening paragraph
        $paragraphs[] = $this->faker->paragraph(4);

        // Body paragraphs
        for ($i = 0; $i < $paragraphCount - 2; $i++) {
            $paragraphs[] = $this->faker->paragraph(random_int(3, 6));
        }

        // Closing paragraph
        $paragraphs[] = $this->faker->paragraph(3);

        return implode("\n\n", $paragraphs);
    }

    /**
     * Generate tags for the article.
     */
    protected function generateTags(): array
    {
        $allTags = [
            'kebakaran', 'pencegahan', 'edukasi', 'simulasi', 'pelatihan',
            'sosialisasi', 'keselamatan', 'APAR', 'sprinkler', 'evakuasi',
            'darurat', 'proteksi', 'inspeksi', 'kerjasama', 'masyarakat',
            'sekolah', 'perkantoran', 'rumah-sakit', 'pasar', 'mall',
            'permukiman', 'industri', 'SOP', 'peralatan', 'kendaraan'
        ];

        $selectedTags = $this->faker->randomElements($allTags, random_int(3, 6));
        return array_values($selectedTags);
    }

    /**
     * Indicate that the article is published.
     */
    public function published(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'published',
            'published_at' => $this->faker->dateTimeBetween('-3 months', 'now'),
        ]);
    }

    /**
     * Indicate that the article is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
        ]);
    }

    /**
     * Indicate that the article is a press release.
     */
    public function pressRelease(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'press_release',
        ]);
    }

    /**
     * Indicate that the article is educational.
     */
    public function educational(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'education',
        ]);
    }
}