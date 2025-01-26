import { Link } from 'react-router-dom'
import { Diary } from '../../interface/diary'
import { emotionEmoji, weatherEmoji } from '../../constants'

const EmojiIcon = ({ emoji }: { emoji: string }) => {
    return (
        <div className="w-6 h-6 p-1 flex items-center justify-center rounded-full border border-gray-100">{emoji}</div>
    )
}

const formatDate = (date: Date | string) => {
    if (typeof date === 'string') {
        date = new Date(date)
    }

    return new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(date)
}

const Card = ({ data }: { data: Diary }) => {
    return (
        <Link
            to={`/detail/${data.id}`}
            className="flex flex-col items-start justify-center w-full gap-1.5 p-3 hover:bg-gray-50 transition cursor-pointer border border-gray-100 rounded-lg"
        >
            <h1 className="text-base text-gray-800">{data.title}</h1>
            <div className="flex flex-row items-center justify-between gap-1 w-full">
                <span className="text-gray-400 text-sm">{formatDate(data.date)}</span>
                <div className="flex flex-row gap-1">
                    <EmojiIcon emoji={emotionEmoji[data.emotion]} />
                    <EmojiIcon emoji={weatherEmoji[data.weather]} />
                </div>
            </div>
        </Link>
    )
}

export default Card
