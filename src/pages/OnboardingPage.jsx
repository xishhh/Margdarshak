import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Icon from '../components/Icon';
import { useAppContext } from '../hooks/useAppContext';
import { classNames } from '../utils/classNames';

const options = [
  { id: 'hi', label: 'Hindi', icon: 'translate' },
  { id: 'en', label: 'English', icon: 'language' },
];

export default function OnboardingPage() {
  const navigate = useNavigate();
  const { language, setLanguage, finishOnboarding } = useAppContext();
  const [selected, setSelected] = useState(language);

  const continueToHome = () => {
    setLanguage(selected);
    finishOnboarding();
    navigate('/home');
  };

  return (
    <>
      <TopBar showBack={false} />
      <main className="app-shell flex flex-col items-center justify-center bg-hero-glow text-center">
        <div className="mb-8 mt-2 flex h-48 w-48 items-center justify-center rounded-[2rem] bg-slate-900 shadow-ambient">
          <div className="rounded-full border border-cyan-700/30 p-6 shadow-[0_0_0_12px_rgba(29,78,216,0.08),0_0_0_24px_rgba(8,145,178,0.05)]">
            <div className="rounded-xl border border-cyan-500/50 bg-slate-800 px-6 py-5 text-white">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-cyan-100">Friendly</p>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-cyan-100">Digital</p>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-cyan-100">Guide</p>
            </div>
          </div>
        </div>

        <h2 className="editorial-title max-w-[10ch] text-[2.55rem] leading-[1.1]">Namaste! Welcome to Margdarshak</h2>
        <p className="mt-5 max-w-sm text-[1.55rem] leading-[1.7] text-on-surface-variant">
          We help you learn everyday digital tasks safely and easily. Don&apos;t worry, we&apos;re here to guide you.
        </p>

        <div className="mt-12 w-full max-w-sm text-left">
          <p className="mb-5 text-center text-xl font-medium text-tertiary">Please choose your language:</p>
          <div className="space-y-4">
            {options.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelected(option.id)}
                className={classNames(
                  'flex w-full items-center justify-between rounded-full px-6 py-5 text-xl font-medium transition duration-300 active:scale-[0.98]',
                  selected === option.id ? 'bg-emerald-700 text-white shadow-ambient' : 'bg-white text-on-surface',
                )}
              >
                <span className="flex items-center gap-4">
                  <Icon name={option.icon} className="text-[1.9rem]" />
                  <span>{option.label}</span>
                </span>
                {selected === option.id ? <Icon name="check_circle" filled className="text-[1.7rem]" /> : null}
              </button>
            ))}
          </div>
          <p className="mt-4 text-center text-sm italic text-tertiary">Take your time choosing your preferred language.</p>
        </div>

        <button
          type="button"
          onClick={continueToHome}
          className="mt-10 flex w-full max-w-sm items-center justify-center gap-3 rounded-full bg-secondary px-8 py-6 text-2xl font-bold text-on-secondary transition duration-300 active:scale-[0.98]"
        >
          <span>Continue</span>
          <Icon name="arrow_forward" className="text-[1.9rem]" />
        </button>
      </main>
    </>
  );
}
