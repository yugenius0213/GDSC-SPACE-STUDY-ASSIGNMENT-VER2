import { Link, useParams } from 'react-router-dom'
import { emotionColorVariants } from '../../../styles/emotionCard'
import { EMOTION_DATA } from '../../constants/emotions'
import { Diary } from '../../../interface/diary'
import { useDiaryValue } from '../../../provider/Diary'

type EmotionPageParams = {
    emotion: Diary['emotion']
}
export default function EmotionPage() {
    const { emotion } = useParams<EmotionPageParams>()
    const savedDiaries = useDiaryValue()
    const filteredDiaries = savedDiaries.filter((diary) => diary.emotion === emotion)

    return (
        <div className="flex flex-col justify-center items-start w-full md:w-2/3 gap-10">
            <div className="flex flex-row gap-4 items-center justify-center">
                <div
                    className={`flex items-center justify-center group-hover:shadow-inner ${emotionColorVariants[EMOTION_DATA[emotion!].color]} w-24 h-24 min-w-[6rem] min-h-[6rem] rounded-2xl text-6xl`}
                >
                    {EMOTION_DATA[emotion!].emoji}
                </div>
                <h1 className="text-3xl font-semibold">{EMOTION_DATA[emotion!].description}</h1>
            </div>

            <Link
                to={`/diary/}`}
                className="w-full border border-x-primary-lightgray p-2 flex flex-row rounded-lg items-center justify-between"
            >
                <div className="flex flex-row items-center gap-6">
                    <input
                        type="checkbox"
                        className="w-4 h-4 border border-primary-gray rounded-sm accent-primary-lightgray"
                    ></input>
                    <div>ㄹㅇㄹㄴㅇㄹㄴ</div>
                </div>
                <div className="flex flex-row gap-2 text-primary-gray">
                    <div>2025. 1. 16.</div>
                    <div>조회수:6</div>
                </div>
            </Link>

            <button className="w-full btn gray-btn gray-btn:hover p-2">선택된 일기가 없습니다</button>
        </div>
    )
}
