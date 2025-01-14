import { Diary } from '../interface/diary'
import { useDiaryUpdate } from '../provider/Diary'
const useLocalStorage = (diary: Diary[]) => {
    window.localStorage.setItem('diary', JSON.stringify(diary))
}
export function updateDiaryStorage() {
    const updateDiaries = useDiaryUpdate()
    const addDiary = (newDiary: Omit<Diary, 'views'>) => {
        const initialView = 1
        updateDiaries((prev) => {
            const withViews = { ...newDiary, views: initialView }
            const updatedDiary = [...prev, withViews]
            useLocalStorage(updatedDiary)
            return updatedDiary
        })
    }
    return addDiary
}
