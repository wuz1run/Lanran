"use client";
// pages/index.js
import Head from 'next/head';
import Image from "next/image";
import {backToMain} from "@/app/utils/navigation";
import {useRouter} from "next/navigation";
export default function DonglanDyePage() {
    const router = useRouter();
    function goto(router: ReturnType<typeof useRouter>,destination:string) {
        router.push("/"+destination)
    }
    return (

        <div className="min-h-screen bg-white">
            <Head>
                <title>侗族种蓝制靛工艺</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&display=swap" rel="stylesheet" />
                <style>{`
          .song-font {
            font-family: 'Noto Serif SC', serif;
            font-weight: 700;
          }
          .li-font {
            font-family: 'Noto Serif SC', serif;
            font-weight: 400;
          }
          .blue-header {
            background: linear-gradient(135deg, #1a4e9f 0%, #0d2d6d 100%);
          }
        `}</style>
            </Head>

            <div className="flex flex-col md:flex-row min-h-screen">
                {/* 右侧内容展示区，移到左侧 */}
                <div className="w-full md:w-1/2 flex flex-col">
                    {/* 顶部蓝色横幅 */}
                    <div className="blue-header text-white p-4 md:p-6">
                        <div className="flex justify-between items-center mb-2">
                            <h1 className="song-font text-3xl">侗韵蓝染</h1>
                            <div className="text-right">
                                <div className="text-xs opacity-80">DONGYUNLANRAN</div>
                                <div className="song-font text-sm">侗族 ● 种蓝制靛</div>
                            </div>
                        </div>
                    </div>

                    {/* 主内容区域 */}
                    <div className="flex-1 p-6 md:p-8 relative overflow-y-auto">
                        {/* 三个流程部分 */}
                        <div className="mb-12">
                            <div className="flex items-start mb-2">
                                <div className="w-1 bg-blue-700 h-full mr-4"></div>
                                <div>
                                    <h2 className="song-font text-2xl text-blue-800 mb-1">种植与采摘棉花</h2>
                                    <div className="flex items-center li-font text-blue-600 mb-2">
                                    </div>
                                    <p className="li-font text-gray-700">
                                        侗族人多自种棉花，棉花成熟后人工采摘，挑选优质棉花用于后续制作。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <div className="mb-12">
                            <div className="flex items-start mb-2">
                                <div className="w-1 bg-blue-700 h-full mr-4"></div>
                                <div>
                                    <h2 className="song-font text-2xl text-blue-800 mb-1">整理织线</h2>
                                    <div className="flex items-center li-font text-blue-600 mb-2">
                                    </div>
                                    <p className="li-font text-gray-700">
                                        将棉花弹松，用传统纺车纺成棉线。再用织布机将棉线织成白坯布，织好的布整理平整，为印染做好准备。

                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 板蓝根介绍 */}

                    </div>
                </div>

                {/* 左侧图片展示区 - 占位符，移到右侧 */}
                <div className="w-full md:w-1/2 relative bg-blue-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center max-w-xs">
                            <Image
                                src={'/images/righthand.png'}
                                alt="放大图像"
                                fill
                                className="w-100% h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={() => backToMain(router)}
                className="fixed bottom-6 right-6 bg-[#1e3a8a] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-900 transition"
                style={{ fontFamily: 'LISS' }}
            >
                返回首页
            </button>
            <button
                onClick={() => goto(router, 'step3')}
                className="fixed bottom-6 right-205 bg-[#1e3a8a] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-900 transition"
                style={{ fontFamily: 'LISS' }}
            >
                下一页
            </button>
            {/* 底部装饰 */}
        </div>
    );
}