"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {backToMain} from "@/app/utils/navigation";

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = Array.from({ length: 16 }, (_, i) => ({
        id: i,
        src: `/images/patterns/${i + 1}.jpg`,
        alt: `Image ${i + 1}`,
        title:
            i < 4
                ? '几何纹样 '+(i%4+1)
                : i < 8
                    ? '动物纹样'+(i%4+1)
                    : i < 12
                        ? '植物纹样'+(i%4+1)
                        : '人物纹样'+(i%4+1),
    }));
    const router = useRouter();
    return (
        <main className="min-h-screen bg-gray-100 p-10" style={{backgroundColor:"#FFFBEF"}}>            <button
                onClick={() => backToMain(router)}
                className="fixed bottom-6 right-6 bg-[#1e3a8a] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-900 transition"
                style={{ fontFamily: '隶书' }}
            >
                返回首页
            </button>
            <h1 className="text-5xl font-bold mb-8 text-center" style={{fontFamily:"隶书"}}>纹样集锦</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
                {images.map((img) => (
                    <div key={img.id} className="w-[320px]">
                        <div
                            className="relative w-[320px] h-[260px] bg-white rounded-t-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                            onClick={() => setSelectedImage(img.src)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div
                            className="bg-[#1E386B] text-white text-center py-2 rounded-b-2xl font-medium shadow-md"
                            style={{ fontFamily: '微软雅黑', fontSize: '18px',fontWeight:"bold" }}
                        >
                            {img.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* 模态放大图层 */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative w-[80%] max-w-3xl h-auto bg-white rounded-xl overflow-hidden shadow-lg animate-fadeInUp"
                    >
                        <Image
                            src={selectedImage}
                            alt="放大图像"
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            )}
        </main>
    );
}