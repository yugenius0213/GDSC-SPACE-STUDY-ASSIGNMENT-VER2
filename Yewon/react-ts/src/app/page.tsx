import { Diary } from '../interface/diary'

type Emotion = Diary['emotion']
type Weather = Diary['weather']

const emotions: Emotion[] = ['bad', 'soso', 'good', 'great', 'awesome']
const weathers: Weather[] = ['sunny', 'cloud', 'rain', 'snow']

const EmotionIcon = ({ emotion }: { emotion: Diary['emotion'] }) => {
    const icons: Record<Diary['emotion'], string> = {
        bad: '😞',
        soso: '😐',
        good: '🙂',
        great: '😃',
        awesome: '🌟',
    }
    return <span>{icons[emotion]}</span>
}

const DiaryWriter = () => {
    return (
        <div className="flex-col gap-4 p-4 rounded-lg bg-white border border-gray-100 h-2/3">
            <input required type="text" className="inputfield-text mt-4 text-2xl" placeholder="제목을 적어보세요." />
            <div className="flex mt-6 gap-2">
                {emotions.map((emotion, index) => (
                    <button key={index} type="button" className="default-btn" name="feeling" value={emotion}>
                        {emotion}
                    </button>
                ))}
            </div>
            <div className="flex mt-2 mb-6 gap-2">
                {weathers.map((weather,index)=>(
                    <button key={index} type="button" className="default-btn" name="weather" value={weather}>
                        {weather}
                    </button>
                ))}
            </div>
            <textarea
                required
                className="inputfield-text resize-none h-1/2 mb-2"
                placeholder="오늘 당신의 하루는 어땠나요?"
            />
        </div>
    )
}

export default function DiaryHomePage() {
    return (
        <div className="flex flex-col items-center justify-center gap-10 h-full md:grid md:grid-rows-1 md:grid-cols-[3fr,2fr] md:w-4/5 lg:w-2/3">
            <DiaryWriter />
        </div>
    )
}
