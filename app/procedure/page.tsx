"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
function goto(router: ReturnType<typeof useRouter>,destination:string) {
    router.push("/"+destination)
}
const steps = [
    {
        title: "种蓝制靛",
        image: "/images/step1.jpg",
        alt: "种蓝制靛 - 蓝色染料制作过程",
        description: "通过栽种蓝草、采摘、发酵、氧化等环节提取天然蓝靛染料。",
        goto:"step1"
    },
    {
        title: "浸染上色",
        image: "/images/step2.jpg",
        alt: "浸染上色 - 传统染色工艺",
        description: "将织物重复多次的浸泡染液中，经过捶打、蒸发、氧化、晾干环节，形成具备特色的蓝染布\n",
        goto:"step2"
    },
    {
        title: "编织布料",
        image: "/images/step3.jpg",
        alt: "编织布料 - 传统织布工艺",
        description: "将用纺织机将棉线条编织成布，裁剪成合适的形制。",
        goto:"step3"
    },
    {
        title: "后期处理",
        image: "/images/step4.jpg",
        alt: "后期处理 - 成品蓝染布料",
        description: "完成整理、晾晒、定型等工序，得到最终成品布料。",
        goto:"step4"
    },
]

export default function IndigoDyeingProcess() {
    const router = useRouter()
    return (
        <div className="min-h-screen text-white flex flex-col items-center py-12 px-6"
        style={{backgroundColor:"#20376B"}}>
            {/* Header */}
            <header className="w-full max-w-4xl flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden ">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">侗韵蓝染</h1>
                        <p className="text-base opacity-90">DONGYUNLANRAN</p>
                    </div>
                </div>
                <nav className="text-4xl font-medium" style={{fontFamily:"LISS"}}>蓝靛染 ● 工艺流程</nav>
            </header>

            {/* Timeline */}
            <main className="w-full max-w-4xl relative">
                <div className="relative">
                    {/* 连接线：从第一个圆点顶部开始，到最后一个圆点底部 */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-2 bottom-8 w-1 bg-white opacity-30 rounded-full"></div>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center mb-24 group"
                            style={{ minHeight: "380px" }} // 增加每步容器高度，保证连接线长度
                        >
                            {/* 圆点 */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5 bg-white rounded-full z-10 shadow-md"></div>

                            {/* 图片 */}
                            <div className="relative cursor-pointer mb-6">
                                <Image
                                    onClick={() => goto(router, step.goto)}
                                    src={step.image}
                                    alt={step.alt}
                                    width={400}
                                    height={280}
                                    className="rounded-3xl shadow-2xl"
                                />
                                {/* 悬浮提示 */}
                                <div
                                    className="pointer-events-none absolute z-50 hidden group-hover:block max-w-xs bg-black bg-opacity-80 text-white text-md rounded-md p-3
                -top-24 left-1/2 -translate-x-1/2 drop-shadow-lg"
                                    style={{ whiteSpace: "normal" ,fontFamily:"LISS" }}
                                >
                                    {step.description}
                                    <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-black bg-opacity-80 rotate-45"></div>
                                </div>
                            </div>

                            {/* 标题，容器变高一点 */}
                            <div className="bg-blue-600 hover:bg-blue-500 transition-colors duration-300 px-10 py-6 rounded-full text-2xl font-medium shadow-lg max-w-xs text-center" style={{fontFamily:"LISS"}}>
                                {step.title}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
