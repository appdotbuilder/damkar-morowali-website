import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/icon';

export default function Welcome() {
    return (
        <AppShell>
            {/* Hero Section with Emergency Alert */}
            <div className="bg-gradient-to-r from-red-600 to-red-800 text-white">
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            🚒 DINAS PEMADAM KEBAKARAN
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                            KABUPATEN MOROWALI UTARA
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Melayani dengan Dedikasi untuk Keselamatan Masyarakat
                        </p>
                        
                        {/* Emergency Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <Button 
                                size="lg" 
                                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-8 py-4 animate-pulse"
                            >
                                🚨 DARURAT 113
                            </Button>
                            <Button 
                                size="lg" 
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-8 py-4"
                            >
                                📱 WhatsApp Emergency
                            </Button>
                        </div>
                        
                        {/* Alert Banner */}
                        <div className="bg-yellow-500 text-black rounded-lg p-4 mb-6">
                            <div className="flex items-center justify-center gap-2">
                                <Icon name="alert-triangle" className="h-5 w-5" />
                                <span className="font-semibold">PERINGATAN CUACA:</span>
                                <span>Musim kemarau - tingkatkan kewaspadaan kebakaran</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-blue-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="text-3xl font-bold">24/7</div>
                            <div className="text-sm opacity-75">Siaga Darurat</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">156</div>
                            <div className="text-sm opacity-75">Kejadian Bulan Ini</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">4.2min</div>
                            <div className="text-sm opacity-75">Rata-rata Respons</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">12</div>
                            <div className="text-sm opacity-75">Pos Pemadam</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Recent Incidents */}
                    <Card className="border-red-200">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-red-700">
                                <Icon name="flame" className="h-5 w-5" />
                                Kejadian Terkini
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="border-l-4 border-red-500 pl-4">
                                    <div className="font-semibold">Kebakaran Rumah</div>
                                    <div className="text-sm text-gray-600">Jl. Merdeka No. 45</div>
                                    <Badge variant="outline" className="mt-1">Selesai</Badge>
                                </div>
                                <div className="border-l-4 border-yellow-500 pl-4">
                                    <div className="font-semibold">Kebocoran Gas</div>
                                    <div className="text-sm text-gray-600">Pasar Sentral</div>
                                    <Badge variant="outline" className="mt-1">Dalam Penanganan</Badge>
                                </div>
                                <div className="border-l-4 border-green-500 pl-4">
                                    <div className="font-semibold">Simulasi Kebakaran</div>
                                    <div className="text-sm text-gray-600">SMPN 3 Morowali</div>
                                    <Badge variant="outline" className="mt-1">Terjadwal</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Public Services */}
                    <Card className="border-blue-200">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-blue-700">
                                <Icon name="users" className="h-5 w-5" />
                                Layanan Publik
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <Button 
                                    variant="outline" 
                                    className="w-full justify-start border-blue-200 hover:bg-blue-50"
                                >
                                    <Icon name="graduation-cap" className="h-4 w-4 mr-2" />
                                    Permohonan Edukasi/Simulasi
                                </Button>
                                <Button 
                                    variant="outline" 
                                    className="w-full justify-start border-blue-200 hover:bg-blue-50"
                                >
                                    <Icon name="shield-check" className="h-4 w-4 mr-2" />
                                    Rekomendasi Proteksi Kebakaran
                                </Button>
                                <Button 
                                    variant="outline" 
                                    className="w-full justify-start border-blue-200 hover:bg-blue-50"
                                >
                                    <Icon name="file-text" className="h-4 w-4 mr-2" />
                                    Pengaduan Non-Darurat
                                </Button>
                                <Button 
                                    variant="outline" 
                                    className="w-full justify-start border-blue-200 hover:bg-blue-50"
                                >
                                    <Icon name="eye" className="h-4 w-4 mr-2" />
                                    PPID - Keterbukaan Informasi
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Fire Safety Tips */}
                    <Card className="border-green-200">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-green-700">
                                <Icon name="lightbulb" className="h-5 w-5" />
                                Tips Keselamatan
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="bg-green-50 p-3 rounded-lg">
                                    <div className="font-semibold text-sm">💡 Tip Hari Ini</div>
                                    <div className="text-sm mt-1">
                                        Pastikan jalur evakuasi selalu bebas dari penghalang dan mudah diakses.
                                    </div>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-start gap-2">
                                        <span className="text-red-500">🔥</span>
                                        <span>Periksa detektor asap setiap bulan</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-red-500">🧯</span>
                                        <span>Simpan APAR di tempat mudah dijangkau</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-red-500">🚪</span>
                                        <span>Buat rencana evakuasi keluarga</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-center mb-8">
                        🎯 Akses Cepat Layanan Kami
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <Button 
                            size="lg" 
                            className="h-24 flex-col bg-red-600 hover:bg-red-700"
                        >
                            <Icon name="flame" className="h-8 w-8 mb-2" />
                            <span>Data & Statistik</span>
                        </Button>
                        <Button 
                            size="lg" 
                            className="h-24 flex-col bg-blue-600 hover:bg-blue-700"
                        >
                            <Icon name="book-open" className="h-8 w-8 mb-2" />
                            <span>SOP & Regulasi</span>
                        </Button>
                        <Button 
                            size="lg" 
                            className="h-24 flex-col bg-green-600 hover:bg-green-700"
                        >
                            <Icon name="camera" className="h-8 w-8 mb-2" />
                            <span>Galeri Kegiatan</span>
                        </Button>
                        <Button 
                            size="lg" 
                            className="h-24 flex-col bg-purple-600 hover:bg-purple-700"
                        >
                            <Icon name="phone" className="h-8 w-8 mb-2" />
                            <span>Kontak & Darurat</span>
                        </Button>
                    </div>
                </div>

                {/* News Section */}
                <div className="mt-12">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold">📰 Berita & Press Release</h3>
                        <Button variant="outline">Lihat Semua</Button>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <div className="aspect-video bg-gradient-to-r from-red-500 to-orange-500 rounded-t-lg"></div>
                            <CardHeader>
                                <CardTitle className="text-lg">Sosialisasi Pencegahan Kebakaran di Sekolah</CardTitle>
                                <CardDescription>
                                    Program edukasi berkelanjutan untuk meningkatkan kesadaran siswa...
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <div className="aspect-video bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-lg"></div>
                            <CardHeader>
                                <CardTitle className="text-lg">Pelatihan Petugas Pemadam Kebakaran</CardTitle>
                                <CardDescription>
                                    Meningkatkan kemampuan dan kesiapan petugas dalam menghadapi...
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <div className="aspect-video bg-gradient-to-r from-green-500 to-emerald-500 rounded-t-lg"></div>
                            <CardHeader>
                                <CardTitle className="text-lg">Pemeriksaan Fasilitas Proteksi Kebakaran</CardTitle>
                                <CardDescription>
                                    Inspeksi rutin untuk memastikan sistem proteksi berfungsi optimal...
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 mt-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="font-bold mb-4">Kontak Darurat</h4>
                            <div className="space-y-2 text-sm">
                                <div>📞 113 (Darurat)</div>
                                <div>📱 +62 812-3456-7890</div>
                                <div>✉️ emergency@damkarmorowali.go.id</div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Alamat Kantor</h4>
                            <div className="space-y-2 text-sm">
                                <div>Jl. Poros Trans Sulawesi</div>
                                <div>Kolonodale, Kab. Morowali Utara</div>
                                <div>Sulawesi Tengah 94976</div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Jam Operasional</h4>
                            <div className="space-y-2 text-sm">
                                <div>Darurat: 24/7</div>
                                <div>Administrasi: 08:00-16:00</div>
                                <div>Senin - Jumat</div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Media Sosial</h4>
                            <div className="space-y-2 text-sm">
                                <div>📘 Facebook</div>
                                <div>📷 Instagram</div>
                                <div>🐦 Twitter</div>
                                <div>📺 YouTube</div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-8 border-gray-700" />
                    <div className="text-center text-sm opacity-75">
                        © 2024 Dinas Pemadam Kebakaran Kabupaten Morowali Utara. 
                        Melayani dengan Dedikasi untuk Keselamatan Masyarakat.
                    </div>
                </div>
            </footer>
        </AppShell>
    );
}