import { Diary } from '../interface/diary'
import { Link } from 'react-router-dom'
import { EmotionIcon } from './EmotionIcon'
import { WeatherIcon } from './WeatherIcon'

interface DiaryProps {
    diary: Diary
}

export const DiaryCard: React.FC<DiaryProps> = ({ diary }) => {
    const formatDate = (date: Date): string => {
        const strDate = date.toString()

        const year = strDate.substring(0, 4)
        const month = strDate.substring(5, 7)
        const day = strDate.substring(8, 10)
        return `${year}. ${month}. ${day}.`
    }

    return (
        <Link to={`detail/${diary.id}`} key={diary.id}>
            <button className="w-full flex flex-col items-start justify-center gap-1.5 p-3 hover:bg-gray-50 border border-gray-100 rounded-lg">
                <h1>{diary.title}</h1>
                <div className="flex flex-row items-center justify-between gap-1 w-full">
                    <span className="text-gray-400 text-sm">{formatDate(diary.date)}</span>
                    <div className="flex flex-row gap-1s">
                        <EmotionIcon emotion={diary.emotion} />
                        <WeatherIcon weather={diary.weather} />
                    </div>
                </div>
            </button>
        </Link>
    )
}
