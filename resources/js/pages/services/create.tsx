import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Icon } from '@/components/icon';
import { useForm } from '@inertiajs/react';

interface Props {
    type: string;
    [key: string]: unknown;
}

interface ServiceDataType {
    participants?: number;
    location?: string;
    business_type?: string;
    building_area?: number;
    [key: string]: unknown;
}



export default function CreateServiceRequest({ type }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        type,
        title: '',
        description: '',
        priority: 'medium',
        requester_name: '',
        requester_email: '',
        requester_phone: '',
        requester_organization: '',
        requester_address: '',
        requested_date: '',
        requested_time: '',
        service_data: {},
    });

    const serviceConfig = {
        education: {
            title: 'Permohonan Edukasi/Simulasi',
            description: 'Ajukan permohonan untuk kegiatan edukasi dan simulasi kebakaran',
            icon: 'graduation-cap',
            color: 'text-blue-600'
        },
        fire_protection: {
            title: 'Rekomendasi Proteksi Kebakaran',
            description: 'Dapatkan rekomendasi sistem proteksi kebakaran untuk bangunan Anda',
            icon: 'shield-check',
            color: 'text-red-600'
        },
        complaint: {
            title: 'Pengaduan Non-Darurat',
            description: 'Laporkan masalah atau keluhan terkait keselamatan kebakaran',
            icon: 'file-text',
            color: 'text-green-600'
        }
    }[type] || {
        title: 'Permohonan Layanan',
        description: 'Ajukan permohonan layanan',
        icon: 'file-text',
        color: 'text-gray-600'
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('services.store'));
    };

    const setServiceData = (key: string, value: string | number) => {
        setData('service_data', {
            ...(data.service_data || {}),
            [key]: value
        });
    };

    return (
        <AppShell>
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Icon name={serviceConfig.icon} className={`h-8 w-8 ${serviceConfig.color}`} />
                        <h1 className="text-3xl font-bold">{serviceConfig.title}</h1>
                    </div>
                    <p className="text-gray-600">{serviceConfig.description}</p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-4xl">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Form */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Request Information */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Informasi Permohonan</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="title">Judul Permohonan *</Label>
                                        <Input
                                            id="title"
                                            value={data.title}
                                            onChange={(e) => setData('title', e.target.value)}
                                            placeholder="Contoh: Simulasi Kebakaran untuk SMPN 1 Kolonodale"
                                            className={errors.title ? 'border-red-500' : ''}
                                        />
                                        {errors.title && <p className="text-sm text-red-600">{errors.title}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="description">Deskripsi Detail *</Label>
                                        <Textarea
                                            id="description"
                                            value={data.description}
                                            onChange={(e) => setData('description', e.target.value)}
                                            placeholder="Jelaskan secara detail kebutuhan dan tujuan permohonan Anda..."
                                            rows={4}
                                            className={errors.description ? 'border-red-500' : ''}
                                        />
                                        {errors.description && <p className="text-sm text-red-600">{errors.description}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="priority">Prioritas</Label>
                                        <Select value={data.priority} onValueChange={(value) => setData('priority', value)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Pilih prioritas" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="low">Rendah</SelectItem>
                                                <SelectItem value="medium">Normal</SelectItem>
                                                <SelectItem value="high">Tinggi</SelectItem>
                                                <SelectItem value="urgent">Mendesak</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Service-specific fields */}
                                    {type === 'education' && (
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="participants">Jumlah Peserta</Label>
                                                <Input
                                                    id="participants"
                                                    type="number"
                                                    value={(data.service_data as ServiceDataType)?.participants || ''}
                                                    onChange={(e) => setServiceData('participants', parseInt(e.target.value) || 0)}
                                                    placeholder="0"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="location">Lokasi Kegiatan</Label>
                                                <Input
                                                    id="location"
                                                    value={(data.service_data as ServiceDataType)?.location || ''}
                                                    onChange={(e) => setServiceData('location', e.target.value)}
                                                    placeholder="Contoh: Aula sekolah"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {type === 'fire_protection' && (
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="business_type">Jenis Bangunan/Usaha</Label>
                                                <Input
                                                    id="business_type"
                                                    value={(data.service_data as ServiceDataType)?.business_type || ''}
                                                    onChange={(e) => setServiceData('business_type', e.target.value)}
                                                    placeholder="Contoh: Perkantoran, Mall, Pabrik"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="building_area">Luas Bangunan (m²)</Label>
                                                <Input
                                                    id="building_area"
                                                    type="number"
                                                    value={(data.service_data as ServiceDataType)?.building_area || ''}
                                                    onChange={(e) => setServiceData('building_area', parseFloat(e.target.value) || 0)}
                                                    placeholder="0"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Requester Information */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Informasi Pemohon</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="requester_name">Nama Lengkap *</Label>
                                            <Input
                                                id="requester_name"
                                                value={data.requester_name}
                                                onChange={(e) => setData('requester_name', e.target.value)}
                                                className={errors.requester_name ? 'border-red-500' : ''}
                                            />
                                            {errors.requester_name && <p className="text-sm text-red-600">{errors.requester_name}</p>}
                                        </div>
                                        <div>
                                            <Label htmlFor="requester_organization">Organisasi/Institusi</Label>
                                            <Input
                                                id="requester_organization"
                                                value={data.requester_organization}
                                                onChange={(e) => setData('requester_organization', e.target.value)}
                                                placeholder="Opsional"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="requester_email">Email *</Label>
                                            <Input
                                                id="requester_email"
                                                type="email"
                                                value={data.requester_email}
                                                onChange={(e) => setData('requester_email', e.target.value)}
                                                className={errors.requester_email ? 'border-red-500' : ''}
                                            />
                                            {errors.requester_email && <p className="text-sm text-red-600">{errors.requester_email}</p>}
                                        </div>
                                        <div>
                                            <Label htmlFor="requester_phone">Nomor Telepon *</Label>
                                            <Input
                                                id="requester_phone"
                                                value={data.requester_phone}
                                                onChange={(e) => setData('requester_phone', e.target.value)}
                                                placeholder="Contoh: +62 812-3456-7890"
                                                className={errors.requester_phone ? 'border-red-500' : ''}
                                            />
                                            {errors.requester_phone && <p className="text-sm text-red-600">{errors.requester_phone}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="requester_address">Alamat Lengkap *</Label>
                                        <Textarea
                                            id="requester_address"
                                            value={data.requester_address}
                                            onChange={(e) => setData('requester_address', e.target.value)}
                                            rows={3}
                                            className={errors.requester_address ? 'border-red-500' : ''}
                                        />
                                        {errors.requester_address && <p className="text-sm text-red-600">{errors.requester_address}</p>}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Schedule */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Jadwal yang Diinginkan</CardTitle>
                                    <CardDescription>
                                        Opsional - Anda dapat mengisi jadwal yang diinginkan, namun jadwal final akan dikonfirmasi oleh tim kami.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="requested_date">Tanggal</Label>
                                            <Input
                                                id="requested_date"
                                                type="date"
                                                value={data.requested_date}
                                                onChange={(e) => setData('requested_date', e.target.value)}
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="requested_time">Waktu</Label>
                                            <Input
                                                id="requested_time"
                                                type="time"
                                                value={data.requested_time}
                                                onChange={(e) => setData('requested_time', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Submit */}
                            <Card>
                                <CardContent className="pt-6">
                                    <Button 
                                        type="submit" 
                                        className="w-full bg-red-600 hover:bg-red-700"
                                        disabled={processing}
                                    >
                                        {processing ? 'Mengirim...' : 'Kirim Permohonan'}
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Information */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">ℹ️ Informasi</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm space-y-2">
                                    <p>• Permohonan akan diproses dalam 1-3 hari kerja</p>
                                    <p>• Anda akan menerima nomor tiket untuk tracking</p>
                                    <p>• Tim kami akan menghubungi untuk konfirmasi</p>
                                    <p>• Layanan ini gratis untuk masyarakat</p>
                                </CardContent>
                            </Card>

                            {/* Contact */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">📞 Bantuan</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Icon name="phone" className="h-4 w-4" />
                                        <span>+62 461-xxx-xxxx</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Icon name="message-circle" className="h-4 w-4" />
                                        <span>+62 812-xxxx-xxxx</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Icon name="mail" className="h-4 w-4" />
                                        <span>layanan@damkarmorowali.go.id</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </form>
            </div>
        </AppShell>
    );
}