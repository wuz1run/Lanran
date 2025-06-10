'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// 普通函数，接收 router 作为参数
function backToMain(router: ReturnType<typeof useRouter>) {
    router.push('/');
}

export default function LanranIntro() {
    const router = useRouter();
    
    const scrollToSecondPage = () => {
        document.getElementById('second-page')?.scrollIntoView({ 
            behavior: 'smooth' 
        });
    };

    return (
        <div className="w-full">
            {/* 第一页 - 文字介绍 */}
            <div className="w-full min-h-screen py-10 px-4 bg-white">
                {/* 主体区域 */}
                <div className="bg-[#fefae8] p-6 flex flex-col md:flex-row gap-6 border rounded-b-lg shadow-md w-full h-full">
                    {/* 左侧图案 */}
                    <div className="w-full md:w-1/2 pr-8 flex items-center justify-center">
                        <Image
                            src="/images/pattern.jpg"
                            alt="蓝染图案"
                            width={600}
                            height={600}
                            className="rounded-lg shadow"
                        />
                    </div>

                    {/* 右侧文字 */}
                    <div className="w-full md:w-1/2 space-y-4 pl-8 flex flex-col justify-center">
                        <h2 className="text-[#1e3a8a] font-bold text-4xl border-b border-[#1e3a8a] inline-block pb-1 mx-auto block text-center" style={{ fontFamily: '宋体' }}>
                            蓝染——千年草木智慧
                        </h2>
                        <p className="leading-relaxed text-[32px]" style={{ fontFamily: '隶书' }}>
                            以天然蓝靛为彩，与时光对话的手艺。通过扎结、浸染、氧化，
                            在棉麻上留下独一无二的冰纹与渐变。
                            从中国侗族的蓝染秘方到日本德岛的阿波蓝，
                            再到非洲的泥染工艺，全球蓝染文化各异，
                            却共守自然之道——不靠化学，只凭匠心，让织物拥有会呼吸的蓝。
                        </p>
                    </div>
                </div>
                
                {/* 固定按钮 */}
                <button
                    onClick={() => backToMain(router)}
                    className="fixed bottom-6 right-6 bg-[#1e3a8a] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-900 transition"
                    style={{ fontFamily: '隶书' }}
                >
                    返回首页
                </button>
                <button
                    onClick={scrollToSecondPage}
                    className="fixed bottom-6 right-32 bg-[#1e3a8a] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-900 transition"
                    style={{ fontFamily: '隶书' }}
                >
                    观看视频
                </button>
            </div>
            {/* 第一页结束 */}

            {/* 第二页 - 视频展示 */}
            <div id="second-page" className="w-full min-h-screen py-10 px-4 bg-gradient-to-b from-[#fefae8] to-[#e0f2fe]">
                <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
                    {/* 标题 */}
                    <h2 className="text-[#1e3a8a] font-bold text-5xl text-center mb-8" style={{ fontFamily: '宋体' }}>
                        蓝染工艺传承
                    </h2>
                    
                    {/* 视频容器 */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8 mx-auto w-full max-w-4xl">
                        <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden shadow-inner">
                            <video 
                                className="w-full h-full object-cover"
                                controls
                                poster="/images/pattern.jpg"
                            >
                                <source src="/videos/lanran.mp4" type="video/mp4" />
                                您的浏览器不支持视频播放。
                            </video>
                        </div>
                        
                        {/* 视频描述 */}
                        <div className="mt-6 text-center">
                            <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: '隶书' }}>
                                传承千年的侗族蓝染工艺，从种蓝制靛到最终成品，
                                每一个步骤都凝聚着先人的智慧与匠心。
                                让我们一起走进这个充满自然魅力的染色世界。
                            </p>
                        </div>
                    </div>

                    {/* 导航按钮 */}
                    <div className="flex justify-center mt-8 space-x-4">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="bg-[#1e3a8a] text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-900 transition"
                            style={{ fontFamily: '隶书' }}
                        >
                            返回上页
                        </button>
                        <button
                            onClick={() => backToMain(router)}
                            className="bg-gray-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition"
                            style={{ fontFamily: '隶书' }}
                        >
                            返回首页
                        </button>
                    </div>
                </div>
            </div>
            {/* 第二页结束 */}
        </div>
    );
}