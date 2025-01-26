import { Diary } from '../interface/diary'

export const DIARY_STORAGE_KEY = 'diary_data'

export const emotionEmoji: Record<Diary['emotion'], string> = {
    bad: '🤬',
    soso: '😗',
    good: '😙',
    great: '😃',
    awesome: '😎',
}

export const weatherEmoji: Record<Diary['weather'], string> = {
    cloud: '☁️',
    rain: '🌧',
    snow: '❄️',
    sunny: '☀️',
}
