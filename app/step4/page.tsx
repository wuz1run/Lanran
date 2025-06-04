"use client";
// pages/index.js
import Image from "next/image";
import {backToMain} from "@/app/utils/navigation";
import {useRouter} from "next/navigation";
// ... 已有代码 ...
export default function DonglanDyePage() {
    const router = useRouter();

    return (

        <div className="min-h-screen bg-white">

            <div className="flex flex-col md:flex-row min-h-screen">
                {/* 修改为占满宽度 */}
                <div className="w-full flex flex-col">
                    {/* 顶部蓝色横幅 */}
                    <div className="blue-header text-white p-4 md:p-6">
                        {/* ... 已有代码 ... */}
                    </div>

                    {/* 主内容区域 */}
                    <div className="flex-1 p-6 md:p-8 relative overflow-y-auto">
                        {/* 修改为 2*2 网格布局 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* 第一个流程部分 */}
                            <div className="mb-12">
                                <div className="flex items-start mb-2">
                                    <div className="w-1 bg-blue-700 h-full mr-4"></div>
                                    <div className="flex-1 flex flex-col md:flex-row items-start gap-6">
                                        <div className="flex-1">
                                            <h2 className="song-font text-2xl text-blue-800 mb-1">捶打
                                            </h2>
                                            <div className="flex items-center li-font text-blue-600 mb-2"></div>
                                            <p className="li-font text-gray-700">
                                                将浸染好的布用水浸湿后折成双层，放在光滑石上板，用木锤均匀适度捶打，捶遍所有布面，使布面绒毛平整，结构紧密，为后续处理做准备。
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={'/images/step4-1.png'}
                                                alt="img1"
                                                width={300}
                                                height={200}
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 第二个流程部分 */}
                            <div className="mb-12">
                                <div className="flex items-start mb-2">
                                    <div className="w-1 bg-blue-700 h-full mr-4"></div>
                                    <div className="flex-1 flex flex-col md:flex-row items-start gap-6">
                                        <div className="flex-1">
                                            <h2 className="song-font text-2xl text-blue-800 mb-1">刷蛋清与蒸布
                                            </h2>
                                            <div className="flex items-center li-font text-blue-600 mb-2"></div>
                                            <p className="li-font text-gray-700">
                                                取5-6个鸭蛋或鸡蛋的蛋清调制成蛋液水，用鹅、鸭翅膀的羽毛刷将蛋液均匀地刷在捶打后的布上，晾干。布干后再经过一次捶布和刷蛋液的过程，第二次刷蛋液时要用10多个蛋清。干后将布放入专用蒸笼蒸2小时左右，使蛋清更好地浸入纤维中，增加布的光泽度和牢度。
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={'/images/step4-2.png'}
                                                alt="image2"
                                                width={300}
                                                height={200}
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 当前选中代码部分 */}
                            <div className="mb-12">
                                <div className="flex items-start mb-2">
                                    <div className="w-1 bg-blue-700 h-full mr-4"></div>
                                    <div className="flex-1 flex flex-col md:flex-row items-start gap-6">
                                        <div className="flex-1">
                                            <h2 className="song-font text-2xl text-blue-800 mb-1">再次浸染与晾晒
                                            </h2>
                                            <div className="flex items-center li-font text-blue-600 mb-2"></div>
                                            <p className="li-font text-gray-700">
                                                根将蒸好的布放入牛皮膏水中浸泡，晾干后再次放入蓝靛染缸中浸染再晾干，如此反复四五次，使布的颜色更加鲜艳、牢固。
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={'/images/step4-3.png'}
                                                alt="浸染过程"
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
                                            <h2 className="song-font text-2xl text-blue-800 mb-1">最终捶打与染色
                                            </h2>
                                            <div className="flex items-center li-font text-blue-600 mb-2"></div>
                                            <p className="li-font text-gray-700">
                                                晾干后再次捶打布匹，使其表面更加光滑平整，接着放进染缸中染3-4次，每次染后都要放在清澈的河水中洗净，晾干，直至布匹呈现出满意的色泽和质感，侗族蓝染工艺才算基本完成。
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={'/images/step4-4.png'}
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
                </div>

                {/* 移除左侧图片展示区 */}
                {/* <div className="w-full md:w-1/2 relative bg-blue-50">
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
                </div> */}
            </div>
            <button
                onClick={() => backToMain(router)}
                className="fixed bottom-6 right-6 bg-[#1e3a8a] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-900 transition"
                style={{ fontFamily: 'LISS' }}
            >
                返回首页
            </button>
            {/* 底部装饰 */}
        </div>
    );
}