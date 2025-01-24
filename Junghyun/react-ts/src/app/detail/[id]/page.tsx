import { useParams } from 'react-router-dom'
import { useDiaryValue } from '../../../provider/Diary'

type DiaryDetailPageParams = {
    id: string
}

export default function DiaryDetailPage() {
    const { id } = useParams<DiaryDetailPageParams>()
    const diary = useDiaryValue().find((diary) => diary.id === id)
    const formattedDate = new Date(diary!.date).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    })

    return (
        <div className="flex flex-col h-full w-1/2 justify-center gap-10">
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl">{diary!.title}</h1>
                <div className="flex flex-row gap-2">
                    <button className="gray-btn flex-1">{formattedDate}</button>
                    <button className="gray-btn flex-1">{diary!.weather}</button>
                    <button className="gray-btn flex-1">{diary!.emotion}</button>
                </div>
            </div>

            <div className="flex h-1/2 text-xl">{diary!.content}</div>
            <div className="flex flex-row gap-2">
                <button className="green-btn flex-1 p-2">새로운 일기 작성하기</button>
                <button className="red-btn flex-1 p-2">현재 일기 삭제하기</button>
            </div>
        </div>
    )
}
