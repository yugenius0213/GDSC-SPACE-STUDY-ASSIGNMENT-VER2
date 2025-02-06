import { useEffect, useState } from 'react'
import { updateDiaryStorage } from '../hooks/useLocalStorage'
import { Diary } from '../interface/diary'
import { useDiaryValue } from '../provider/Diary'
import { Link } from 'react-router-dom'
import { DiaryViewerBox } from '../components/diaryViewer/diaryViewerBox'
import { minContentLength, minTitleLength } from './constants'
import {
    DIARY_CONTENT_PLACEHOLDER,
    DIARY_TITLE_PLACEHOLDER,
    INVALID_SAVE_BUTTON_TEXT,
    VALID_SAVE_BUTTON_TEXT,
} from './constants'
import { DIARY_LIST_TITLE, EMPTY_DIARY, VIEW_EMOTIONS_BUTTON_TEXT } from './constants'
import { ROUTE_TYPE } from './constants'

type SavebuttonProps = {
    onClick: () => void
}
function SaveButton({ onClick }: SavebuttonProps) {
    return (
        <button className={`w-full btn green-btn py-2 text-lg transition-colors ease-in`} onClick={onClick}>
            {VALID_SAVE_BUTTON_TEXT}
        </button>
    )
}
function DisabledSaveButton() {
    return (
        <button className={`w-full btn gray-btn py-2 text-lg transition-colors ease-in`} disabled>
            {INVALID_SAVE_BUTTON_TEXT}
        </button>
    )
}

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

    const add = updateDiaryStorage().addDiary

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
        <div className="border-bg-lightgray flex h-2/3 w-full flex-col rounded-lg border p-4">
            <input
                className="mt-4 w-full p-2 text-2xl rounded-lg ring-primary-lightgray focus:ring-1 focus:outline-none"
                placeholder={DIARY_TITLE_PLACEHOLDER}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            ></input>
            <div className="flex flex-col gap-2 py-8">
                <div className="flex flex-row gap-1">
                    {emotions.map((emotion, index) => (
                        <button
                            className={`btn ${emotionClicked == emotion ? 'green-btn' : 'gray-btn'} px-2 active:translate-y-[1px] transition-colors ease-in`}
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
                            className={`btn ${weatherClicked == weather ? 'blue-btn' : 'gray-btn'} px-2 active:translate-y-[1px] transition-colors ease-in`}
                            key={index}
                            onClick={() => setWeatherClicked(weather)}
                        >
                            {weather}
                        </button>
                    ))}
                </div>
            </div>
            <textarea
                className="resize-none mb-4 h-full w-full p-2 focus:rounded-lg focus:border focus:outline-none ring-primary-lightgray focus:ring-1"
                placeholder={DIARY_CONTENT_PLACEHOLDER}
                onChange={(e) => setContent(e.target.value)}
                value={content}
            ></textarea>

            {isValid ? <SaveButton onClick={saveDiary} /> : <DisabledSaveButton />}
        </div>
    )
}

function DiaryViewer() {
    const diaryList = useDiaryValue()
    const isDiaryExsists = diaryList.length > 0
    return (
        <div className="border-bg-gray flex h-2/3 w-full flex-col justify-between rounded-lg border p-4">
            <div className="text-bold mt-4 text-xl text-primary-green">{DIARY_LIST_TITLE}</div>
            {isDiaryExsists ? (
                <div className="flex h-full max-h-96 flex-col justify-center gap-2 overflow-y-auto py-4">
                    {diaryList.map((diary, index) => (
                        <DiaryViewerBox diary={diary} key={index} />
                    ))}
                </div>
            ) : (
                <div className="text-primary-gray">{EMPTY_DIARY}</div>
            )}

            <Link to={ROUTE_TYPE.EMOTIONS}>
                <button className="w-full btn py-2 text-lg green-btn ">{VIEW_EMOTIONS_BUTTON_TEXT}</button>
            </Link>
        </div>
    )
}
export default function DiaryHomePage() {
    return (
        <div className="flex h-full flex-col items-center justify-center gap-10 md:grid md:w-4/5 md:grid-cols-2 md:md:grid-cols-[3fr,2fr] lg:w-2/3">
            <DiaryWriter />
            <DiaryViewer />
        </div>
    )
}
