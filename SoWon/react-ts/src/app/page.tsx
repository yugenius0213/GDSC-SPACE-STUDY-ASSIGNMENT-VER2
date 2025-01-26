import { useState, useEffect, FormEvent } from 'react'
import { Diary } from '../interface/diary'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { useDiaryValue } from '../provider/Diary'
import DiaryCardList from '../components/diary/DiaryCardList'
import useDiaryManager from '../hooks/useDiaryManager'

const DiaryWriter = () => {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [weather, setWeather] = useState<Diary['weather'] | undefined>()
    const [emotion, setEmotion] = useState<Diary['emotion'] | undefined>()
    const [isValid, setIsValid] = useState<boolean>(false)

    const emotions: Diary['emotion'][] = ['bad', 'soso', 'good', 'great', 'awesome']
    const weathers: Diary['weather'][] = ['cloud', 'rain', 'snow', 'sunny']

    const { addDiary } = useDiaryManager()
    const minTitleLength: number = 3
    const minContentLength: number = 6

    useEffect(() => {
        const hasInvalidFields =
            title.length < minTitleLength ||
            content.length < minContentLength ||
            weather === undefined ||
            emotion === undefined

        setIsValid(!hasInvalidFields)
    }, [title, content, weather, emotion])

    const resetDiaryValue = () => {
        setTitle('')
        setContent('')
        setWeather(undefined)
        setEmotion(undefined)
    }

    // 일기 제출 핸들러
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isValid) {
            const newDiary: Diary = {
                id: window.crypto.randomUUID(),
                date: new Date(),
                title: title,
                content: content,
                emotion: emotion!,
                weather: weather!,
                views: 1,
            }

            addDiary(newDiary)
            resetDiaryValue()
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-4 rounded-lg bg-white border border-gray-100 w-full h-2/3 min-h-[20rem]"
        >
            <input
                className="diary-input text-2xl"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목을 적어보세요"
            />
            <div className="flex flex-col gap-2 pt-4">
                <div className="flex flex-row gap-1">
                    {emotions.map((e, index) => (
                        <button
                            key={index}
                            type="button"
                            className={
                                emotion === e
                                    ? 'btn btn-emotion'
                                    : 'btn btn-invalid cursor-pointer transition-colors ease-in px-1.5 py-0.5 text-sm'
                            }
                            onClick={() => setEmotion(e)}
                        >
                            {e}
                        </button>
                    ))}
                </div>
                <div className="flex flex-row gap-1">
                    {weathers.map((w, index) => (
                        <button
                            key={index}
                            type="button"
                            className={
                                weather === w
                                    ? 'btn btn-weather'
                                    : 'btn btn-invalid cursor-pointer transition-colors ease-in px-1.5 py-0.5 text-sm'
                            }
                            onClick={() => setWeather(w)}
                        >
                            {w}
                        </button>
                    ))}
                </div>
            </div>
            <textarea
                className="diary-input h-full resize-none"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="오늘 당신의 하루는 어땠나요?"
            ></textarea>
            <Button isValid={isValid}>{isValid ? '일기를 저장해 보아요' : '일기를 더 자세히 적어볼까요?'}</Button>
        </form>
    )
}

const DiaryHistory = () => {
    return (
        <div className="w-full flex flex-col items-start gap-4 p-4 justify-between rounded-lg bg-white border border-gray-100 h-2/3 min-h-[20rem]">
            <h1 className="text-xl mt-5 text-emerald-600">기록된 일기</h1>
            <DiaryCardList diary={useDiaryValue()} />
            <Link to="/emotions" className="btn btn-valid w-full">
                감정 모아보기
            </Link>
        </div>
    )
}

export default function DiaryHomePage() {
    return (
        <div className="min-h-screen max-h-screen h-screen w-full bg-white flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-10 h-full md:grid md:grid-rows-1 md:grid-cols-[3fr,2fr] md:w-4/5 lg:w-2/3">
                <DiaryWriter />
                <DiaryHistory />
            </div>
        </div>
    )
}
