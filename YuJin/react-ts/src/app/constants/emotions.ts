import { Diary } from '../../interface/diary'

export const EMOTION_DATA: Readonly<
    Record<
        Diary['emotion'],
        {
            emojio: string
            name_eng: string
            name_kor: string
        }
    >
> = Object.freeze({
    awesome: {
        emojio: '😎',
        name_eng: 'Awesome',
        name_kor: '최고의 하루였어요',
    },
    bad: {
        emojio: '🤬',
        name_eng: 'Bad',
        name_kor: '최악의 하루였어요!',
    },
    great: {
        emojio: '😃',
        name_eng: 'Great',
        name_kor: '멋진 하루였어요',
    },
    good: {
        emojio: '😙',
        name_eng: 'Good',
        name_kor: '좋은 하루였어요',
    },
    soso: {
        emojio: '😗',
        name_eng: 'Soso',
        name_kor: '괜찮은 하루였어요',
    },
})
