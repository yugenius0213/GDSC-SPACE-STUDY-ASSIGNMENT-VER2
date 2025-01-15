const DiaryWriter = () => {
    return (
        <div className="flex flex-row items-center justify-center h-screen gap-10">
            <div className="flex flex-col gap-4">
                <input placeholder="제목을 적어보세요" />
                <div>
                    <button>bad</button>
                    <button>soso</button>
                    <button>good</button>
                </div>
                <textarea placeholder="오늘 당신의 하루는 어땠나요?" />
                <button>일기를 더 자세히 적어볼까요?</button>
            </div>
            <div className="flex flex-col gap-4">
                <h1>기록된 일기</h1>
                <div>일기를 적어보세요</div>
                <button>감정 모아보기</button>
            </div>
        </div>
    )
}
export default function DiaryHomePage() {
    return <DiaryWriter />
}
