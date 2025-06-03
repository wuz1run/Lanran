'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// 普通函数，接收 router 作为参数
function backToMain(router: ReturnType<typeof useRouter>) {
    router.push('/');
}
export default function LanranIntro() {
    const router = useRouter();
    return (
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
                <button
                    onClick={() => backToMain(router)}
                    className="fixed bottom-6 right-6 bg-[#1e3a8a] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-900 transition"
                    style={{ fontFamily: '隶书' }}
                >
                    返回首页
                </button>
            </div>

        </div>
    );
}
