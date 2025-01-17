function DiaryWriter() {
    const [title, setTitle] = useState<string>('')
    const [emotion, setEmotion] = useState<Diary['emotion'] | undefined>()
    const [weather, setWeather] = useState<Diary['weather'] | undefined>()
    const emotions: Diary['emotion'][] = ['bad', 'soso', 'good', 'great', 'awesome']
    const weathers: Diary['weather'][] = ['cloud', 'rain', 'snow', 'sunny']
    const [contents, setContents] = useState<string>('')
    const [isValid, setIsValid] = useState(false)
}

function DiaryRecord() {
    
}

export default function DiaryHomePage() {
    return (
        <DiaryWriter />
        <DiaryRecord />
    )
}
