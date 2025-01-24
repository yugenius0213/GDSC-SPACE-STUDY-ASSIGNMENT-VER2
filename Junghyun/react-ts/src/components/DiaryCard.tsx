import { Diary } from '../interface/diary'

export default function DiaryCard({ title, date, emotion, weather, id }: Diary) {
    const formattedDate = date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })

    const emotionEmoji = {
        bad: '🤬',
        soso: '😙',
        good: '😊',
        great: '😃',
        awesome: '😎',
    }

    const weatherEmoji = {
        sunny: '☀️',
        cloud: '☁️',
        rain: '🌧️',
        snow: '❄️',
    }
    return (
        <div className="flex flex-col gap-2 w-full p-3 border border-gray-200 rounded-lg items-start justify-center">
            <h1 className="text-grey-600">{title}</h1>
            <div className="flex flex-row justify-between w-full">
                <span className="text-gray-400">{formattedDate}</span>
                <div className="flex flex-row">
                    <div className="flex items-center justify-center border border-gray-200 rounded-full p-1 w-6 h-6">
                        {emotionEmoji[emotion]}
                    </div>
                    <div className="flex items-center justify-center border border-gray-200 rounded-full p-1 w-6 h-6">
                        {weatherEmoji[weather]}
                    </div>
                </div>
            </div>
        </div>
    )
}
