import { useEffect, useState } from 'react'
import { Diary } from '../interface/diary'
import { Link } from 'react-router-dom'

type Emotion = Diary['emotion']
type Weather = Diary['weather']

const emotions: Emotion[] = ['bad', 'soso', 'good', 'great', 'awesome']
const weathers: Weather[] = ['sunny', 'cloud', 'rain', 'snow']

interface DiaryProps {
    diary: Diary
}

export const DIARYKEY = 'diary-storage'

const EmotionIcon = ({ emotion }: { emotion: Diary['emotion'] }) => {
    const icons: Record<Diary['emotion'], string> = {
        bad: '🤬',
        soso: '😗',
        good: '😙',
        great: '😃',
        awesome: '😎',
    }
    return <span>{icons[emotion]}</span>
}

const WeatherIcon = ({ weather }: { weather: Diary['weather'] }) => {
    const icons: Record<Diary['weather'], string> = {
        sunny: '☀',
        cloud: '☁',
        rain: '🌧',
        snow: '❄',
    }
    return <span>{icons[weather]}</span>
}

function saveDiary(title: string, contents: string, selectedEmotion: Emotion, selectedWeather: Weather) {
    const storedData: Diary[] = JSON.parse(localStorage.getItem(DIARYKEY)!) || []
    const newDiaryObj = {
        id: window.crypto.randomUUID(),
        title: title,
        content: contents,
        date: new Date(),
        emotion: selectedEmotion!,
        weather: selectedWeather!,
        views: 1,
    }

    localStorage.setItem(DIARYKEY, JSON.stringify([...storedData, newDiaryObj]))
}

const DiaryCard: React.FC<DiaryProps> = ({ diary }) => {
    const formatDate = (date: Date): string => {
        const strDate = date.toString()

        const year = strDate.substring(0, 4)
        const month = strDate.substring(5, 7)
        const day = strDate.substring(8, 10)
        return `${year}. ${month}. ${day}.`
    }

    return (
        <Link to={`detail/${diary.id}`} key={diary.id}>
            <button className="w-full flex flex-col items-start justify-center gap-1.5 p-3 hover:bg-gray-50 border border-gray-100 rounded-lg">
                <h1>{diary.title}</h1>
                <div className="flex flex-row items-center justify-between gap-1 w-full">
                    <span className="text-gray-400 text-sm">{formatDate(diary.date)}</span>
                    <div className="flex flex-row gap-1s">
                        <EmotionIcon emotion={diary.emotion} />
                        <WeatherIcon weather={diary.weather} />
                    </div>
                </div>
            </button>
        </Link>
    )
}

const DiaryWriter = () => {
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')
    const [selectedEmotion, setSelectedEmotion] = useState<Emotion | undefined>()
    const [selectedWeather, setSelectedWeather] = useState<Weather | undefined>()
    const [isValid, setValid] = useState(false)

    const handleEmotionClick = (emotion: string) => {
        setSelectedEmotion(emotion as Emotion)
    }
    const handleWeatherClick = (weather: string) => {
        setSelectedWeather(weather as Weather)
    }
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleContentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContents(e.target.value)
    }

    useEffect(() => {
        const invalidDiary =
            selectedEmotion === undefined || selectedWeather === undefined || title.length <= 2 || contents.length <= 5

        setValid(!invalidDiary)
    }, [title, contents, selectedEmotion, selectedWeather])

    return (
        <form id="write-form" className="flex-col gap-4 p-4 rounded-lg bg-white border border-gray-100 h-2/3">
            <input
                required
                type="text"
                className="inputfield-text mt-2 text-2xl"
                placeholder="제목을 적어보세요."
                onChange={handleTitleChange}
            />
            <div className="flex mt-6 gap-2">
                {emotions.map((emotion, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`${selectedEmotion === emotion ? 'green-btn' : 'default-btn'}`}
                        name="feeling"
                        value={emotion}
                        onClick={() => handleEmotionClick(emotion)}
                    >
                        {emotion}
                    </button>
                ))}
            </div>
            <div className="flex mt-2 mb-6 gap-2">
                {weathers.map((weather, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`${selectedWeather === weather ? 'blue-btn' : 'default-btn'}`}
                        name="weather"
                        value={weather}
                        onClick={() => handleWeatherClick(weather)}
                    >
                        {weather}
                    </button>
                ))}
            </div>
            <textarea
                required
                className="inputfield-text resize-none h-1/2 mb-2"
                placeholder="오늘 당신의 하루는 어땠나요?"
                onChange={handleContentsChange}
            />
            <button
                type="submit"
                disabled={!isValid}
                className={`${isValid ? 'green-btn' : 'default-btn'} w-full p-3`}
                onClick={() => saveDiary(title, contents, selectedEmotion as Emotion, selectedWeather as Weather)}
            >
                {isValid ? '일기를 저장해 보아요' : '일기를 더 자세히 적어볼까요?'}
            </button>
        </form>
    )
}

const DiaryStorage = () => {
    const storedData: Diary[] = JSON.parse(localStorage.getItem(DIARYKEY)!) || []

    return (
        <div className="flex flex-col gap-4 p-4 rounded-lg bg-white border border-gray-100 h-2/3 min-h-[20rem]">
            <h1 className="text-xl text-emerald-600 mt-2">기록된 일기</h1>
            <div className="flex flex-col overflow-y-auto gap-2 w-full h-96 max-h-96">
                {storedData.length === 0 && (
                    <p className="flex justify-center items-center text-gray-400 text-sm">일기를 적어보세요</p>
                )}
                {storedData.map((diary) => (
                    <DiaryCard key={diary.id} diary={diary} />
                ))}
            </div>
            <Link to="/emotions">
                <button type="submit" className="green-btn w-full p-3">
                    감정 모아보기
                </button>
            </Link>
        </div>
    )
}

export default function DiaryHomePage() {
    return (
        <div className="flex flex-col items-center justify-center gap-10 h-full md:grid md:grid-rows-1 md:grid-cols-[3fr,2fr] md:w-4/5 lg:w-2/3">
            <DiaryWriter />
            <DiaryStorage />
        </div>
    )
}
