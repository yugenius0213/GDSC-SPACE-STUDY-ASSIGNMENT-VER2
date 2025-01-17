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
}

function DiaryRecord() {
    
}

export default function DiaryHomePage() {
    return (
        <DiaryWriter />
        <DiaryRecord />
    )
}
