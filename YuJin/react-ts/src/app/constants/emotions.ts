import { Diary } from '../../interface/diary'

export const EMOTION_DATA: Readonly<
    Record<
        Diary['emotion'],
        {
            emoji: string
            name: string
            description: string
        }
    >
> = Object.freeze({
    awesome: {
        emoji: '😎',
        name: 'Awesome',
        description: '최고의 하루였어요',
    },

    great: {
        emoji: '😃',
        name: 'Great',
        description: '멋진 하루였어요',
    },
    good: {
        emoji: '😙',
        name: 'Good',
        description: '좋은 하루였어요',
    },
    soso: {
        emoji: '😗',
        name: 'Soso',
        description: '괜찮은 하루였어요',
    },
    bad: {
        emoji: '🤬',
        name: 'Bad',
        description: '최악의 하루였어요!',
    },
})
export const EMOTION_LIST = Object.entries(EMOTION_DATA).map(([key, value]) => ({
    emotion: key as Diary['emotion'],
    ...value,
}))
