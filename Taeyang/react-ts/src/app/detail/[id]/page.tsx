import { useParams, useNavigate } from 'react-router-dom'
import { useDiaryValue } from '../../../provider/Diary'
import { Diary } from '../../../interface/diary'
import { Link } from '../../../components/Link'
import { useEffect } from 'react'

type DiaryDetailPageParams = {
  id: string
}

export default function DiaryDetailPage() {

  const { id } = useParams<DiaryDetailPageParams>()
  const navigate = useNavigate()

  const { diaries, removeDiary } = useDiaryValue()

  const diary: Diary | undefined = diaries.find((d: Diary) => d.id === id)
  if (!diary) {
    return <div>일기를 찾을 수 없습니다.</div>
  }

  const { title, content, date, emotion, weather } = diary
  const formattedDate =
    date instanceof Date
      ? date.toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long'
        })
      : date

  const handleDelete = () => {
    removeDiary(diary.id)
    navigate('/')
  }

  useEffect(() => {
    
  }, [])

  return (
    <div className="min-h-screen max-h-screen h-screen w-full bg-white flex items-center justify-center">
      <div className="w-2/4 h-full py-20">
        <div className="flex flex-col gap-4 my-9">
          <h1 className="text-4xl font-medium">{title}</h1>
          <div className="flex flex-row gap-2">
            <div
              className="flex items-center justify-center rounded-lg border border-transparent 
                         active:translate-y-[1px] w-full p-2 cursor-default transition-colors ease-in 
                         bg-gray-100 text-gray-400 hover:border-gray-600 hover:text-gray-600 
                         px-1.5 py-0.5 text-sm"
            >
              {formattedDate}
            </div>
            <div
              className="flex items-center justify-center rounded-lg border border-transparent 
                         active:translate-y-[1px] w-full p-2 cursor-default transition-colors ease-in 
                         bg-gray-100 text-gray-400 hover:border-gray-600 hover:text-gray-600 
                         px-1.5 py-0.5 text-sm"
            >
              {weather}
            </div>
            <Link
              to={`/emotions/${emotion}`}
              className="flex items-center justify-center rounded-lg border border-transparent 
                         active:translate-y-[1px] w-full p-2 cursor-pointer transition-colors ease-in 
                         bg-gray-100 text-gray-400 hover:border-gray-600 hover:text-gray-600 
                         px-1.5 py-0.5 text-sm"
            >
              {emotion}
            </Link>
          </div>
        </div>

        <div className="text-base text-gray-800 h-2/3">
          {content}
        </div>

        <div className="w-full flex flex-row gap-2 mt-4">
          <Link
            to="/"
            className="flex items-center justify-center rounded-lg border border-transparent 
                       active:translate-y-[1px] w-full p-2 cursor-pointer transition-colors ease-in 
                       bg-emerald-100 text-emerald-600 hover:border-emerald-600 hover:text-emerald-600 text-sm"
          >
            새로운 일기 작성하기
          </Link>
          <button
            onClick={handleDelete}
            className="flex items-center justify-center rounded-lg border border-transparent 
                       active:translate-y-[1px] w-full p-2 cursor-pointer transition-colors ease-in 
                       bg-red-100 text-red-600 hover:border-red-600 hover:text-red-600 text-sm"
          >
            현재 일기 삭제하기
          </button>
        </div>
      </div>
    </div>
  )
}
