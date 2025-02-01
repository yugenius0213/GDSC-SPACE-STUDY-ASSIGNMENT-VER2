export type EmotionTextType = {
  title: string;
  desc: string;
  color: 'red' | 'yellow' | 'green' | 'blue' | 'purple';
}

export const emotions = [
    { label: 'bad', icon: '🤬' },
    { label: 'soso', icon: '😗' },
    { label: 'good', icon: '😙' },
    { label: 'great', icon: '😃' },
    { label: 'awesome', icon: '😎' },
  ];

export const emotionTexts: Record<string, EmotionTextType> = {
  bad: {
    title: 'Bad',
    desc: '최악의 하루였어요!',
    color: 'red',
  },
  soso: {
    title: 'Soso',
    desc: '괜찮은 하루였어요',
    color: 'yellow',
  },
  good: {
    title: 'Good',
    desc: '좋은 하루였어요',
    color: 'green',
  },
  great: {
    title: 'Great',
    desc: '멋진 하루였어요',
    color: 'blue',
  },
  awesome: {
    title: 'Awesome',
    desc: '최고의 하루였어요',
    color: 'purple',
  },
};