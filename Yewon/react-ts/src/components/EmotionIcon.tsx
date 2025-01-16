import { Diary } from '../interface/diary'

export const EmotionIcon = ({ emotion }: { emotion: Diary['emotion'] }) => {
    const icons: Record<Diary['emotion'], string> = {
        bad: '🤬',
        soso: '😗',
        good: '😙',
        great: '😃',
        awesome: '😎',
    }
    return <span>{icons[emotion]}</span>
}
