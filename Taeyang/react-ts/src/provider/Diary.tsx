import React, { createContext, useContext, useState, useEffect } from 'react';
import { Diary } from '../interface/diary';

interface DiaryContextType {
  diaries: Diary[];
  addDiary: (diary: Diary) => void;
  removeDiary: (id: string) => void;
}

const DiaryContext = createContext<DiaryContextType | undefined>(undefined);

export const DiaryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(() => {
    const storedDiaries = localStorage.getItem('diaries');
    if (storedDiaries) {
      const parsedDiaries = JSON.parse(storedDiaries).map((diary: any) => ({
        ...diary,
        id: String(diary.id),
        date: new Date(diary.date),
      }));
      setDiaries(parsedDiaries);
    }
  }, []);

  const addDiary = (diary: Diary) => {
    setDiaries((prev) => {
      const updated = [diary, ...prev];
      localStorage.setItem('diaries', JSON.stringify(updated));
      return updated;
    });
  };

  const removeDiary = (id: string) => {
    setDiaries((prev) => {
      const updated = prev.filter((diary) => diary.id !== id);
      localStorage.setItem('diaries', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <DiaryContext.Provider value={{ diaries, addDiary, removeDiary }}>
      {children}
    </DiaryContext.Provider>
  );
};

export const useDiaryValue = () => {
  const context = useContext(DiaryContext);
  if (!context) throw new Error('useDiaryValue must be used within DiaryProvider');
  return context;
};
