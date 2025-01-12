function DiaryWriter() {
    const emotions: string[] = ['bad', 'soso', 'good', 'great', 'awesome']
    const emotionEntries = emotions.map((emotion) => ({
        emotion: emotion,
    }))
    const weather: string[] = ['sunny', 'cloud', 'rain', 'snow']
    const weatherEntries = weather.map((weather) => ({
        weather: weather,
    }))
    return (
        <div className="w-full border border-bg-gray p-4 rounded-lg flex flex-col">
            <input
                className="w-full p-2 text-2xl hover:border hover:rounded-lg focus:outline-none mt-4"
                placeholder="제목을 적어보세요"
            ></input>
            <div className="flex flex-col gap-2 py-8">
                <div className="flex flex-row gap-1">
                    {emotionEntries.map((entry, index) => (
                        <button
                            className="flex bg-primary-lightgray text-primary-gray px-2 items-center justify-center rounded-lg"
                            key={index}
                        >
                            {entry.emotion}
                        </button>
                    ))}
                </div>
                <div className="flex flex-row gap-1">
                    {weatherEntries.map((entry, index) => (
                        <button
                            className="flex bg-primary-lightgray text-primary-gray px-2 items-center justify-center rounded-lg"
                            key={index}
                        >
                            {entry.weather}
                        </button>
                    ))}
                </div>
            </div>
            <textarea
                className="w-full focus:border focus:rounded-lg p-2 focus:outline-none "
                placeholder="오늘 당신의 하루는 어땠나요?"
            ></textarea>

            <button className="w-full bg-primary-lightgray rounded-lg py-2 text-lg text-primary-gray">
                일기를 더 자세히 적어볼까요?
            </button>
            <button className="w-full bg-primary-lightgreen rounded-lg py-2 text-lg text-primary-green">
                일기를 저장해 보아요
            </button>
        </div>
    )
}
function DiaryViewer() {
    return (
        <div className="w-full border border-bg-gray p-4 rounded-lg flex flex-col">
            <div className="text-xl text-primary-green text-bold mt-4">기록된 일기</div>
            <div className="flex flex-col py-4 gap-2 max-h-96 overflow-y-auto">
                <div className="border rounded-lg p-3 flex flex-col gap-2 ">
                    <div className="text-lg">ㅓㅏㅗㅓㅏ</div>
                    <div className="flex flex-row justify-between">
                        <div className="text-sm text-primary-gray">2024.12.17. </div>
                        <div className="flex flex-row">
                            <div className="rounded-full border w-6 h-6 flex items-center justify-center">🥲</div>
                            <div className="rounded-full border w-6 h-6 flex items-center justify-center">🥲</div>
                        </div>
                    </div>
                </div>

                <div className="border rounded-lg p-3 flex flex-col gap-2">
                    <div className="text-lg">ㅓㅏㅗㅓㅏ</div>
                    <div className="flex flex-row justify-between">
                        <div className="text-sm text-primary-gray">2024.12.17. </div>
                        <div className="flex flex-row">
                            <div className="rounded-full border w-6 h-6 flex items-center justify-center">🥲</div>
                            <div className="rounded-full border w-6 h-6 flex items-center justify-center">🥲</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function DiaryHomePage() {
    return (
        <div className="flex flex-col gap-10 items-center justify-center">
            <DiaryWriter />
            <DiaryViewer />
        </div>
    )
}
