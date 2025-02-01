import { useParams } from 'react-router-dom'
import { emotionColorVariants } from '../../../styles/emotionCard'
import { EMOTION_DATA } from '../../constants'
import { Diary } from '../../../interface/diary'
import { useDiaryValue } from '../../../provider/Diary'
import { useState } from 'react'
import { updateDiaryStorage } from '../../../hooks/useLocalStorage'
<<<<<<< HEAD
<<<<<<< HEAD
import { DiaryTable } from '../../../components/diaryViewer/diaryTable'
import { DIARY_NOT_SELECTED, NO_DIARY_IN_EMOTIONLIST } from '../../constants'
=======
import { DiaryTable } from '../../../components/diaryViewer/DiaryTable'
<<<<<<< HEAD
import { DIARY_NOT_SELECTED, NO_DIARY_IN_EMOTIONLIST } from '../../constants/diaryOutput'
>>>>>>> 962156a (refactor: add route type constants)
=======
import { DIARY_NOT_SELECTED, NO_DIARY_IN_EMOTIONLIST } from '../../constants/diaryOutputs'
>>>>>>> bcbcf69 (refactor: add index file)
=======
import { DiaryTable } from '../../../components/diaryViewer/diaryTable'
import { DIARY_NOT_SELECTED, NO_DIARY_IN_EMOTIONLIST } from '../../constants'
>>>>>>> 0849dca (refactor: add type for readability)

type EmotionPageParams = {
    emotion: Diary['emotion']
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0849dca (refactor: add type for readability)
type DeleteSelectedDiariesButtonProps = {
    count: number
    onClick: () => void
}
<<<<<<< HEAD
=======
>>>>>>> a875817 (refactor: seperate conditional button)
=======
>>>>>>> 0849dca (refactor: add type for readability)
function DisabledDeleteButton() {
    return (
        <button className={`w-full btn  gray-btn gray-btn:hover p-2`} disabled>
            {DIARY_NOT_SELECTED}
        </button>
    )
}
<<<<<<< HEAD
<<<<<<< HEAD
function DeleteSelectedDiariesButton({ count, onClick }: DeleteSelectedDiariesButtonProps) {
=======
function DeleteSelectedDiariesButton({ count, onClick }: { count: number; onClick: () => void }) {
>>>>>>> a875817 (refactor: seperate conditional button)
=======
function DeleteSelectedDiariesButton({ count, onClick }: DeleteSelectedDiariesButtonProps) {
>>>>>>> 0849dca (refactor: add type for readability)
    return (
        <button className={`w-full btn red-btn red-btn:hover p-2`} onClick={() => onClick()}>
            {`선택된 ${count}개의 일기를 삭제합니다`}
        </button>
    )
}
export default function EmotionPage() {
    const { emotion } = useParams<EmotionPageParams>()
    const savedDiaries = useDiaryValue()
    const filteredDiaries = savedDiaries.filter((diary) => diary.emotion === emotion)
    const [diariesToRemove, setDiariesToRemove] = useState<Diary[]>([])
    const isDiaryExsists = filteredDiaries.length > 0
    const isDiarySelected = diariesToRemove.length > 0
    const handleCheckbox = ({ id }: { id: Diary['id'] }) => {
        setDiariesToRemove((prev) => {
            if (prev.some((diary) => diary.id === id)) {
                return prev.filter((diary) => diary.id !== id)
            } else {
                const diary = savedDiaries.find((diary) => diary.id === id)
                return diary ? [...prev, diary] : prev
            }
        })
    }
    const removedDiary = updateDiaryStorage().removeDiary
    const handleRemoveDiaries = () => {
        diariesToRemove.forEach((diary) => {
            removedDiary({ id: diary.id })
        })
        setDiariesToRemove([])
    }
    return (
        <div className="flex flex-col justify-center items-start w-full md:w-2/3 gap-10">
            <div className="flex flex-row gap-4 items-center justify-center">
                <div
                    className={`flex items-center justify-center group-hover:shadow-inner ${emotionColorVariants[EMOTION_DATA[emotion!].color]} w-24 h-24 min-w-[6rem] min-h-[6rem] rounded-2xl text-6xl`}
                >
                    {EMOTION_DATA[emotion!].emoji}
                </div>
                <h1 className="text-3xl font-semibold">{EMOTION_DATA[emotion!].description}</h1>
            </div>

            {isDiaryExsists ? (
                <>
                    {filteredDiaries.map((diary) => (
                        <DiaryTable diary={diary} key={diary.id} handleCheckbox={handleCheckbox} />
                    ))}

                    {isDiarySelected ? (
                        <DeleteSelectedDiariesButton count={diariesToRemove.length} onClick={handleRemoveDiaries} />
                    ) : (
                        <DisabledDeleteButton />
                    )}
                </>
            ) : (
                <h1 className="text-primary-gray">{NO_DIARY_IN_EMOTIONLIST}</h1>
            )}
        </div>
    )
}
