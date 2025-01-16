import { useEffect, useState } from 'react'
import { Diary } from '../interface/diary'

type Emotion = Diary['emotion']
type Weather = Diary['weather']

const emotions: Emotion[] = ['bad', 'soso', 'good', 'great', 'awesome']
const weathers: Weather[] = ['sunny', 'cloud', 'rain', 'snow']

export const DIARYKEY = 'diary-storage'

const EmotionIcon = ({ emotion }: { emotion: Diary['emotion'] }) => {
    const icons: Record<Diary['emotion'], string> = {
        bad: '😞',
        soso: '😐',
        good: '🙂',
        great: '😃',
        awesome: '🌟',
    }
    return <span>{icons[emotion]}</span>
}

function saveDiary(
    title: string,
    contents: string,
    selectedEmotion: Emotion,
    selectedWeather: Weather
) {
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

const DiaryWriter = () => {
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')
    const [selectedEmotion, setSelectedEmotion] = useState('')
    const [selectedWeather, setSelectedWeather] = useState('')
    const [isValid, setValid] = useState(false)

    const handleEmotionClick = (emotion: string) => {
        setSelectedEmotion(emotion)
    }
    const handleWeatherClick = (weather: string) => {
        setSelectedWeather(weather)
    }
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleContentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContents(e.target.value)
    }

    useEffect(() => {
        const invalidDiary =
            selectedEmotion === '' || selectedWeather === '' || title.length <= 2 || contents.length <= 5

        setValid(!invalidDiary)
    }, [title, contents, selectedEmotion, selectedWeather])

    return (
        <div className="flex-col gap-4 p-4 rounded-lg bg-white border border-gray-100 h-2/3">
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
        </div>
    )
}

export default function DiaryHomePage() {
    return (
        <div className="flex flex-col items-center justify-center gap-10 h-full md:grid md:grid-rows-1 md:grid-cols-[3fr,2fr] md:w-4/5 lg:w-2/3">
            <DiaryWriter />
        </div>
    )
}
