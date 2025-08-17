import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/icon';

export default function About() {
    return (
        <AppShell>
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        🏛️ Tentang Kami
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Dinas Pemadam Kebakaran Kabupaten Morowali Utara berkomitmen melayani masyarakat 
                        dengan dedikasi tinggi dalam upaya pencegahan dan penanggulangan kebakaran.
                    </p>
                </div>

                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <Card className="border-blue-200">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-blue-700">
                                <Icon name="eye" className="h-5 w-5" />
                                Visi
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg leading-relaxed">
                                "Terwujudnya pelayanan pemadam kebakaran yang profesional, responsif, dan terpercaya 
                                untuk keselamatan masyarakat Kabupaten Morowali Utara."
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-red-200">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-red-700">
                                <Icon name="target" className="h-5 w-5" />
                                Misi
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <Icon name="check" className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                    <span>Memberikan pelayanan tanggap darurat kebakaran 24/7</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Icon name="check" className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                    <span>Meningkatkan kesadaran masyarakat tentang pencegahan kebakaran</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Icon name="check" className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                    <span>Mengembangkan sistem proteksi kebakaran yang memadai</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Icon name="check" className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                    <span>Meningkatkan kompetensi dan profesionalisme petugas</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Organizational Structure */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        🏢 Struktur Organisasi
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-8">
                        <div className="text-center mb-8">
                            <div className="bg-red-600 text-white rounded-lg p-4 inline-block mb-2">
                                <h3 className="font-bold">Kepala Dinas</h3>
                                <p className="text-sm opacity-90">Ir. Ahmad Surya, M.Si</p>
                            </div>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-blue-600 text-white rounded-lg p-4 mb-4">
                                    <h4 className="font-semibold">Sekretaris</h4>
                                    <p className="text-sm opacity-90">Drs. Budi Santoso</p>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div>• Sub Bagian Umum</div>
                                    <div>• Sub Bagian Keuangan</div>
                                    <div>• Sub Bagian Program</div>
                                </div>
                            </div>
                            
                            <div className="text-center">
                                <div className="bg-green-600 text-white rounded-lg p-4 mb-4">
                                    <h4 className="font-semibold">Bidang Pencegahan</h4>
                                    <p className="text-sm opacity-90">Drs. Candra Wijaya</p>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div>• Seksi Kaji Teknis</div>
                                    <div>• Seksi Sosialisasi</div>
                                    <div>• Seksi Pengawasan</div>
                                </div>
                            </div>
                            
                            <div className="text-center">
                                <div className="bg-orange-600 text-white rounded-lg p-4 mb-4">
                                    <h4 className="font-semibold">Bidang Operasional</h4>
                                    <p className="text-sm opacity-90">Ir. Dewi Sartika</p>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div>• Seksi Penyelamatan</div>
                                    <div>• Seksi Pemadaman</div>
                                    <div>• Seksi Darurat Medis</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Areas */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        📍 Pos dan Wilayah Pelayanan
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'Pos Pusat Kolonodale', area: 'Kolonodale, Petasia', units: 3, personnel: 24 },
                            { name: 'Pos Bungku Utara', area: 'Bungku Utara, Bungku Tengah', units: 2, personnel: 16 },
                            { name: 'Pos Mamosalato', area: 'Mamosalato, Mama Tobo', units: 2, personnel: 16 },
                            { name: 'Pos Pondidaha', area: 'Pondidaha, Wita Ponda', units: 1, personnel: 12 },
                            { name: 'Pos Lembo Raya', area: 'Lembo Raya, Simpong', units: 1, personnel: 12 },
                            { name: 'Pos Bunta', area: 'Bunta, Soyo Jaya', units: 1, personnel: 12 }
                        ].map((pos, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{pos.name}</CardTitle>
                                    <CardDescription>{pos.area}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm text-gray-600">Unit</span>
                                        <Badge variant="outline">{pos.units} unit</Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Personel</span>
                                        <Badge variant="outline">{pos.personnel} orang</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Fleet & Equipment */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        🚒 Armada dan Peralatan
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="text-3xl mb-2">🚒</div>
                                <h3 className="font-bold text-xl mb-2">12</h3>
                                <p className="text-sm text-gray-600">Unit Pemadam Kebakaran</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="text-3xl mb-2">🚑</div>
                                <h3 className="font-bold text-xl mb-2">6</h3>
                                <p className="text-sm text-gray-600">Unit Ambulans</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="text-3xl mb-2">🧯</div>
                                <h3 className="font-bold text-xl mb-2">150+</h3>
                                <p className="text-sm text-gray-600">APAR Tersedia</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="text-3xl mb-2">👨‍🚒</div>
                                <h3 className="font-bold text-xl mb-2">92</h3>
                                <p className="text-sm text-gray-600">Personel Aktif</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Core Values */}
                <div className="bg-red-50 rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        ⭐ Nilai-Nilai Kami
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Icon name="zap" className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="font-bold mb-2">RESPONSIF</h3>
                            <p className="text-sm text-gray-600">
                                Siap tanggap 24/7 untuk setiap keadaan darurat
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Icon name="award" className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="font-bold mb-2">PROFESIONAL</h3>
                            <p className="text-sm text-gray-600">
                                Menjalankan tugas dengan keahlian dan standar tinggi
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Icon name="heart" className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="font-bold mb-2">PEDULI</h3>
                            <p className="text-sm text-gray-600">
                                Mengutamakan keselamatan dan kesejahteraan masyarakat
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Icon name="shield" className="h-8 w-8 text-yellow-600" />
                            </div>
                            <h3 className="font-bold mb-2">TERPERCAYA</h3>
                            <p className="text-sm text-gray-600">
                                Membangun kepercayaan masyarakat melalui pelayanan berkualitas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}