import { EMOTION_LIST } from '../constants/emotions'

export default function EmotionLinkPage() {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col items-star gap-3">
                <h1 className="text-3xl font-semibold">감정 상자</h1>
                <h2 className="text-primary-gray">나만의 감정을 돌아보고 생각에 잠겨보아요 :)</h2>
            </div>
            <div className="grid grid-cols-2 gap-5">
                {EMOTION_LIST.map((emotion, index) => (
                    <div key={index} className="flex flex-row gap-4 border p-3 rounded-2xl">
                        <div
                            className={`flex items-center justify-center  bg-${emotion.emotion} border border-${emotion.emotion}-border 
                hover:bg-${emotion.emotion}-hover hover:border-${emotion.emotion}-hover-border w-24 h-24 rounded-2xl text-6xl`}
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
