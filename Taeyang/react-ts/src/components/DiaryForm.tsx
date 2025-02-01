import { useState } from 'react';
import { emotions } from '../constants/emotions';
import { weathers } from '../constants/weathers';
import { useDiaryValue } from '../provider/Diary';

export function DiaryForm() {
  const { addDiary } = useDiaryValue();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [selectedWeather, setSelectedWeather] = useState<string | null>(null);

  const isFormValid = title && content && selectedEmotion && selectedWeather;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    addDiary({
      id: crypto.randomUUID(),
      title,
      content,
      date: new Date(),
      emotion: selectedEmotion!,
      weather: selectedWeather!,
      views: 0,
    });

    setTitle('');
    setContent('');
    setSelectedEmotion(null);
    setSelectedWeather(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between gap-4 p-4 rounded-lg bg-white border border-gray-100 h-2/3 w-full"
    >
      <div className="flex flex-col gap-4 flex-grow">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-2 mb-6 text-2xl border-0 focus:border focus:border-gray-100 focus:outline-none focus:ring-0"
          placeholder="제목을 적어보세요."
        />
        <div className="flex gap-[2px]">
          {emotions.map((emotion) => (
            <button
              key={emotion.label}
              type="button"
              onClick={() => setSelectedEmotion(emotion.label)}
              className={`${
                selectedEmotion === emotion.label
                  ? 'bg-emerald-500 text-white border-emerald-500'
                  : 'bg-gray-100 text-gray-400 border-gray-200'
              } px-1.5 py-[1px] rounded-md border transition-all duration-200 text-xs min-w-[38px]`}
            >
              {emotion.label}
            </button>
          ))}
        </div>
        <div className="flex gap-[2px] -mt-1 mb-6">
          {weathers.map((weather) => (
            <button
              key={weather.label}
              type="button"
              onClick={() => setSelectedWeather(weather.label)}
              className={`${
                selectedWeather === weather.label
                  ? 'bg-sky-500 text-white border-sky-500'
                  : 'bg-gray-100 text-gray-400 border-gray-200'
              } px-1.5 py-[1px] rounded-md border transition-all duration-200 text-xs min-w-[38px]`}
            >
              {weather.label}
            </button>
          ))}
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="resize-none flex-grow whitespace-nowrap border-0 focus:border focus:border-gray-100 focus:outline-none focus:ring-0"
          placeholder="오늘 당신의 하루는 어땠나요?"
        />
      </div>
      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full p-2 rounded-lg text-sm ${
          isFormValid
            ? 'bg-emerald-100 text-emerald-500'
            : 'bg-gray-100 text-gray-500'
        }`}
      >
        일기를 더 자세히 적어볼까요?
      </button>
    </form>
  );
}