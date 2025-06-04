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
                {/* 左侧图片展示区 - 占位符 */}
                <div className="w-full md:w-1/2 relative bg-blue-50">

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center max-w-xs">
                            <Image
                                src={'/images/radix.png'}
                                alt="放大图像"
                                width={1200}
                                height={800}
                                className="w-80% h-auto object-contain"
                            />
                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                <div className="flex items-start">
                                    <div className="w-full h-full">
                                        <p className="li-font text-gray-700">
                                            板蓝根（学名：Isatis tinctoria）是蓝染的主要原料植物，其叶中含有靛蓝成分。
                                            经过侗族传统工艺处理，可提取出纯天然的蓝靛染料，具有环保、无毒的特性。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 右侧内容展示区 */}
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
                            <div className="flex items-start mb-4">
                                <div className="w-1 bg-blue-700 h-full mr-4"></div>
                                <div>
                                    <h2 className="song-font text-2xl text-blue-800 mb-1">选种与育苗</h2>
                                    <div className="flex items-center li-font text-blue-600 mb-2">
                                    </div>
                                    <p className="li-font text-gray-700">
                                        侗族人民精选优质蓝靛草种子播于苗床，精心呵护，待其长出嫩芽。
                                        春季，将幼苗移栽至苗床，日常做好除草、灌溉等管理，确保其茁壮成长。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12">
                            <div className="flex items-start mb-4">
                                <div className="w-1 bg-blue-700 h-full mr-4"></div>
                                <div>
                                    <h2 className="song-font text-2xl text-blue-800 mb-1">移栽与管理</h2>
                                    <div className="flex items-center li-font text-blue-600 mb-2">
                                    </div>
                                    <p className="li-font text-gray-700">
                                        将蓝靛草幼苗移栽至肥沃土地，合理密植，日常做好除草、施肥、灌溉等管理。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12">
                            <div className="flex items-start mb-4">
                                <div className="w-1 bg-blue-700 h-full mr-4"></div>
                                <div>
                                    <h2 className="song-font text-2xl text-blue-800 mb-1">收割与处理</h2>
                                    <div className="flex items-center li-font text-blue-600 mb-2">
                                    </div>
                                    <p className="li-font text-gray-700">
                                        入夏九月蓝靛草成熟，收割后，保留根部。将叶茎洗净，放入木桶或大缸，加水浸泡5-7天，期间适时搅拌促进靛汁析出。
                                    </p>
                                    <p className="li-font text-gray-700 mt-2">
                                        浸泡完成后，捞出靛渣，加入石灰，继续搅拌，使石灰与靛汁充分反应，待泡沫消散，静置10天，舀出清水，得到蓝靛泥密封保存备用。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 板蓝根介绍 */}

                    </div>
                    <button
                        onClick={() => backToMain(router)}
                        className="fixed bottom-6 right-6 bg-[#1e3a8a] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-900 transition"
                        style={{ fontFamily: 'LISS' }}
                    >
                        返回首页
                    </button>
                    <button
                        onClick={() => goto(router, 'step2')}
                        className="fixed bottom-6 right-205 bg-[#1e3a8a] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-900 transition"
                        style={{ fontFamily: 'LISS' }}
                    >
                        下一页
                    </button>
                    {/* 底部装饰 */}
                </div>
            </div>
        </div>
    );
}