import { Diary } from '../interface/diary'

export const WeatherIcon = ({ weather }: { weather: Diary['weather'] }) => {
    const icons: Record<Diary['weather'], string> = {
        sunny: '☀',
        cloud: '☁',
        rain: '🌧',
        snow: '❄',
    }
    return <span>{icons[weather]}</span>
}
