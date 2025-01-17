function DiaryWriter() {
    const [title, setTitle] = useState<string>('')
    const [emotion, setEmotion] = useState<Diary['emotion'] | undefined>()
    const [weather, setWeather] = useState<Diary['weather'] | undefined>()
    const emotions: Diary['emotion'][] = ['bad', 'soso', 'good', 'great', 'awesome']
    const weathers: Diary['weather'][] = ['cloud', 'rain', 'snow', 'sunny']
    const [contents, setContents] = useState<string>('')
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        const isNotValidCondition =
            emotion === undefined || weather === undefined || title.length <= 2 || contents.length <= 5
        setIsValid(!isNotValidCondition)
    }, [title, emotion, weather, contents])

    // localstorage에 저장하는 코드

    return (
        <div className="flex flex-col gap-4 p-4 rounded-lg bg-white border border-gray-100 w-full h-2/3 min-h-[20rem]">
            <input
                className="p-2 mt-4 rounded-md transition ring-gray-100 text-2xl focus:outline-none focus:ring-1 placeholder:text-gray-400"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목을 적어보세요"
            />
        </div>
    )
}

function DiaryRecord() {
    
}

export default function DiaryHomePage() {
    return (
        <DiaryWriter />
        <DiaryRecord />
    )
}
