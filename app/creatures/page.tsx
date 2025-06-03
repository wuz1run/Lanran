"use client";
import Image from 'next/image';
import {backToMain} from "@/app/utils/navigation";
import {useRouter} from "next/navigation";
export default function LanranPage() {
    const router = useRouter();
    return (
        <main className="min-h-screen bg-[#FAF6EF] p-10 text-[#1E386B] font-serif">


            {/* 主体内容区域 */}
            <div className="mt-6 flex flex-col lg:flex-row gap-10">
                {/* 左图区域 */}
                <div className="flex-1 flex justify-center">
                    <div className="bg-white p-4 rounded-xl shadow-md">
                        <Image
                            src="/images/culture.png"
                            alt="展示图"
                            width={400}
                            height={500}
                            className="rounded-md"
                        />
                    </div>
                </div>

                {/* 右文案区域 */}
                <div className="flex-1 flex flex-col justify-between h-[500px] text-[16px]">
                    <div>
                        <h2 className="text-3xl font-bold border-l-4 border-[#1E386B] pl-2 mb-2">
                            「伽蓝 · 国宝奇遇」系列
                        </h2>
                        <p style={{ fontSize: '20px' }}>
                            以非遗智慧守护国宝，用创意设计活化传统。我们将伽族蓝染的天然肌理与熊猫的趣萌形象深度碰撞，让蓝染熊制的熊猫头套与服饰成为行走的非遗符号。
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold border-l-4 border-[#1E386B] pl-2 mb-2">【产品亮点】</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li style={{ fontSize: '20px' }}>非遗新表达：沿用伽族古法植物染工艺，每一件蓝染头套都保留手工扎结的独特冰纹。</li>
                            <li style={{ fontSize: '20px' }}>功能性设计：头套内衬采用透气苎麻布，服饰融入伽布拼接元素，兼具文化质感与日常实穿性。</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold border-l-4 border-[#1E386B] pl-2 mb-2">【文化内核】</h2>
                        <p style={{ fontSize: '20px' }}>
                            通过“染出来的国宝”传递生态保护理念——伽族崇尚自然与熊猫栖息地守护精神不谋而合。当您戴上这抹会呼吸的蓝，便成为了非遗传承的现代使者。
                        </p>
                    </div>
                </div>

            </div>
            <br></br> <br></br> <br></br> <br></br>
            {/* 底部标语 */}
            <div className="mt-10 text-center align-bottom text-4xl font-semibold text-[#1E386B]"
            style={{fontFamily:"隶书"}}>
                让非遗可穿戴，让国宝可拥抱，让传统与当代温暖相拥。
            </div>
            <button
                onClick={() => backToMain(router)}
                className="fixed bottom-6 right-6 bg-[#1e3a8a] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-900 transition"
                style={{ fontFamily: '隶书' }}
            >
                返回首页
            </button>
        </main>
    );
}
