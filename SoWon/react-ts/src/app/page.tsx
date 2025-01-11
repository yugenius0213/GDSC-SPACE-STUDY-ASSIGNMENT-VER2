const DiaryWriter = () => {
    return (
        <>
            <input placeholder="제목을 적어보세요" />
            <div>
                <button>bad</button>
                <button>soso</button>
                <button>good</button>
                <button>great</button>
                <button>awesome</button>
            </div>
            <textarea placeholder="오늘 당신의 하루는 어땠나요?"></textarea>
            <button>일기를 더 자세히 적어볼까요?</button>
        </>
    )
}

export default function DiaryHomePage() {
    return (
        <>
            <DiaryWriter />
        </>
    )
}
