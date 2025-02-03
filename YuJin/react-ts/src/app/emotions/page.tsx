import { Link } from 'react-router-dom'
import { EMOTION_LIST } from '../constants'
import { emotionColorVariants } from '../../styles/emotionCard'
import { EMOTION_LIST_DISCRIPTION, EMOTION_LIST_TITLE } from '../constants'
import { ROUTE_TYPE } from '../constants/routes'
export default function EmotionLinkPage() {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col items-star gap-3">
                <h1 className="text-3xl font-semibold">{EMOTION_LIST_TITLE}</h1>
                <h2 className="text-primary-gray">{EMOTION_LIST_DISCRIPTION}</h2>
            </div>
            <div className="grid grid-cols-2 gap-5">
                {EMOTION_LIST.map((emotion) => (
                    <Link to={`${ROUTE_TYPE.EMOTIONS}/${emotion.emotion}`} key={emotion.name}>
                        <div className="flex flex-row gap-4 border border-primary-lightgray hover:border-transparent p-3 rounded-2xl hover:shadow-2xl hover:scale-105 active:scale-100 transition-all ease-out duration-150 group">
                            <div
                                className={`flex items-center justify-center group-hover:shadow-inner ${emotionColorVariants[emotion.color]} w-24 h-24 min-w-[6rem] min-h-[6rem] rounded-2xl text-6xl`}
                            >
                                {emotion.emoji}
                            </div>
                            <div className="flex flex-col items-start justify-center pr-2">
                                <h1 className="text-2xl font-medium">{emotion.name}</h1>
                                <h2 className="text-primary-gray">{emotion.description}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
