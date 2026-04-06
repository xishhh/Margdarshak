import Icon from './Icon';
import { useAppContext } from '../hooks/useAppContext';
import { useSpeech } from '../hooks/useSpeech';

export default function VoiceButton({ text }) {
  const { language } = useAppContext();
  const { speak, stop, speaking } = useSpeech();

  return (
    <button
      type="button"
      onClick={() => (speaking ? stop() : speak(text, language))}
      className="w-full rounded-full bg-primary px-6 py-5 text-lg font-bold text-on-primary transition duration-300 active:scale-[0.98]"
    >
      <span className="flex items-center justify-center gap-3">
        <Icon name={speaking ? 'stop_circle' : 'volume_up'} filled className="text-[1.7rem]" />
        <span>{speaking ? (language === 'hi' ? 'आवाज़ रोकें' : 'Stop audio') : language === 'hi' ? 'यह स्टेप सुनें' : 'Listen to this step'}</span>
      </span>
    </button>
  );
}
