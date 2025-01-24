import { useEffect, useState } from 'react'
import { Diary } from '../interface/diary'
import DiaryCard from '../components/DiaryCard'
import { useDiaryValue, useDiaryUpdate } from '../provider/Diary'

const DiaryWriter = () => {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [emotion, setEmotion] = useState<Diary['emotion'] | undefined>()
    const [weather, setWeather] = useState<Diary['weather'] | undefined>()
    const [isValid, setIsValid] = useState<boolean>(false)
    const updateDiaries = useDiaryUpdate()

    useEffect(() => {
        const isInvalid = title.length < 2 || content.length < 6 || !emotion || !weather

        setIsValid(!isInvalid)
    }, [title, content, emotion, weather])

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
    }
    const handleSaveDiary = () => {
        if (!isValid) return

        const newDiary: Diary = {
            id: crypto.randomUUID(),
            date: new Date(),
            title,
            content,
            emotion: emotion!,
            weather: weather!,
            views: 1,
        }

        try {
            const savedDiaries: Diary[] = JSON.parse(localStorage.getItem('diaries') || '[]')

            localStorage.setItem('diaries', JSON.stringify([...savedDiaries, newDiary]))
            updateDiaries((prev) => [...prev, newDiary])

            setTitle('')
            setContent('')
            setEmotion(undefined)
            setWeather(undefined)

            console.log('일기 저장 성공')
        } catch (error) {
            console.error('일기 저장 실패', error)
            alert('일기 저장 실패. 다시 시도 하십시오.')
        }
    }

    return (
        <>
            <div className="flex flex-col gap-4 p-4 justify-between h-2/3 w-full border border-gray-200 rounded-lg">
                <input
                    className="text-2xl mt-4 input-box"
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
                                className={`p-1
                                    ${emotion === emotionType ? 'green-btn' : 'gray-btn'}
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
                                className={`p-1
                                ${weather === weatherType ? 'blue-btn' : 'gray-btn'}
                            `}
                            >
                                {weatherType}
                            </button>
                        ))}
                    </div>
                </div>
                <textarea
                    className="h-1/2 text-m input-box"
                    value={content}
                    onChange={handleContentChange}
                    placeholder="오늘 당신의 하루는 어땠나요?"
                />
                <button
                    className={`p-2
                    ${isValid ? 'green-btn' : 'gray-btn'}`}
                    onClick={handleSaveDiary}
                >
                    {isValid ? '일기를 저장해 보아요' : '일기를 더 자세히 적어볼까요?'}
                </button>
            </div>
        </>
    )
}

const DiaryViewer = () => {
    const diaries = useDiaryValue()
    const isDiaryExist = diaries.length > 0

    return (
        <div className="flex flex-col gap-4 p-4 justify-between h-2/3 w-full border border-gray-200 rounded-lg">
            <h1 className="text-xl text-green-600 mt-4">기록된 일기</h1>
            {isDiaryExist ? (
                <div className="flex flex-col gap-2 overflow-y-auto">
                    {diaries.map((diaries) => (
                        <DiaryCard key={diaries.id} {...diaries} />
                    ))}
                </div>
            ) : (
                <h1 className="flex items-center justify-start text-gray-400">일기를 적어보세요</h1>
            )}

            <button className="green-btn p-2">감정 모아 보기</button>
        </div>
    )
}

export default function DiaryHomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-10 md:grid md:grid-rows-1 md:grid-cols-[3fr,2fr] md:w-4/5 lg:w-2/3">
            <DiaryWriter />
            <DiaryViewer />
        </div>
    )
}
