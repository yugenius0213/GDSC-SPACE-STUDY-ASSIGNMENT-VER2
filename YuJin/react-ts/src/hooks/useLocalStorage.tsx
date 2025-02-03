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

    const removeDiary = (removeDiary: Pick<Diary, 'id'>) => {
        updateDiaries((prev) => {
            const removedDiary = prev.filter(({ id }) => id !== removeDiary.id)
            useLocalStorage(removedDiary)
            return removedDiary
        })
    }

    const updateDiary = (diaryId: string, updateDiary: Diary) => {
        updateDiaries((prev) => {
            const viewedDiary = prev.find(({ id }) => id === diaryId)
            if (!viewedDiary) return prev
            const updatedDiary = prev.map((diary) => (diary.id === diaryId ? updateDiary : diary))
            useLocalStorage(updatedDiary)
            return updatedDiary
        })
    }

    return { addDiary, removeDiary, updateDiary }
}
