import Icon from './Icon';
import { useAppContext } from '../hooks/useAppContext';

export default function VoiceButton({ onSpeak, onStop, speaking, disabled = false }) {
  const { language } = useAppContext();

  return (
    <button
      type="button"
      onClick={() => (speaking ? onStop() : onSpeak())}
      disabled={disabled}
      className="rounded-full bg-primary px-4 py-3 text-sm font-bold text-on-primary transition duration-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 md:w-full md:px-6 md:py-5 md:text-lg"
    >
      <span className="flex items-center justify-center gap-2 md:gap-3">
        <Icon name={speaking ? 'stop_circle' : 'volume_up'} filled className="text-[1.15rem] md:text-[1.7rem]" />
        <span>{speaking ? (language === 'hi' ? 'रोकें' : 'Stop') : language === 'hi' ? 'सुनें' : 'Listen'}</span>
      </span>
    </button>
  );
}
