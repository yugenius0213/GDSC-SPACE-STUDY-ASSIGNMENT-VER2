import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDiaryValue } from '../../../provider/Diary'
import { Diary } from '../../../interface/diary'
import { Link } from '../../../components/Link'
import { emotionTexts } from '../../../constants/emotions'
import { colorClasses } from '../../../constants/colorClasses'

type EmotionPageParams = {
  emotion: string
}

export default function EmotionPage() {
  const { emotion } = useParams<EmotionPageParams>()

  const emotionData = emotionTexts[emotion as keyof typeof emotionTexts]
  const classes = colorClasses[emotionData.color as keyof typeof colorClasses]

  const { diaries, removeDiary } = useDiaryValue()

  const filteredDiaries = diaries.filter((d: Diary) => d.emotion === emotion)

  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const toggleSelection = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id))
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }

  const handleBulkDelete = () => {
    selectedIds.forEach(id => removeDiary(id))
    setSelectedIds([])
  }

  return (
    <div className="min-h-screen max-h-screen h-screen w-full bg-white flex items-center justify-center">
      <main className="flex flex-col gap-10 w-full md:w-2/3 items-start">
        <div className="flex flex-row gap-5 items-center justify-center">
          <div
            className={`
              flex items-center justify-center 
              w-24 h-24 min-w-[6rem] min-h-[6rem] rounded-2xl text-6xl 
              transition select-none border 
              ${classes.bg} ${classes.border} ${classes.hoverBg} ${classes.hoverBorder}
            `}
          >
            {emotionData.icon}
          </div>
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-3xl font-medium">{emotionData.title}</h1>
            <span className="text-gray-400">{emotionData.desc}</span>
          </div>
        </div>

        {filteredDiaries.map((diary) => {
          const diaryDate =
            diary.date instanceof Date
              ? diary.date.toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                })
              : diary.date

          return (
            <div
              key={diary.id}
              className="flex flex-row items-center justify-between gap-4 w-full border border-gray-100 rounded-lg p-2"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-gray-50"
                checked={selectedIds.includes(diary.id)}
                onChange={() => toggleSelection(diary.id)}
              />
              <Link
                to={`/detail/${diary.id}`}
                className="flex flex-row items-center justify-between gap-2 px-2 w-full hover:bg-gray-100 transition rounded"
              >
                <div>{diary.title}</div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <div className="text-gray-400">{diaryDate}</div>
                  <div className="text-gray-400">조회수: {diary.views}</div>
                </div>
              </Link>
            </div>
          )
        })}

        <button
          onClick={handleBulkDelete}
          disabled={selectedIds.length === 0}
          className={selectedIds.length === 0
            ? "flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] w-full p-2 cursor-pointer transition-colors ease-in bg-gray-100 text-gray-400 hover:border-gray-600 hover:text-gray-600 text-sm"
            : "flex items-center justify-center rounded-lg border border-transparent active:translate-y-[1px] w-full p-2 cursor-pointer transition-colors ease-in bg-red-100 text-red-600 hover:border-red-600 hover:text-red-600 text-sm"}
        >
          {selectedIds.length === 0 ? '선택된 일기가 없습니다.' : '선택된 일기 삭제하기'}
        </button>
      </main>
    </div>
  )
}
