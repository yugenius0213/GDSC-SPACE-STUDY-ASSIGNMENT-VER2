import { useEffect, useState } from 'react'
import { updateDiaryStorage } from '../hooks/useLocalStorage'
import { Diary } from '../interface/diary'
import { useDiaryValue } from '../provider/Diary'
import { Link } from 'react-router-dom'
import { DiaryViewerBox } from '../components/diaryViewer/diaryViewerBox'
import { minContentLength, minTitleLength } from './constants/contraints'
import {
    DIARY_CONTENT_PLACEHOLDER,
    DIARY_LIST_TITLE,
    DIARY_TITLE_PLACEHOLDER,
    INVALID_SAVE_BUTTON_TEXT,
    VALID_SAVE_BUTTON_TEXT,
    VIEW_EMOTIONS_BUTTON_TEXT,
} from './constants/diaryInputs'

function DiaryWriter() {
    const emotions: Diary['emotion'][] = ['bad', 'soso', 'good', 'great', 'awesome']
    const weather: Diary['weather'][] = ['sunny', 'cloud', 'rain', 'snow']
    const [isValid, setIsValid] = useState(false)
    const [title, setTitle] = useState('')
    const [emotionClicked, setEmotionClicked] = useState<Diary['emotion'] | undefined>()
    const [weatherClicked, setWeatherClicked] = useState<Diary['weather'] | undefined>()
    const [content, setContent] = useState('')

    useEffect(() => {
        const condition =
            title.length <= minTitleLength ||
            content.length <= minContentLength ||
            emotionClicked == undefined ||
            weatherClicked == undefined
        setIsValid(!condition)
    }, [title, emotionClicked, weatherClicked, content])

    const add = updateDiaryStorage()

    const saveDiary = () => {
        if (!isValid) return

        add({
            id: window.crypto.randomUUID(),
            title: title,
            content: content,
            date: new Date(),
            emotion: emotionClicked!,
            weather: weatherClicked!,
        })

        reset()
    }

    const reset = () => {
        setTitle('')
        setContent('')
        setEmotionClicked(undefined)
        setWeatherClicked(undefined)
    }
    return (
        <div className="w-full border border-bg-gray p-4 rounded-lg flex flex-col h-2/3">
            <input
                className="w-full p-2 text-2xl hover:border hover:rounded-lg focus:outline-none mt-4"
                placeholder={DIARY_TITLE_PLACEHOLDER}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            ></input>
            <div className="flex flex-col gap-2 py-8">
                <div className="flex flex-row gap-1">
                    {emotions.map((emotion, index) => (
                        <button
                            className={`flex ${emotionClicked == emotion ? 'bg-primary-lightgreen text-primary-green' : 'bg-primary-lightgray text-primary-gray'} px-2 items-center justify-center rounded-lg`}
                            key={index}
                            onClick={() => setEmotionClicked(emotion)}
                        >
                            {emotion}
                        </button>
                    ))}
                </div>
                <div className="flex flex-row gap-1">
                    {weather.map((weather, index) => (
                        <button
                            className={`flex ${weatherClicked == weather ? 'bg-primary-lightblue text-primary-blue' : 'bg-primary-lightgray text-primary-gray'} px-2 items-center justify-center rounded-lg`}
                            key={index}
                            onClick={() => setWeatherClicked(weather)}
                        >
                            {weather}
                        </button>
                    ))}
                </div>
            </div>
            <textarea
                className="w-full h-full focus:border focus:rounded-lg p-2 focus:outline-none mb-4 "
                placeholder={DIARY_CONTENT_PLACEHOLDER}
                onChange={(e) => setContent(e.target.value)}
                value={content}
            ></textarea>

            <button
                className={`w-full ${isValid ? 'bg-primary-lightgreen text-primary-green' : 'bg-primary-lightgray text-primary-gray'} rounded-lg py-2 text-lg `}
                onClick={saveDiary}
            >
                {isValid ? VALID_SAVE_BUTTON_TEXT : INVALID_SAVE_BUTTON_TEXT}
            </button>
        </div>
    )
}

function DiaryViewer() {
    const diaryList = useDiaryValue()
    return (
        <div className="w-full border border-bg-gray p-4 rounded-lg flex flex-col h-2/3 flex justify-between">
            <div className="text-xl text-primary-green text-bold mt-4">{DIARY_LIST_TITLE}</div>
            <div className="flex flex-col py-4 gap-2 max-h-96 overflow-y-auto h-full justify-center ">
                {diaryList.map((diary, index) => (
                    <DiaryViewerBox diary={diary} key={index} />
                ))}
            </div>
            <Link to="/emotions">
                <button className="w-full bg-primary-lightgreen rounded-lg py-2 text-lg text-primary-green">
                    {VIEW_EMOTIONS_BUTTON_TEXT}
                </button>
            </Link>
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
