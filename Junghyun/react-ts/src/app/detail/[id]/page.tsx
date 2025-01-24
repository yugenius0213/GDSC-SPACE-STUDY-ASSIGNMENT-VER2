import { useParams } from 'react-router-dom'

type DiaryDetailPageParams = {
    id: string
}

export default function DiaryDetailPage() {
    const { id } = useParams<DiaryDetailPageParams>()

    return (
        <div className="flex flex-col h-full w-1/2 justify-center gap-10">
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl">제목</h1>
                <div className="flex flex-row gap-2">
                    <button className="gray-btn flex-1">날짜</button>
                    <button className="gray-btn flex-1">날씨</button>
                    <button className="gray-btn flex-1">감정</button>
                </div>
            </div>

            <div className="flex h-1/2 text-xl">일기 내용</div>
            <div className="flex flex-row gap-2">
                <button className="green-btn flex-1 p-2">새로운 일기 작성하기</button>
                <button className="red-btn flex-1 p-2">현재 일기 삭제하기</button>
            </div>
        </div>
    )
}
