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
                        src="/images/story.png"
                        alt="蓝染图案"
                        width={600}
                        height={600}
                        className="rounded-lg shadow"
                    />
                </div>

                {/* 右侧文字 */}
                <div className="w-full md:w-1/2 space-y-4 pl-8 flex flex-col justify-center">
                    <h2 className="text-[#1e3a8a] font-bold text-4xl border-b border-[#1e3a8a] inline-block pb-1 mx-auto block text-center" style={{ fontFamily: '宋体' }}>
                        「以蓝为脉，与侗同行」
                    </h2>
                    <p className="leading-relaxed text-[32px]" style={{ fontFamily: '隶书' }}>
                        我们是深耕侗族文化的青年守护者，以双手传承蓝染的千年智慧，以匠心复现纹样中的天地密码。不囿于传统，不拘于时空，让古老技艺与当代美学对话，让每一件作品都承载侗族“天人合一”的哲思。我们坚信，文化不是静止的遗产，而是流动的生命——愿以青春之力，染就时光的蓝，织就未来的纹。

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
