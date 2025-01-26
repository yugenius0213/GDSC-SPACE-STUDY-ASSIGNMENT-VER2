import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDiaryValue } from '../../../provider/Diary'
import { Diary } from '../../../interface/diary'

type DiaryDetailPageParams = {
    id: string
}

export const dateFormat = (date: Date | string, dateStyle?: Intl.DateTimeFormatOptions['dateStyle']) => {
    const parsedDate = typeof date === 'string' ? new Date(date) : date

    const formattedDate = Intl.DateTimeFormat('ko-KR', {
        dateStyle,
    }).format(parsedDate)

    return formattedDate
}

export default function DiaryDetailPage() {
    const { id } = useParams<DiaryDetailPageParams>()
    const navigate = useNavigate()
    const diary: Diary | undefined = useDiaryValue().find((diary) => diary.id === id)
    if (diary === undefined) throw Error(`Diary ${id} not found`)

    const removeDiary = () => {
        const storedDiaries = localStorage.getItem('diaries')
        if (!storedDiaries) return

        const diaries: Diary[] = JSON.parse(storedDiaries)
        const updatedDiaries = diaries.filter((diary) => diary.id !== id)

        localStorage.setItem('diaries', JSON.stringify(updatedDiaries))

        navigate('/')
    }

    const formattedDate = dateFormat(diary.date, 'full')

    return (
        <div className="flex justify-center items-center w-full h-screen bg-white">
            <div className="w-2/4 h-full py-20">
                <div className="flex flex-col gap-4 my-9">
                    <h1 className="text-4xl font-medium">{diary.title}</h1>
                    <div className="flex flex-row gap-2">
                        <div className="flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] w-full cursor-pointer transition-colors ease-in bg-gray-100 text-gray-400 hover:border-gray-600 hover:text-gray-600 px-1.5 py-0.5 text-sm">
                            {formattedDate}
                        </div>
                        <div className="flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] w-full cursor-pointer transition-colors ease-in bg-gray-100 text-gray-400 hover:border-gray-600 hover:text-gray-600 px-1.5 py-0.5 text-sm">
                            {diary.weather}
                        </div>
                        <div className="flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] w-full cursor-pointer transition-colors ease-in bg-gray-100 text-gray-400 hover:border-gray-600 hover:text-gray-600 px-1.5 py-0.5 text-sm">
                            {diary.emotion}
                        </div>
                    </div>
                </div>

                <div className="text-base text-gray-800 h-2/3">{diary.content}</div>

                <div className="w-full flex flex-row gap-2">
                    <Link
                        to="/"
                        className="flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] w-full p-2 cursor-pointer transition-colors ease-in bg-emerald-100 text-emerald-600 hover:border-emerald-600 hover:text-emerald-600"
                    >
                        새로운 일기 작성하기
                    </Link>
                    <button
                        className="flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] w-full p-2 cursor-pointer transition-colors ease-in bg-red-100 text-red-600 hover:border-red-600 hover:text-red-600"
                        onClick={removeDiary}
                    >
                        현재 일기 삭제하기
                    </button>
                </div>
            </div>
        </div>
    )
}
