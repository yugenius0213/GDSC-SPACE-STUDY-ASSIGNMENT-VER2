import { useEffect, useState } from 'react'
import { updateDiaryStorage } from '../hooks/useLocalStorage'
import { Diary } from '../interface/diary'

function DiaryWriter() {
    const emotions: ('bad' | 'soso' | 'good' | 'great' | 'awesome')[] = ['bad', 'soso', 'good', 'great', 'awesome']
    const emotionEntries = emotions.map((emotion) => ({
        emotion: emotion,
    }))
    const weather: ('sunny' | 'cloud' | 'rain' | 'snow')[] = ['sunny', 'cloud', 'rain', 'snow']
    const weatherEntries = weather.map((weather) => ({
        weather: weather,
    }))
    const [isValid, setIsValid] = useState(false)
    const [title, setTitle] = useState('')
    const [emotionClicked, setEmotionClicked] = useState<Diary['emotion'] | undefined>()
    const [weatherClicked, setWeatherClicked] = useState<Diary['weather'] | undefined>()
    const [content, setContent] = useState('')
    useEffect(() => {
        const isTitleValid = title.length > 2
        const isContentValid = content.length > 5
        const isEmotionClicked = emotionClicked != undefined
        const isWeatherClicked = weatherClicked != undefined
        setIsValid(isTitleValid && isContentValid && isEmotionClicked && isWeatherClicked)
    }, [title, emotionClicked, weatherClicked, content])

    const add = updateDiaryStorage()
    const saveDiary = () => {
        add({
            id: window.crypto.randomUUID(),
            title: title,
            content: content,
            date: new Date(),
            emotion: emotionClicked!,
            weather: weatherClicked!,
        })

        // reset()
    }
    // const reset = () => {
    //     setTitle('')
    //     setContent('')
    //     setEmotionClicked(undefined)
    //     setWeatherClicked(undefined)
    // }
    return (
        <div className="w-full border border-bg-gray p-4 rounded-lg flex flex-col h-2/3">
            <input
                className="w-full p-2 text-2xl hover:border hover:rounded-lg focus:outline-none mt-4"
                placeholder="제목을 적어보세요"
                onChange={(e) => setTitle(e.target.value)}
            ></input>
            <div className="flex flex-col gap-2 py-8">
                <div className="flex flex-row gap-1">
                    {emotionEntries.map((entry, index) => (
                        <button
                            className={`flex ${emotionClicked == entry.emotion ? 'bg-primary-lightgreen text-primary-green' : 'bg-primary-lightgray text-primary-gray'} px-2 items-center justify-center rounded-lg`}
                            key={index}
                            onClick={() => setEmotionClicked(entry.emotion)}
                        >
                            {entry.emotion}
                        </button>
                    ))}
                </div>
                <div className="flex flex-row gap-1">
                    {weatherEntries.map((entry, index) => (
                        <button
                            className={`flex ${weatherClicked == entry.weather ? 'bg-primary-lightblue text-primary-blue' : 'bg-primary-lightgray text-primary-gray'} px-2 items-center justify-center rounded-lg`}
                            key={index}
                            onClick={() => setWeatherClicked(entry.weather)}
                        >
                            {entry.weather}
                        </button>
                    ))}
                </div>
            </div>
            <textarea
                className="w-full h-full focus:border focus:rounded-lg p-2 focus:outline-none "
                placeholder="오늘 당신의 하루는 어땠나요?"
                onChange={(e) => setContent(e.target.value)}
            ></textarea>

            {isValid ? (
                <button
                    className="w-full bg-primary-lightgreen rounded-lg py-2 text-lg text-primary-green"
                    onClick={saveDiary}
                >
                    일기를 저장해 보아요
                </button>
            ) : (
                <button className="w-full bg-primary-lightgray rounded-lg py-2 text-lg text-primary-gray">
                    일기를 더 자세히 적어볼까요?
                </button>
            )}
        </div>
    )
}
function DiaryViewer() {
    return (
        <div className="w-full border border-bg-gray p-4 rounded-lg flex flex-col h-2/3">
            <div className="text-xl text-primary-green text-bold mt-4">기록된 일기</div>
            <div className="flex flex-col py-4 gap-2 max-h-96 overflow-y-auto h-full justify-center ">
                <div className="border rounded-lg p-3 flex flex-col gap-2 ">
                    <div className="text-lg">ㅓㅏㅗㅓㅏ</div>
                    <div className="flex flex-row justify-between">
                        <div className="text-sm text-primary-gray">2024.12.17. </div>
                        <div className="flex flex-row">
                            <div className="rounded-full border w-6 h-6 flex items-center justify-center">🥲</div>
                            <div className="rounded-full border w-6 h-6 flex items-center justify-center">🥲</div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="w-full bg-primary-lightgreen rounded-lg py-2 text-lg text-primary-green">
                감정 모아보기
            </button>
        </div>
    )
}
export default function DiaryHomePage() {
    return (
        <div className="flex flex-col h-full gap-10 items-center justify-center md:grid md:grid-cols-2 md:md:grid-cols-[3fr,2fr] md:w-4/5 lg:w-2/3 ">
            <DiaryWriter />
            <DiaryViewer />
        </div>
    )
}
