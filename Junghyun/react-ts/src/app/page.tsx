import { useEffect, useState } from 'react'
import { Diary } from '../interface/diary'
import DiaryCard from '../components/DiaryCard'

const DiaryWriter = () => {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [emotion, setEmotion] = useState<Diary['emotion']>()
    const [weather, setWeather] = useState<Diary['weather']>()
    const [isValid, setIsValid] = useState<boolean>(false)

    useEffect(() => {
        const isInvalid = title.length < 1 || content.length < 3 || !emotion || !weather
        setIsValid(!isInvalid)
    }, [title, content, emotion, weather])

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
    }

    return (
        <>
            <div className="flex flex-col gap-4 p-4 justify-between h-2/3 w-full border border-gray-200 rounded-lg">
                <input
                    className="rounded-lg p-2 text-2xl mt-4
                    focus:outline-none focus:ring-1 focus:ring-gray-200"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="제목을 적어보세요"
                />
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-1 text-sm">
                        {(['bad', 'soso', 'good', 'great', 'awesome'] as Diary['emotion'][]).map((emotionType) => (
                            <button
                                key={emotionType}
                                onClick={() => setEmotion(emotionType)}
                                className={`border border-transparent p-1 rounded-lg
                                    ${
                                        emotion === emotionType
                                            ? 'bg-green-200 text-green-600 hover:border-green-600'
                                            : 'bg-gray-200  text-gray-500 hover:border-gray-600 hover:text-gray-600'
                                    }
                                `}
                            >
                                {emotionType}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-row gap-1 text-sm">
                        {(['sunny', 'cloud', 'rain', 'snow'] as Diary['weather'][]).map((weatherType) => (
                            <button
                                key={weatherType}
                                onClick={() => setWeather(weatherType)}
                                className={`border border-transparent p-1 rounded-lg
                                ${
                                    weather === weatherType
                                        ? 'bg-blue-200 text-blue-600 hover:border-blue-600'
                                        : 'bg-gray-200  text-gray-500 hover:border-gray-600 hover:text-gray-600'
                                }
                            `}
                            >
                                {weatherType}
                            </button>
                        ))}
                    </div>
                </div>
                <textarea
                    className="rounded-lg p-2 h-1/2 text-m
                    focus:outline-none focus:ring-1 focus:ring-gray-200"
                    value={content}
                    onChange={handleContentChange}
                    placeholder="오늘 당신의 하루는 어땠나요?"
                />
                <button
                    className={`p-2 rounded-lg
                    ${isValid ? 'bg-green-200 text-green-600' : 'bg-gray-200 text-gray-500'}`}
                >
                    {isValid ? '일기를 저장해 보아요' : '일기를 더 자세히 적어볼까요?'}
                </button>
            </div>
        </>
    )
}
export default function DiaryHomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-10 md:grid md:grid-rows-1 md:grid-cols-[3fr,2fr] md:w-4/5 lg:w-2/3">
            <DiaryWriter />

            <div className="flex flex-col gap-4 p-4 justify-between h-2/3 w-full border border-gray-200 rounded-lg">
                <h1 className="text-xl text-green-600 mt-4">기록된 일기</h1>
                {/* <div className="text-gray-400">일기를 적어보세요</div> */}
                <DiaryCard />
                <button className="bg-green-100 p-2 rounded-lg text-green-600">감정 모아 보기</button>
            </div>
        </div>
    )
}
