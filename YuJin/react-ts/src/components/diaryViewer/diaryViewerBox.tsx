import { Link } from 'react-router-dom'
import { EMOTION_DATA } from '../../app/constants/emotions'
import { WEATHER_EMOJI } from '../../app/constants/weather'
import { Diary } from '../../interface/diary'
import { dateFormatting } from '../../app/utils/dateFormat'

export const DiaryViewerBox = ({ diary }: { diary: Diary }) => {
    const formattedDate = dateFormatting(diary.date)
    return (
        <Link to={`/detail/${diary.id}`}>
            <div className="border rounded-lg p-3 flex flex-col gap-2 hover:bg-primary-lightgray">
                <div className="text-lg">{diary.title}</div>
                <div className="flex flex-row justify-between">
                    <div className="text-sm text-primary-gray">{formattedDate}</div>
                    <div className="flex flex-row">
                        <div className="rounded-full border w-6 h-6 flex items-center justify-center">
                            {EMOTION_DATA[diary.emotion].emoji}
                        </div>
                        <div className="rounded-full border w-6 h-6 flex items-center justify-center">
                            {WEATHER_EMOJI[diary.weather]}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
