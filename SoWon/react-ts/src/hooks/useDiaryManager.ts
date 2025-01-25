import { useCallback } from 'react'
import { Diary } from '../interface/diary'
import { localStorageUtil } from '../utils/LocalStorage'
import { DIARY_STORAGE_KEY } from '../constants'
import { useDiaryUpdate } from '../provider/Diary'

const useDiaryManager = () => {
    const setDiary = useDiaryUpdate()

    // 일기 상태를 localStorage와 동기화하는 함수
    const updateDiaryStorage = useCallback((updatedDiaries: Diary[]) => {
        localStorageUtil.set(DIARY_STORAGE_KEY, updatedDiaries)
    }, [])

    // 일기 저장
    const addDiary = useCallback(
        (newDiary: Diary) => {
            setDiary((prev) => {
                const updatedDiaries = [...prev, newDiary]
                updateDiaryStorage(updatedDiaries)

                return updatedDiaries
            })
        },
        [updateDiaryStorage]
    )

    // 일기 업데이트(수정)
    const updateDiary = useCallback(
        (id: string, updatedDiary: Diary) => {
            setDiary((prev) => {
                const updatedDiaries = prev.map((diary) => (diary.id === id ? updatedDiary : diary))
                updateDiaryStorage(updatedDiaries)

                return updatedDiaries
            })
        },
        [updateDiaryStorage]
    )

    // 일기 삭제
    const removeDiary = useCallback(
        (id: string) => {
            setDiary((prev) => {
                const updatedDiaries = prev.filter((diary) => diary.id !== id)
                updateDiaryStorage(updatedDiaries)

                return updatedDiaries
            })
        },
        [updateDiaryStorage]
    )

    return { addDiary, updateDiary, removeDiary }
}

export default useDiaryManager
