import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/icon';
import { router } from '@inertiajs/react';

export default function ServicesIndex() {
    const services = [
        {
            id: 'education',
            title: 'Permohonan Edukasi/Simulasi',
            description: 'Ajukan permohonan untuk kegiatan edukasi dan simulasi kebakaran di sekolah, kantor, atau komunitas Anda.',
            icon: 'graduation-cap',
            color: 'bg-blue-600 hover:bg-blue-700',
            features: [
                'Edukasi pencegahan kebakaran',
                'Simulasi evakuasi darurat',
                'Pelatihan penggunaan APAR',
                'Jadwal fleksibel'
            ]
        },
        {
            id: 'fire_protection',
            title: 'Rekomendasi Proteksi Kebakaran',
            description: 'Dapatkan rekomendasi sistem proteksi kebakaran untuk bangunan komersial dan industri Anda.',
            icon: 'shield-check',
            color: 'bg-red-600 hover:bg-red-700',
            features: [
                'Analisis risiko kebakaran',
                'Rekomendasi sistem proteksi',
                'Konsultasi APAR dan sprinkler',
                'Sertifikat kelayakan'
            ]
        },
        {
            id: 'complaint',
            title: 'Pengaduan Non-Darurat',
            description: 'Laporkan masalah atau keluhan terkait keselamatan kebakaran yang tidak bersifat darurat.',
            icon: 'file-text',
            color: 'bg-green-600 hover:bg-green-700',
            features: [
                'Pelaporan online 24/7',
                'Tracking status pengaduan',
                'Notifikasi otomatis',
                'Tindak lanjut transparan'
            ]
        },
        {
            id: 'ppid',
            title: 'PPID - Keterbukaan Informasi',
            description: 'Ajukan permohonan informasi publik sesuai dengan Undang-Undang Keterbukaan Informasi Publik.',
            icon: 'eye',
            color: 'bg-purple-600 hover:bg-purple-700',
            features: [
                'Permintaan informasi publik',
                'Akses dokumen resmi',
                'Proses sesuai UU KIP',
                'Register permintaan'
            ]
        }
    ];

    const handleServiceClick = (serviceId: string) => {
        router.get(route('services.create', { type: serviceId }));
    };

    return (
        <AppShell>
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        🏢 Layanan Publik
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Dinas Pemadam Kebakaran Kabupaten Morowali Utara menyediakan berbagai layanan publik 
                        untuk meningkatkan keselamatan dan kesadaran masyarakat terhadap bahaya kebakaran.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {services.map((service) => (
                        <Card key={service.id} className="border-2 hover:border-gray-300 transition-colors">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <div className={`p-3 rounded-lg ${service.color} text-white`}>
                                        <Icon name={service.icon} className="h-6 w-6" />
                                    </div>
                                    {service.title}
                                </CardTitle>
                                <CardDescription className="text-base">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3 mb-6">
                                    {service.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <Icon name="check" className="h-4 w-4 text-green-600" />
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button 
                                    onClick={() => handleServiceClick(service.id)}
                                    className={`w-full ${service.color}`}
                                >
                                    Ajukan Permohonan
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Process Steps */}
                <div className="bg-gray-50 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-center mb-8">
                        📋 Alur Permohonan Layanan
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-blue-600">1</span>
                            </div>
                            <h3 className="font-semibold mb-2">Isi Formulir</h3>
                            <p className="text-sm text-gray-600">
                                Lengkapi formulir permohonan dengan data yang akurat
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-yellow-600">2</span>
                            </div>
                            <h3 className="font-semibold mb-2">Verifikasi</h3>
                            <p className="text-sm text-gray-600">
                                Tim kami akan memverifikasi dan meninjau permohonan Anda
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-orange-600">3</span>
                            </div>
                            <h3 className="font-semibold mb-2">Penjadwalan</h3>
                            <p className="text-sm text-gray-600">
                                Kami akan menghubungi untuk konfirmasi jadwal pelaksanaan
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-green-600">4</span>
                            </div>
                            <h3 className="font-semibold mb-2">Pelaksanaan</h3>
                            <p className="text-sm text-gray-600">
                                Tim profesional kami akan melaksanakan layanan sesuai jadwal
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="mt-12 bg-red-50 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        📞 Butuh Bantuan?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <Icon name="phone" className="h-8 w-8 mx-auto mb-2 text-red-600" />
                            <h3 className="font-semibold">Telepon</h3>
                            <p className="text-sm text-gray-600">+62 461-xxx-xxxx</p>
                        </div>
                        <div>
                            <Icon name="message-circle" className="h-8 w-8 mx-auto mb-2 text-green-600" />
                            <h3 className="font-semibold">WhatsApp</h3>
                            <p className="text-sm text-gray-600">+62 812-xxxx-xxxx</p>
                        </div>
                        <div>
                            <Icon name="mail" className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                            <h3 className="font-semibold">Email</h3>
                            <p className="text-sm text-gray-600">layanan@damkarmorowali.go.id</p>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}