import { Link, useParams } from 'react-router-dom'

type DiaryDetailPageParams = {
    id: string
}
type DiaryDetailPageProps = {
    content: string
}
const DetailBox = ({ content }: DiaryDetailPageProps) => {
    return (
        <div className="flex bg-primary-lightgray text-primary-gray px-16 items-center justify-center rounded-lg">
            {content}
        </div>
    )
}
export default function DiaryDetailPage() {
    const { id } = useParams<DiaryDetailPageParams>()
    return (
        <div className="h-full w-1/2 py-20">
            <div className="flex flex-col gap-4">
                <div className="flex items-start text-4xl">zdxvzxcv</div>
                <div className="flex flex-row justify-even  gap-2">
                    <div className="flex bg-primary-lightgray text-primary-gray px-6 items-center justify-center rounded-lg">
                        2025년 1월 5일 목요일
                    </div>
                    <DetailBox content="snow" />
                    <Link to="/emotions/soso">
                        <DetailBox content="good" />
                    </Link>
                </div>
            </div>

            <div className="py-12 h-2/3">내용</div>
            <div className="flex flex-row gap-2 w-full">
                <Link to="/">
                    <button className="flex bg-primary-lightgreen text-primary-green px-16 py-3 items-center justify-center rounded-lg">
                        새로운 일기 작성하기
                    </button>
                </Link>
                <button className="flex bg-primary-lightred text-primary-red px-16 py-3 items-center justify-center rounded-lg">
                    현재 일기 삭제하기
                </button>
            </div>
        </div>
    )
}
