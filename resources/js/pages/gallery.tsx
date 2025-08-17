import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/icon';

export default function Gallery() {
    const categories = [
        { id: 'all', label: 'Semua', count: 48 },
        { id: 'operations', label: 'Operasional', count: 18 },
        { id: 'training', label: 'Pelatihan', count: 12 },
        { id: 'education', label: 'Edukasi', count: 8 },
        { id: 'equipment', label: 'Peralatan', count: 6 },
        { id: 'events', label: 'Acara', count: 4 },
    ];

    const galleryItems = [
        {
            id: 1,
            title: 'Simulasi Kebakaran di SMPN 1 Kolonodale',
            category: 'education',
            date: '2024-01-15',
            type: 'image',
            thumbnail: 'bg-gradient-to-r from-red-500 to-orange-500'
        },
        {
            id: 2,
            title: 'Pelatihan Penggunaan APAR untuk Masyarakat',
            category: 'training',
            date: '2024-01-10',
            type: 'video',
            thumbnail: 'bg-gradient-to-r from-blue-500 to-cyan-500'
        },
        {
            id: 3,
            title: 'Pemadaman Kebakaran di Pasar Sentral',
            category: 'operations',
            date: '2024-01-08',
            type: 'image',
            thumbnail: 'bg-gradient-to-r from-yellow-500 to-red-500'
        },
        {
            id: 4,
            title: 'Unit Pemadam Kebakaran Terbaru',
            category: 'equipment',
            date: '2024-01-05',
            type: 'image',
            thumbnail: 'bg-gradient-to-r from-green-500 to-blue-500'
        },
        {
            id: 5,
            title: 'Sosialisasi Pencegahan Kebakaran di Mall',
            category: 'education',
            date: '2024-01-03',
            type: 'video',
            thumbnail: 'bg-gradient-to-r from-purple-500 to-pink-500'
        },
        {
            id: 6,
            title: 'Pelatihan Penyelamatan di Ketinggian',
            category: 'training',
            date: '2023-12-28',
            type: 'image',
            thumbnail: 'bg-gradient-to-r from-indigo-500 to-purple-500'
        },
        {
            id: 7,
            title: 'Operasi Penyelamatan Korban Banjir',
            category: 'operations',
            date: '2023-12-25',
            type: 'video',
            thumbnail: 'bg-gradient-to-r from-teal-500 to-green-500'
        },
        {
            id: 8,
            title: 'Upacara Hari Pemadam Kebakaran Nasional',
            category: 'events',
            date: '2023-12-20',
            type: 'image',
            thumbnail: 'bg-gradient-to-r from-red-600 to-yellow-500'
        },
    ];

    return (
        <AppShell>
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        📸 Galeri Kegiatan
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Dokumentasi kegiatan, pelatihan, operasional, dan momen-momen penting 
                        Dinas Pemadam Kebakaran Kabupaten Morowali Utara.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                variant={category.id === 'all' ? 'default' : 'outline'}
                                className={category.id === 'all' ? 'bg-red-600 hover:bg-red-700' : ''}
                            >
                                {category.label}
                                <Badge variant="secondary" className="ml-2">
                                    {category.count}
                                </Badge>
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    {galleryItems.map((item) => (
                        <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative">
                                {/* Thumbnail */}
                                <div className={`aspect-square ${item.thumbnail} flex items-center justify-center relative group cursor-pointer`}>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                            {item.type === 'video' ? (
                                                <div className="bg-black/50 rounded-full p-3">
                                                    <Icon name="play" className="h-8 w-8 text-white" />
                                                </div>
                                            ) : (
                                                <div className="bg-black/50 rounded-full p-3">
                                                    <Icon name="zoom-in" className="h-8 w-8 text-white" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Type indicator */}
                                <div className="absolute top-2 right-2">
                                    <Badge variant="secondary" className="bg-black/50 text-white border-0">
                                        {item.type === 'video' ? (
                                            <><Icon name="video" className="h-3 w-3 mr-1" /> Video</>
                                        ) : (
                                            <><Icon name="image" className="h-3 w-3 mr-1" /> Foto</>
                                        )}
                                    </Badge>
                                </div>
                            </div>
                            
                            <CardContent className="p-4">
                                <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                                    {item.title}
                                </h3>
                                <div className="flex items-center justify-between text-xs text-gray-600">
                                    <span>{new Date(item.date).toLocaleDateString('id-ID')}</span>
                                    <Badge variant="outline" className="text-xs">
                                        {categories.find(c => c.id === item.category)?.label}
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Load More */}
                <div className="text-center">
                    <Button variant="outline" className="px-8">
                        <Icon name="loader" className="h-4 w-4 mr-2" />
                        Muat Lebih Banyak
                    </Button>
                </div>

                {/* Statistics */}
                <div className="mt-16 bg-gray-50 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-center mb-8">
                        📊 Statistik Galeri
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                <Icon name="image" className="h-8 w-8 text-blue-600" />
                            </div>
                            <div className="text-2xl font-bold">342</div>
                            <div className="text-sm text-gray-600">Total Foto</div>
                        </div>
                        <div className="text-center">
                            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                <Icon name="video" className="h-8 w-8 text-red-600" />
                            </div>
                            <div className="text-2xl font-bold">48</div>
                            <div className="text-sm text-gray-600">Total Video</div>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                <Icon name="calendar" className="h-8 w-8 text-green-600" />
                            </div>
                            <div className="text-2xl font-bold">24</div>
                            <div className="text-sm text-gray-600">Bulan Terdata</div>
                        </div>
                        <div className="text-center">
                            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                <Icon name="eye" className="h-8 w-8 text-yellow-600" />
                            </div>
                            <div className="text-2xl font-bold">12.5K</div>
                            <div className="text-sm text-gray-600">Total Views</div>
                        </div>
                    </div>
                </div>

                {/* Upload Info */}
                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                        <Icon name="info" className="h-6 w-6 text-blue-600 mt-1" />
                        <div>
                            <h3 className="font-semibold text-blue-800 mb-2">
                                Informasi untuk Masyarakat
                            </h3>
                            <p className="text-blue-700 text-sm mb-3">
                                Jika Anda memiliki dokumentasi kegiatan atau kejadian yang melibatkan 
                                Dinas Pemadam Kebakaran, Anda dapat mengirimkannya kepada kami.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                    <Icon name="mail" className="h-4 w-4 mr-2" />
                                    Kirim ke Email
                                </Button>
                                <Button size="sm" variant="outline" className="border-blue-300">
                                    <Icon name="message-circle" className="h-4 w-4 mr-2" />
                                    WhatsApp Kami
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}