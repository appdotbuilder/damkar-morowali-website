import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Icon } from '@/components/icon';
import { useForm } from '@inertiajs/react';



export default function Contact() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/kontak', {
            onSuccess: () => {
                reset();
                // Show success message
            }
        });
    };

    return (
        <AppShell>
            <div className="container mx-auto px-4 py-12">
                {/* Emergency Alert */}
                <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <Icon name="phone" className="h-8 w-8" />
                        <h2 className="text-2xl font-bold">EMERGENCY HOTLINE</h2>
                        <Icon name="phone" className="h-8 w-8" />
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2">113</div>
                        <div className="text-lg opacity-90">Hubungi segera untuk keadaan darurat kebakaran!</div>
                    </div>
                </div>

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        📞 Kontak & Informasi
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Hubungi kami untuk informasi, konsultasi, atau layanan pemadam kebakaran. 
                        Tim kami siap melayani Anda dengan profesional.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Office */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Icon name="map-pin" className="h-5 w-5 text-red-600" />
                                    Kantor Pusat
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Icon name="building" className="h-5 w-5 text-gray-600 mt-1" />
                                    <div>
                                        <div className="font-semibold">Dinas Pemadam Kebakaran</div>
                                        <div className="text-sm text-gray-600">Kabupaten Morowali Utara</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon name="map" className="h-5 w-5 text-gray-600 mt-1" />
                                    <div className="text-sm">
                                        Jl. Poros Trans Sulawesi<br />
                                        Kolonodale, Kab. Morowali Utara<br />
                                        Sulawesi Tengah 94976
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Contact Details */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Icon name="phone" className="h-5 w-5 text-blue-600" />
                                    Kontak
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-red-100 p-2 rounded-lg">
                                        <Icon name="phone-call" className="h-4 w-4 text-red-600" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-red-600">Darurat: 113</div>
                                        <div className="text-xs text-gray-600">24 Jam</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-100 p-2 rounded-lg">
                                        <Icon name="phone" className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">+62 461-xxx-xxxx</div>
                                        <div className="text-xs text-gray-600">Administrasi</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-100 p-2 rounded-lg">
                                        <Icon name="message-circle" className="h-4 w-4 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">+62 812-3456-7890</div>
                                        <div className="text-xs text-gray-600">WhatsApp Official</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-purple-100 p-2 rounded-lg">
                                        <Icon name="mail" className="h-4 w-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">info@damkarmorowali.go.id</div>
                                        <div className="text-xs text-gray-600">Email Umum</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Operating Hours */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Icon name="clock" className="h-5 w-5 text-green-600" />
                                    Jam Operasional
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="font-semibold">Darurat</span>
                                    <span className="text-red-600 font-semibold">24/7</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Administrasi</span>
                                    <span>08:00 - 16:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Konsultasi</span>
                                    <span>08:00 - 15:00</span>
                                </div>
                                <div className="text-xs text-gray-600 pt-2">
                                    * Senin - Jumat (hari kerja)
                                </div>
                            </CardContent>
                        </Card>

                        {/* Social Media */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Icon name="share-2" className="h-5 w-5 text-blue-600" />
                                    Media Sosial
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button variant="outline" className="w-full justify-start">
                                    <span className="mr-2">📘</span>
                                    Facebook Damkar Morowali Utara
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <span className="mr-2">📷</span>
                                    @damkarmorowaliutara
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <span className="mr-2">🐦</span>
                                    @damkarmorowali
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <span className="mr-2">📺</span>
                                    Damkar Morowali Utara
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Icon name="mail" className="h-5 w-5 text-blue-600" />
                                    Kirim Pesan
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="name">Nama Lengkap *</Label>
                                            <Input
                                                id="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                className={errors.name ? 'border-red-500' : ''}
                                                placeholder="Masukkan nama lengkap"
                                            />
                                            {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <Label htmlFor="phone">Nomor Telepon *</Label>
                                            <Input
                                                id="phone"
                                                value={data.phone}
                                                onChange={(e) => setData('phone', e.target.value)}
                                                className={errors.phone ? 'border-red-500' : ''}
                                                placeholder="+62 812-xxxx-xxxx"
                                            />
                                            {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className={errors.email ? 'border-red-500' : ''}
                                            placeholder="nama@email.com"
                                        />
                                        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="subject">Subjek *</Label>
                                        <Input
                                            id="subject"
                                            value={data.subject}
                                            onChange={(e) => setData('subject', e.target.value)}
                                            className={errors.subject ? 'border-red-500' : ''}
                                            placeholder="Subjek pesan Anda"
                                        />
                                        {errors.subject && <p className="text-sm text-red-600">{errors.subject}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="message">Pesan *</Label>
                                        <Textarea
                                            id="message"
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            className={errors.message ? 'border-red-500' : ''}
                                            placeholder="Tulis pesan Anda di sini..."
                                            rows={6}
                                        />
                                        {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
                                    </div>

                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                        <div className="flex items-start gap-2">
                                            <Icon name="info" className="h-5 w-5 text-yellow-600 mt-0.5" />
                                            <div className="text-sm">
                                                <p className="font-semibold text-yellow-800 mb-1">Catatan Penting:</p>
                                                <p className="text-yellow-700">
                                                    Untuk keadaan darurat kebakaran, jangan gunakan form ini. 
                                                    Hubungi langsung <strong>113</strong> atau WhatsApp <strong>+62 812-3456-7890</strong>.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <Button 
                                        type="submit" 
                                        className="w-full bg-blue-600 hover:bg-blue-700"
                                        disabled={processing}
                                    >
                                        {processing ? (
                                            <>
                                                <Icon name="loader" className="h-4 w-4 mr-2 animate-spin" />
                                                Mengirim...
                                            </>
                                        ) : (
                                            <>
                                                <Icon name="send" className="h-4 w-4 mr-2" />
                                                Kirim Pesan
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Location Map Placeholder */}
                <div className="mt-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Icon name="map" className="h-5 w-5 text-red-600" />
                                Lokasi Kantor Pusat
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video bg-gradient-to-r from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <Icon name="map-pin" className="h-12 w-12 text-red-600 mx-auto mb-2" />
                                    <p className="text-lg font-semibold">Peta Lokasi</p>
                                    <p className="text-sm text-gray-600">Integrasi peta akan ditambahkan</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppShell>
    );
}