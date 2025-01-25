import { useParams } from 'react-router-dom'
import { Diary } from '../../../interface/diary'
import { DIARYKEY } from '../../../app/page'
import { useEffect, useState } from 'react'

type DiaryDetailPageParams = {
    id: string
}

export default function DiaryDetailPage() {
    const { id } = useParams<DiaryDetailPageParams>()
    const storedData: Diary[] = JSON.parse(localStorage.getItem(DIARYKEY)!) || []
    const [diary, setDiary] = useState<Diary | undefined>()

    useEffect(() => {
        setDiary(storedData.find((item) => item.id === id))
    }, [id])

    return (
        <div className="w-2/4 h-full py-20">
            <div className="flex flex-col gap-4 my-9">
                <h1 className="text-4xl font-medium">{diary?.title}</h1>
                <div className="flex flex-row gap-2">
                    <button className="grow default-btn">2025년 1월 25일</button>
                    <button className="grow default-btn">{diary?.weather}</button>
                    <button className="grow default-btn">{diary?.emotion}</button>
                </div>
            </div>

            <div className="text-base text-gray-800 h-2/3">{diary?.content}</div>
        </div>
    )
}
