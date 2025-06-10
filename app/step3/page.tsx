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
                                <div className="flex-1 flex flex-col md:flex-row items-start gap-6">
                                    <div className="flex-1">
                                        <h2 className="song-font text-2xl text-blue-800 mb-1">染液配制</h2>
                                        <div className="flex items-center li-font text-blue-600 mb-2"></div>
                                        <p className="li-font text-gray-700">
                                            将蓝靛泥放入染缸，按比例加入水、石灰、自制白酒及土碱等辅料，搅拌均匀，使蓝靛泥充分溶解，形成染液，静置一段时间，让染液充分发生化学反应。
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={'/images/step3-1.png'}
                                            alt="img1"
                                            width={300}
                                            height={200}
                                            className="rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12">
                            <div className="flex items-start mb-2">
                                <div className="w-1 bg-blue-700 h-full mr-4"></div>
                                <div className="flex-1 flex flex-col md:flex-row items-start gap-6">
                                    <div className="flex-1">
                                        <h2 className="song-font text-2xl text-blue-800 mb-1">首次浸染与晾晒</h2>
                                        <div className="flex items-center li-font text-blue-600 mb-2"></div>
                                        <p className="li-font text-gray-700">
                                            把白坯布放入染液，确保完全浸没，浸泡2-3小时，让布料充分吸收染液。之后将布料捞出，挂在室外晾晒，使布料上的颜色在空气中氧化加深。晾晒时注意避免褶皱和不均匀，选择通风良好、阳光充足的地方
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={'/images/step3-2.png'}
                                            alt="image2"
                                            width={300}
                                            height={200}
                                            className="rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12">
                            <div className="flex items-start mb-2">
                                <div className="w-1 bg-blue-700 h-full mr-4"></div>
                                <div className="flex-1 flex flex-col md:flex-row items-start gap-6">
                                    <div className="flex-1">
                                        <h2 className="song-font text-2xl text-blue-800 mb-1">反复浸染与晾晒</h2>
                                        <div className="flex items-center li-font text-blue-600 mb-2"></div>
                                        <p className="li-font text-gray-700">
                                            根据所需颜色深浅，重复浸染和晾晒多次，每次浸染都要按比例添加蓝靛、石灰等原料，以保持染液浓度。一般染一匹蓝布大约要花两周时间，反复浸染10-20次，直至达到所需色彩饱和度。
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={'/images/step3-3.png'}
                                            alt="浸染过程"
                                            width={300}
                                            height={200}
                                            className="rounded-lg"
                                        />
                                    </div>
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
                                src={'/images/step3page.png'}
                                alt="放大图像"
                                fill
                                className="w-100% h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>            <button
                onClick={() => backToMain(router)}
                className="fixed bottom-6 right-6 bg-[#1e3a8a] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-900 transition"
                style={{ fontFamily: '隶书' }}
            >
                返回首页
            </button>
            <button
                onClick={() => goto(router, 'step4')}
                className="fixed bottom-6 right-205 bg-[#1e3a8a] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-900 transition"
                style={{ fontFamily: '隶书' }}
            >
                下一页
            </button>
            {/* 底部装饰 */}
        </div>
    );
}