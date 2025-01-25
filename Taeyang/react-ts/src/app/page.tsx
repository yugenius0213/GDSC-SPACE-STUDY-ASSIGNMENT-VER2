import { DiaryForm } from '../components/DiaryForm';
import { DiaryList } from '../components/DiaryList';
import { useDiaryValue } from '../provider/Diary';
import { Link } from 'react-router-dom';

export default function DiaryPage() {
  const { diaries } = useDiaryValue();

  return (
    <div className="flex flex-col items-center justify-center gap-10 h-full w-full md:grid md:grid-rows-1 md:grid-cols-[3fr,2fr] md:w-4/5 lg:w-2/3 mx-auto">
      <DiaryForm />
      <div className="flex flex-col justify-between gap-4 p-4 rounded-lg bg-white border border-gray-100 h-2/3 min-h-[20rem] w-full">
        <div>
          <h1 className="text-xl text-emerald-600 mt-2">기록된 일기</h1>
          <DiaryList diaries={diaries} />
        </div>
        <Link
          to="/emotions"
          className="w-full p-2 bg-emerald-100 text-emerald-500 rounded-lg text-sm text-center"
        >
          감정 모아보기
        </Link>
      </div>
    </div>
  );
}
