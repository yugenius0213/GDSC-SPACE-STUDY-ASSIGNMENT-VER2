import { useEffect, useState } from 'react'
import { useDiaryUpdate, useDiaryValue } from '../provider/Diary'
import { Diary } from '../interface/diary'
import { Link } from '../components/Link'
import { EMOTION } from './constants/emotion'
import { WEATHER } from './constants/weather'

function DiaryWriter() {
    const [title, setTitle] = useState<string>('')
    const [emotion, setEmotion] = useState<Diary['emotion'] | undefined>()
    const [weather, setWeather] = useState<Diary['weather'] | undefined>()
    const emotions: Diary['emotion'][] = ['bad', 'soso', 'good', 'great', 'awesome']
    const weathers: Diary['weather'][] = ['cloud', 'rain', 'snow', 'sunny']
    const [contents, setContents] = useState<string>('')
    const [isValid, setIsValid] = useState(false)

    const updateDiaries = useDiaryUpdate()

    useEffect(() => {
        const isNotValidCondition =
            emotion === undefined || weather === undefined || title.length <= 2 || contents.length <= 5
        setIsValid(!isNotValidCondition)
    }, [title, emotion, weather, contents])

    const saveDiary = () => {
        if (!emotion || !weather) {
            return
        }

        const newDiary: Diary = {
            id: crypto.randomUUID(),
            date: new Date(),
            title,
            content: contents,
            emotion: emotion,
            weather: weather,
            views: 0,
        }

        const existingDiaries = JSON.parse(localStorage.getItem('diaries') || '[]') as Diary[]
        const updatedDiaries = [...existingDiaries, newDiary]

        localStorage.setItem('diaries', JSON.stringify(updatedDiaries))
        updateDiaries(updatedDiaries)

        setTitle('')
        setEmotion(undefined)
        setWeather(undefined)
        setContents('')
    }

    return (
        <div className="flex flex-col gap-4 p-4 rounded-lg bg-white border border-gray-100 w-full h-2/3 min-h-[20rem]">
            <input
                className="p-2 mt-4 rounded-md transition ring-gray-100 text-2xl focus:outline-none focus:ring-1 placeholder:text-gray-400"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목을 적어보세요"
            />
            <div className="flex flex-col gap-2 pt-4">
                <div className="flex flex-row gap-1">
                    {emotions.map((selectedEmotion, index) => (
                        <button
                            key={index}
                            className={`flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] p-2 cursor-pointer transition-colors ease-in px-1.5 py-0.5 text-sm ${
                                emotion === selectedEmotion
                                    ? 'bg-emerald-100 text-emerald-600 hover:border-emerald-600 hover:text-emerald-600'
                                    : 'bg-gray-100 text-gray-400 hover:border-gray-600 hover:text-gray-600'
                            }`}
                            onClick={() => setEmotion(selectedEmotion)}
                        >
                            {selectedEmotion}
                        </button>
                    ))}
                </div>
                <div className="flex flex-row gap-1">
                    {weathers.map((selectedWeather, index) => (
                        <button
                            key={index}
                            className={`flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] p-2 cursor-pointer transition-colors ease-in px-1.5 py-0.5 text-sm ${
                                weather === selectedWeather
                                    ? 'bg-blue-100 text-blue-600 hover:border-blue-600 hover:text-blue-600'
                                    : 'bg-gray-100 text-gray-400 hover:border-gray-600 hover:text-gray-600'
                            }`}
                            onClick={() => setWeather(selectedWeather)}
                        >
                            {selectedWeather}
                        </button>
                    ))}
                </div>
            </div>
            <textarea
                className="p-2 mt-4 rounded-md transition ring-gray-100 h-full resize-none focus:outline-none focus:ring-1 placeholder:text-gray-400"
                value={contents}
                onChange={(e) => setContents(e.target.value)}
                placeholder="오늘 당신의 하루는 어땠나요?"
                maxLength={1000}
            />
            <button
                className={`flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] w-full p-2 cursor-pointer transition-colors ease-in ${
                    isValid
                        ? 'bg-emerald-100 text-emerald-600 hover:border-emerald-600 hover:text-emerald-600'
                        : 'bg-gray-100 text-gray-400 hover:border-gray-600 hover:text-gray-600'
                }`}
                disabled={!isValid}
                onClick={saveDiary}
            >
                {isValid ? '일기를 저장해 보아요' : '일기를 더 자세히 적어볼까요?'}
            </button>
        </div>
    )
}

function DiaryRecord() {
    const diaries = useDiaryValue()
    const updateDiaries = useDiaryUpdate()

    useEffect(() => {
        const storedDiaries = JSON.parse(localStorage.getItem('diaries') || '[]') as Diary[]
        updateDiaries(storedDiaries)
    }, [updateDiaries])

    return (
        <div className="w-full flex flex-col items-start gap-4 p-4 justify-between rounded-lg bg-white border border-gray-100 h-2/3 min-h-[20rem]">
            <h1 className="text-xl mt-5 text-emerald-600">기록된 일기</h1>
            {diaries.length > 0 ? (
                <div className="flex flex-col overflow-y-auto gap-2 w-full max-h-96">
                    {diaries.map((diary) => (
                        <Link
                            to={`/detail/${diary.id}`}
                            className="flex flex-col items-start justify-center gap-1.5 p-3 hover:bg-gray-50 trasition cursor-pointer border border-gray-100 rounded-lg"
                        >
                            <h1 className="text-base text-gray-800">{diary.title}</h1>
                            <div className="flex flex-row items-center justify-between gap-1 w-full">
                                <span className="text-gray-400 text-sm">
                                    {new Date(diary.date).toLocaleDateString()}
                                </span>
                                <div className="flex flex-row gap-1s">
                                    <div className="w-6 h-6 p-1 flex items-center justify-center rounded-full border border-gray-100">
                                        {EMOTION[diary.emotion].emoji}
                                    </div>
                                    <div className="w-6 h-6 p-1 flex items-center justify-center rounded-full border border-gray-100">
                                        {WEATHER[diary.weather]}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="flex items-center justify-center text-gray-400">일기를 적어보세요</div>
            )}
            <Link
                to="/emotions"
                className="flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] w-full p-2 cursor-pointer transition-colors ease-in bg-emerald-100 text-emerald-600 hover:border-emerald-600 hover:text-emerald-600"
            >
                감정 모아보기
            </Link>
        </div>
    )
}

export default function DiaryHomePage() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-white">
            <div className="flex flex-col items-center justify-center gap-10 h-full md:grid md:grid-rows-1 md:grid-cols-[3fr,2fr] md:w-4/5 lg:w-2/3">
                <DiaryWriter />
                <DiaryRecord />
            </div>
        </div>
    )
}