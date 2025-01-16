import { useState, MouseEvent } from 'react'

type Emotion = 'bad' | 'soso' | 'good' | 'great' | 'awesome'
type Weather = 'cloud' | 'rain' | 'snow' | 'sunny'

const DiaryWriter = () => {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [weather, setWeather] = useState<Weather | ''>('')
    const [emotion, setEmotion] = useState<Emotion | ''>('')

    const emotions: Emotion[] = ['bad', 'soso', 'good', 'great', 'awesome']
    const weathers: Weather[] = ['cloud', 'rain', 'snow', 'sunny']

    const minTitleLength: number = 3
    const minContentLength: number = 6

    // 일기 제출 핸들러
    const handleSave = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(title, content, weather, emotion)
    }

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
                    {emotions.map((e, index) => (
                        <div key={index}>
                            <button
                                type="button"
                                className={`flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] w-full ${
                                    emotion === e
                                        ? 'p-2 cursor-pointer transition-colors ease-in bg-emerald-100 text-emerald-600 hover:border-emerald-600 hover:text-emerald-600'
                                        : 'p-02 cursor-pointer transition-colors ease-in bg-gray-100 text-gray-400 hover:border-gray-600 hover:text-gray-600'
                                } px-1.5 py-0.5 text-sm`}
                                onClick={() => setEmotion(e)}
                            >
                                {e}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row gap-1">
                    {weathers.map((w, index) => (
                        <div key={index}>
                            <button
                                type="button"
                                className={`flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] w-full ${
                                    weather === w
                                        ? 'p-2 cursor-pointer transition-colors ease-in bg-blue-100 text-blue-600 hover:border-blue-600 hover:text-blue-600'
                                        : 'p-02 cursor-pointer transition-colors ease-in bg-gray-100 text-gray-400 hover:border-gray-600 hover:text-gray-600'
                                } px-1.5 py-0.5 text-sm`}
                                onClick={() => setWeather(w)}
                            >
                                {w}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <textarea
                className="p-2 mt-4 rounded-md transition ring-gray-100 focus:outline-none focus:ring-1 placeholder:text-gray-400 h-full resize-none"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="오늘 당신의 하루는 어땠나요?"
            ></textarea>
            {title.length < minTitleLength || content.length < minContentLength ? (
                <button
                    type="button"
                    className="flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] w-full p-2 cursor-pointer transition-colors ease-in bg-gray-100 text-gray-400 hover:border-gray-600 hover:text-gray-600"
                >
                    일기를 더 자세히 적어볼까요?
                </button>
            ) : (
                <button
                    type="submit"
                    className="flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] w-full p-2 cursor-pointer transition-colors ease-in bg-emerald-100 text-emerald-600 hover:border-emerald-600 hover:text-emerald-600"
                    onClick={(e) => handleSave(e)}
                >
                    일기를 저장해 보아요
                </button>
            )}
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
