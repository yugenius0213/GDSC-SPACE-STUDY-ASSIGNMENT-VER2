import { EMOTION_LIST } from '../constants/emotions'

type EmotionColorVariants = {
    [key: string]: string
}

const emotionColorVariants: EmotionColorVariants = {
    yellow: 'bg-[#FEFCE8] border border-[#fef9c2] group-hover:bg-[#fef9c2] group-hover:border-[#fff085]',
    blue: 'bg-[#eff6ff] border border-[#dbeafe] group-hover:bg-[#dbeafe] group-hover:border-[#bedbff]',
    green: 'bg-[#f0fdf4] border border-[#dcfce7] group-hover:bg-[#dcfce7] group-hover:border-[#b9f8cf]',
    purple: 'bg-[#faf5ff] border border-[#f3e8ff] group-hover:bg-[#f3e8ff] group-hover:border-[#e9d4ff]',
    red: 'bg-[#fef2f2] border border-[#ffe2e2] group-hover:bg-[#ffe2e2] group-hover:border-[#ffc9c9]',
}
export default function EmotionLinkPage() {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col items-star gap-3">
                <h1 className="text-3xl font-semibold">감정 상자</h1>
                <h2 className="text-primary-gray">나만의 감정을 돌아보고 생각에 잠겨보아요 :)</h2>
            </div>
            <div className="grid grid-cols-2 gap-5">
                {EMOTION_LIST.map((emotion, index) => (
                    <div
                        key={index}
                        className="flex flex-row gap-4 border border-primary-lightgray hover:border-transparent p-3 rounded-2xl hover:shadow-2xl hover:scale-105 active:scale-100 transition-all ease-out duration-150 group"
                    >
                        <div
                            className={`flex items-center justify-center group-hover:shadow-inner w-24 h-24 min-w-[6rem] min-h-[6rem] rounded-2xl text-6xl ${emotionColorVariants[emotion.color]}`}
                        >
                            {emotion.emoji}
                        </div>
                        <div className="flex flex-col items-start justify-center pr-2">
                            <h1 className="text-2xl font-medium">{emotion.name}</h1>
                            <h2 className="text-primary-gray">{emotion.description}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
