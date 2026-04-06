import { useAppContext } from '../hooks/useAppContext';
import { classNames } from '../utils/classNames';

export default function LanguageToggle({ compact = false }) {
  const { language, setLanguage } = useAppContext();

  return (
    <div className={classNames('flex rounded-full bg-surface-container p-1', compact ? 'text-xs' : 'text-sm')}>
      {[
        { id: 'en', label: 'English' },
        { id: 'hi', label: 'Hindi' },
      ].map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => setLanguage(option.id)}
          className={classNames(
            'rounded-full px-4 py-2 font-semibold transition',
            language === option.id ? 'bg-primary text-on-primary' : 'text-on-surface-variant',
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
