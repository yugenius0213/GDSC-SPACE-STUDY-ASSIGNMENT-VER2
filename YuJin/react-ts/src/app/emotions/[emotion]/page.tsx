import { Link, useParams } from 'react-router-dom'
import { emotionColorVariants } from '../../../styles/emotionCard'
import { EMOTION_DATA } from '../../constants/emotions'
import { Diary } from '../../../interface/diary'
import { useDiaryValue } from '../../../provider/Diary'
import { useState } from 'react'
import { dateFormatting } from '../../utils/dateFormat'

type EmotionPageParams = {
    emotion: Diary['emotion']
}
export default function EmotionPage() {
    const { emotion } = useParams<EmotionPageParams>()
    const savedDiaries = useDiaryValue()
    const filteredDiaries = savedDiaries.filter((diary) => diary.emotion === emotion)
    const [diariesToRemove, setDiariesToRemove] = useState<Diary[]>([])
    const handleCheckbox = (diaryId: string) => {
        setDiariesToRemove((prev) => {
            if (prev.some((diary) => diary.id === diaryId)) {
                return prev.filter((diary) => diary.id !== diaryId)
            } else {
                const diary = savedDiaries.find((diary) => diary.id === diaryId)
                return diary ? [...prev, diary] : prev
            }
        })
    }
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

            {filteredDiaries.length > 0 ? (
                <>
                    {filteredDiaries.map((diary) => (
                        <Link
                            to={`/detail/${diary.id}`}
                            key={diary.id}
                            className="w-full border border-x-primary-lightgray p-2 flex flex-row rounded-lg items-center justify-between"
                        >
                            <div className="flex flex-row items-center gap-6">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 border border-primary-gray rounded-sm accent-primary-lightgray"
                                    onChange={() => handleCheckbox(diary.id)}
                                    onClick={(e) => e.stopPropagation()}
                                ></input>
                                <div>{diary.title}</div>
                            </div>
                            <div className="flex flex-row gap-2 text-primary-gray">
                                <div>{dateFormatting(diary.date, 'medium')}</div>
                                <div>조회수: {diary.views}</div>
                            </div>
                        </Link>
                    ))}

                    <button
                        className={`w-full btn ${diariesToRemove.length > 0 ? 'red-btn red-btn:hover' : 'gray-btn gray-btn:hover'}  p-2`}
                    >
                        {diariesToRemove.length > 0
                            ? `선택된 ${diariesToRemove.length}개의 일기를 삭제합니다`
                            : '선택된 일기가 없습니다'}
                    </button>
                </>
            ) : (
                <h1 className="text-primary-gray">아직 적지 않았어요</h1>
            )}
        </div>
    )
}
