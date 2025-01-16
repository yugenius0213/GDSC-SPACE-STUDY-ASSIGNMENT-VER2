const DiaryWriter = () => {
    return (
        <div className="flex-col gap-4 p-4 rounded-lg bg-white border border-gray-100 h-2/3">
            <input required type="text" className="inputfield-text text-2xl" placeholder="제목을 적어보세요." />
            <textarea
                required
                className="inputfield-text resize-none h-1/2"
                placeholder="오늘 당신의 하루는 어땠나요?"
            />
        </div>
    )
}

export default function DiaryHomePage() {
    return (
        <div className="flex flex-col items-center justify-center gap-10 h-full md:grid md:grid-rows-1 md:grid-cols-[3fr,2fr] md:w-4/5 lg:w-2/3">
            <DiaryWriter/>
        </div>
    )
}
