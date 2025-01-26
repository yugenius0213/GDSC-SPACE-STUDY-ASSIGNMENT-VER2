export default function DiaryCard() {
    return (
        <div className="flex flex-col gap-2 w-full p-3 border border-gray-200 rounded-lg items-start justify-center">
            <h1 className="text-grey-600">제목</h1>
            <div className="flex flex-row justify-between w-full">
                <span className="text-gray-400">2025.1.1</span>
                <div className="flex flex-row">
                    <div className="flex items-center justify-center border border-gray-200 rounded-full p-1 w-6 h-6">
                        😊
                    </div>
                    <div className="flex items-center justify-center border border-gray-200 rounded-full p-1 w-6 h-6">
                        🌧️
                    </div>
                </div>
            </div>
        </div>
    )
}
