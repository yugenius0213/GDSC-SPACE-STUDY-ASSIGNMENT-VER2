export type EmotionTextType = {
  title: string;
  desc: string;
  color: 'red' | 'yellow' | 'green' | 'blue' | 'purple';
  icon: string;
}

export const emotionTexts: Record<string, EmotionTextType> = {
  awesome: {
    title: 'Awesome',
    desc: '최고의 하루였어요',
    color: 'yellow',
    icon: '😎',
  },
  great: {
    title: 'Great',
    desc: '멋진 하루였어요',
    color: 'blue',
    icon: '😃',
  },
  good: {
    title: 'Good',
    desc: '좋은 하루였어요',
    color: 'green',
    icon: '😙',
  },
  soso: {
    title: 'Soso',
    desc: '괜찮은 하루였어요',
    color: 'purple',
    icon: '😗',
  },
  bad: {
    title: 'Bad',
    desc: '최악의 하루였어요!',
    color: 'red',
    icon: '🤬',
  },
}

export const emotions = [
  { label: 'awesome', icon: '😎' },
  { label: 'great', icon: '😃' },
  { label: 'good', icon: '😙' },
  { label: 'soso', icon: '😗' },
  { label: 'bad', icon: '🤬' },
];
