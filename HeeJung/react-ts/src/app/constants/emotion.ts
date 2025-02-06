import { Diary } from '../../interface/diary'

export const EMOTION: Record<
    Diary['emotion'],
    {
        emoji: string
    }
> = {
    awesome: {
        emoji: '😎',
    },
    bad: {
        emoji: '🤬',
    },
    great: {
        emoji: '😃',
    },
    good: {
        emoji: '😙',
    },
    soso: {
        emoji: '😗',
    },
}