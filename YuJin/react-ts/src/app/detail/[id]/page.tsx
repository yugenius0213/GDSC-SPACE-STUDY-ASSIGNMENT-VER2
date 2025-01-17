import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDiaryValue } from '../../../provider/Diary'
import { dateFormatting } from '../../utils/dateFormat'
import { updateDiaryStorage } from '../../../hooks/useLocalStorage'
import { DELETE_CURRENT_DIARY, GO_YO_WRITE_DIARY } from '../../constants/diaryOutput'

type DiaryDetailPageParams = {
    id: string
}

export default function DiaryDetailPage() {
    const { id } = useParams<DiaryDetailPageParams>()
    const diary = useDiaryValue().find((diary) => diary.id === id)
    const formattedDate = dateFormatting(diary!.date, 'full')
    const removedDiary = updateDiaryStorage().removeDiary
    const navigate = useNavigate()
    const removeDiary = () => {
        removedDiary({ id: id! })
        navigate('/')
    }
    return (
        <div className="h-full w-2/4 py-20">
            <div className="flex flex-col gap-4  my-9">
                <div className="text-4xl font-medium">{diary?.title}</div>
                <div className="flex flex-row gap-2 ">
                    <div className="text-sm w-full flex bg-primary-lightgray text-primary-gray px-1.5 py-0.5 items-center justify-center rounded-lg">
                        {formattedDate}
                    </div>
                    <div className="text-sm w-full flex bg-primary-lightgray text-primary-gray px-1.5 py-0.5 items-center justify-center rounded-lg">
                        {diary?.weather}
                    </div>
                    <Link
                        to={`/emotions/${diary?.emotion}`}
                        className="text-sm w-full flex bg-primary-lightgray text-primary-gray px-1.5 py-0.5 items-center justify-center rounded-lg"
                    >
                        {diary?.emotion}
                    </Link>
                </div>
            </div>

            <div className="h-2/3"> {diary?.content}</div>
            <div className="flex flex-row gap-2">
                <Link
                    to="/"
                    className="flex w-full bg-primary-lightgreen text-primary-green px-1.5 py-2 items-center justify-center rounded-lg"
                >
                    {GO_YO_WRITE_DIARY}
                </Link>
                <button
                    className="flex w-full bg-primary-lightred text-primary-red  px-1.5 py-2 items-center justify-center rounded-lg"
                    onClick={removeDiary}
                >
                    {DELETE_CURRENT_DIARY}
                </button>
            </div>
        </div>
    )
}
