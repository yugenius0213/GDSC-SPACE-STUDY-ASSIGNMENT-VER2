export default function EmotionLinkPage() {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col items-star gap-3">
                <h1 className="text-3xl font-semibold">감정 상자</h1>
                <h2 className="text-primary-gray">나만의 감정을 돌아보고 생각에 잠겨보아요 :)</h2>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-row gap-4 border p-3 rounded-2xl">
                    <div className="flex items-center justify-center  w-24 h-24 bg-yellow-200 rounded-2xl text-6xl">
                        😎
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="text-2xl font-medium">Awesome</h1>
                        <h2 className="text-primary-gray">최고의 하루였어요</h2>
                    </div>
                </div>

                <div className="flex flex-row gap-4 border p-3 rounded-2xl">
                    <div className="flex items-center justify-center  w-24 h-24 bg-yellow-200 rounded-2xl text-6xl">
                        😎
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="text-2xl font-medium">Awesome</h1>
                        <h2 className="text-primary-gray">최고의 하루였어요</h2>
                    </div>
                </div>

                <div className="flex flex-row gap-4 border p-3 rounded-2xl">
                    <div className="flex items-center justify-center  w-24 h-24 bg-yellow-200 rounded-2xl text-6xl">
                        😎
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="text-2xl font-medium">Awesome</h1>
                        <h2 className="text-primary-gray">최고의 하루였어요</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
