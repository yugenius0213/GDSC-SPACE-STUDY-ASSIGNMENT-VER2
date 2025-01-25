import { Link } from 'react-router-dom';
import { Diary } from '../interface/diary';
import { useDiaryValue } from '../provider/Diary';
import { emotions } from '../constants/emotions';
import { weathers } from '../constants/weathers';

interface Props {
  diaries: Diary[];
}

export function DiaryList({ diaries }: Props) {
  const { removeDiary } = useDiaryValue();

  return (
    <div className="flex flex-col overflow-y-auto gap-2 w-full h-96 max-h-96">
      {diaries.length === 0 ? (
        <p className="text-gray-400 text-sm mt-[250px]">일기를 적어보세요</p>
      ) : (
        diaries.map((diary) => (
          <div
            key={diary.id}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg flex justify-between items-center"
          >
            <Link
              to={`/detail/${diary.id}`}
              className="flex-grow flex justify-between items-center"
            >
              <div>
                <h2 className="text-md font-semibold">{diary.title}</h2>
                <p className="text-sm text-gray-500">{new Date(diary.date).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">
                  {weathers.find((w) => w.label === diary.weather)?.icon || ''}
                </span>
                <span className="text-sm">
                  {emotions.find((e) => e.label === diary.emotion)?.icon || ''}
                </span>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => removeDiary(diary.id)}
              className="text-red-500 text-sm ml-2"
            >
              삭제
            </button>
          </div>
        ))
      )}
    </div>
  );
}
