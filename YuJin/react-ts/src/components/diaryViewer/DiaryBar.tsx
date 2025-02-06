import { Link } from 'react-router'
import { Diary } from '../../interface/diary'
import { dateFormatting } from '../../app/utils/dateFormat'
import { ROUTE_TYPE } from '../../app/constants'

type DiaryTableProps = {
    diary: Diary
    handleCheckbox: ({ id }: { id: Diary['id'] }) => void
}
export function DiaryBar({ diary, handleCheckbox }: DiaryTableProps) {
    return (
        <Link
            to={`${ROUTE_TYPE.DIARY}/${diary.id}`}
            key={diary.id}
            className="w-full border border-x-primary-lightgray p-2 flex flex-row rounded-lg items-center justify-between"
        >
            <div className="flex flex-row items-center gap-6">
                <input
                    type="checkbox"
                    className="w-4 h-4 border border-primary-gray rounded-sm accent-primary-lightgray"
                    onChange={() => handleCheckbox({ id: diary.id })}
                    onClick={(e) => e.stopPropagation()}
                ></input>
                <div>{diary.title}</div>
            </div>
            <div className="flex flex-row gap-2 text-primary-gray">
                <div>{dateFormatting(diary.date, 'medium')}</div>
                <div>조회수: {diary.views}</div>
            </div>
        </Link>
    )
}
