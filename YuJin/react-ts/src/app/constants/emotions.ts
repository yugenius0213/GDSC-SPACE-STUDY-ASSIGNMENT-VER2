import { Diary } from '../../interface/diary'

export const EMOTION_DATA: Record<
    Diary['emotion'],
    {
        emojio: string
    }
> = {
    awesome: {
        emojio: '😎',
    },
    bad: {
        emojio: '🤬',
    },
    great: {
        emojio: '😃',
    },
    good: {
        emojio: '😙',
    },
    soso: {
        emojio: '😗',
    },
}
