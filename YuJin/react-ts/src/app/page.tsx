export default function DiaryHomePage() {
    const emotions: string[] = ['bad', 'soso', 'good', 'great', 'awesome']
    const emotionEntries = emotions.map((emotion) => ({
        emotion: emotion,
    }))
    return (
        <div className="flex flex-col gap-10 items-center justify-center">
            <div className="w-full border-2 border-bg-gray px-4 rounded-lg">
                <div className="py-8">제목을 적어보세요</div>
                <div className="flex flex-col gap-2">
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
                        <div className="flex bg-gray-400 px-2 py-0.5 items-center rounded-lg">bad</div>
                        <div className=" bg-gray-400 p-2">bad</div>
                    </div>
                </div>
            </div>
            <div className="w-full border-2 border-bg-gray px-4 rounded-lg">기록된 일기</div>
        </div>
    )
}
