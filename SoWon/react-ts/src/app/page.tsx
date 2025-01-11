import { useState } from 'react'

const DiaryWriter = () => {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [weather, setWeather] = useState<string>('')
    const [emotion, setEmotion] = useState<string>('')

    const emotions: string[] = ['bad', 'soso', 'good', 'great', 'awesome']
    const weathers: string[] = ['cloud', 'rain', 'snow', 'sunny']

    return (
        <div className="flex flex-col gap-4 p-4 rounded-lg bg-white border border-gray-100 w-full h-2/3 min-h-[20rem]">
            <input
                className="p-2 mt-4 rounded-md transition ring-gray-100 focus:outline-none focus:ring-1 placeholder:text-gray-400 text-2xl"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목을 적어보세요"
            />
            <div className="flex flex-col gap-2 pt-4">
                <div className="flex flex-row gap-1">
                    {emotions.map((emotion, index) => (
                        <div key={index}>
                            <button
                                type="button"
                                className="flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] w-full p-02 cursor-pointer transition-colors ease-in bg-gray-100 text-gray-400 hover:border-gray-600 hover:text-gray-600 px-1.5 py-0.5 text-sm"
                            >
                                {emotion}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row gap-1">
                    {weathers.map((emotion, index) => (
                        <div key={index}>
                            <button
                                type="button"
                                className="flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] w-full p-02 cursor-pointer transition-colors ease-in bg-gray-100 text-gray-400 hover:border-gray-600 hover:text-gray-600 px-1.5 py-0.5 text-sm"
                            >
                                {emotion}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <textarea
                className="p-2 mt-4 rounded-md transition ring-gray-100 focus:outline-none focus:ring-1 placeholder:text-gray-400 h-full resize-none"
                value={content}
                placeholder="오늘 당신의 하루는 어땠나요?"
            ></textarea>
            <button className="flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] w-full p-2 cursor-pointer transition-colors ease-in bg-gray-100 text-gray-400 hover:border-gray-600 hover:text-gray-600">
                일기를 더 자세히 적어볼까요?
            </button>
        </div>
    )
}

const DiaryHistory = () => {
    return (
        <div className="w-full flex flex-col items-start gap-4 p-4 justify-between rounded-lg bg-white border border-gray-100 h-2/3 min-h-[20rem]">
            <h1 className="text-xl mt-5 text-emerald-600">기록된 일기</h1>
            <div className="flex items-center justify-center text-gray-400">일기를 적어보세요</div>
            <a className="flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] w-full p-2 cursor-pointer transition-colors ease-in bg-emerald-100 text-emerald-600 hover:border-emerald-600 hover:text-emerald-600">
                감정 모아보기
            </a>
        </div>
    )
}

export default function DiaryHomePage() {
    return (
        <main className="min-h-screen max-h-screen h-screen w-full bg-white flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-10 h-full md:grid md:grid-rows-1 md:grid-cols-[3fr,2fr] md:w-4/5 lg:w-2/3">
                <DiaryWriter />
                <DiaryHistory />
            </div>
        </main>
    )
}
