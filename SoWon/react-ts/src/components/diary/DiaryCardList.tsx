import { Diary } from '../../interface/diary'
import Card from './Card'

const DiaryCardList = ({ diary }: { diary: Diary[] }) => {
    const hasDiaries = diary.length > 0

    return (
        <div className="flex flex-col overflow-y-auto gap-2 w-full max-h-96">
            {hasDiaries ? (
                diary.map((d) => <Card key={d.id} data={d} />)
            ) : (
                <div className="flex items-center justify-center text-gray-400">일기를 적어보세요</div>
            )}
        </div>
    )
}

export default DiaryCardList
