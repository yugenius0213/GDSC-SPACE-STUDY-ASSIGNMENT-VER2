import { Link } from 'react-router-dom';
import { emotions, emotionTexts } from '../../constants/emotions';
import { colorClasses } from '../../constants/colorClasses';

export default function EmotionsPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mx-auto py-10 px-4 max-w-2xl min-h-screen">
      <div className="flex flex-col items-start justify-center gap-3 w-full">
        <h1 className="text-3xl text-gray-800 font-semibold">감정 상자</h1>
        <span className="text-gray-400">나만의 감정을 돌아보고 생각에 잠겨보아요 :)</span>
      </div>

      <div className="grid grid-cols-2 gap-5 w-full">
        {emotions.map((item) => {
          const { label, icon } = item;
          const { title, desc, color } = emotionTexts[label];
          const classes = colorClasses[color as keyof typeof colorClasses];

          return (
            <Link
              key={label}
              to={`/emotions/${label}`}
              className={`
                flex flex-row items-center justify-between gap-4
                w-full p-4 cursor-pointer rounded-3xl border border-gray-50
                hover:border-transparent hover:shadow-2xl hover:scale-105
                active:scale-100 transition-all ease-out duration-150 group
                bg-white
              `}
            >
              <div className={`
                w-24 h-24 min-w-[6rem] min-h-[6rem] rounded-2xl text-6xl
                flex items-center justify-center transition border
                ${classes.bg} ${classes.border}
                ${classes.hoverBg} ${classes.hoverBorder}
              `}>
                {icon}
              </div>

              <div className="flex flex-col items-start justify-center w-full">
                <h1 className="text-2xl font-medium">{title}</h1>
                <span className="text-gray-400">{desc}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
