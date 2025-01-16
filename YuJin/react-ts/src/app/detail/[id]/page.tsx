import { Link, useParams } from 'react-router-dom'
import { useDiaryValue } from '../../../provider/Diary'
import { dateFormatting } from '../../utils/dateFormat'

type DiaryDetailPageParams = {
    id: string
}

export default function DiaryDetailPage() {
    const { id } = useParams<DiaryDetailPageParams>()
    const diary = useDiaryValue().find((diary) => diary.id === id)
    const formattedDate = dateFormatting(diary!.date, 'full')
    return (
        <div className="h-full w-2/4 py-20">
            <div className="flex flex-col gap-4  my-9">
                <div className="text-4xl font-medium">{diary?.title}</div>
                <div className="flex flex-row gap-2 ">
                    <div className="text-sm w-full flex bg-primary-lightgray text-primary-gray px-1.5 py-0.5 items-center justify-center rounded-lg">
                        {formattedDate}
                    </div>
                    <div className="text-sm w-full flex bg-primary-lightgray text-primary-gray px-1.5 py-0.5 items-center justify-center rounded-lg">
                        snow
                    </div>
                    <Link
                        to="/emotions/soso"
                        className="text-sm w-full flex bg-primary-lightgray text-primary-gray px-1.5 py-0.5 items-center justify-center rounded-lg"
                    >
                        good
                    </Link>
                </div>
            </div>

            <div className="h-2/3">내용</div>
            <div className="flex flex-row gap-2">
                <Link
                    to="/"
                    className="flex w-full bg-primary-lightgreen text-primary-green px-1.5 py-2 items-center justify-center rounded-lg"
                >
                    새로운 일기 작성하기
                </Link>
                <button className="flex w-full bg-primary-lightred text-primary-red  px-1.5 py-2 items-center justify-center rounded-lg">
                    현재 일기 삭제하기
                </button>
            </div>
        </div>
    )
}
