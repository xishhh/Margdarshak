import { useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Icon from '../components/Icon';
import LanguageToggle from '../components/LanguageToggle';
import TopBar from '../components/TopBar';
import TutorialStepCard from '../components/TutorialStepCard';
import VoiceButton from '../components/VoiceButton';
import { tutorials } from '../data/content';
import { useAppContext } from '../hooks/useAppContext';
import { useSpeech } from '../hooks/useSpeech';

export default function TutorialPage() {
  const { appId, tutorialId } = useParams();
  const { language } = useAppContext();
  const tutorial = useMemo(
    () => tutorials.find((entry) => entry.appId === appId && entry.id === tutorialId),
    [appId, tutorialId],
  );
  const [stepIndex, setStepIndex] = useState(0);
  const contentRef = useRef(null);
  const { speak, stop, speaking, supported, voiceCount } = useSpeech();

  if (!tutorial) {
    return null;
  }

  const currentStep = tutorial.steps[stepIndex];
  const totalSteps = tutorial.steps.length;
  const stepLabel = language === 'hi' ? `स्टेप ${stepIndex + 1} / ${totalSteps}` : `Step ${stepIndex + 1} of ${totalSteps}`;
  const title = language === 'hi' ? tutorial.title_hi : tutorial.title_en;
  const stepText = language === 'hi' ? currentStep.text_hi : currentStep.text_en;
  const voiceText =
    language === 'hi'
      ? currentStep.voice_hi || currentStep.text_hi
      : currentStep.voice_en || currentStep.text_en;
  const safetyTip = language === 'hi' ? tutorial.safetyTip_hi : tutorial.safetyTip_en;
  const progress = ((stepIndex + 1) / totalSteps) * 100;
  const mediaType = currentStep.mediaType || (currentStep.video ? 'video' : 'image');
  const mediaSrc = currentStep.media || currentStep.video || currentStep.image;

  const goToPreviousStep = () => {
    stop();
    setStepIndex((index) => Math.max(index - 1, 0));
  };

  const goToNextStep = () => {
    stop();
    setStepIndex((index) => Math.min(index + 1, totalSteps - 1));
  };

  return (
    <>
      <TopBar title="" rightSlot={<LanguageToggle compact />} />
      <main ref={contentRef} className="app-shell pb-40 md:pb-44">
        <section className="mt-2">
          <h2 className="editorial-title text-[2.25rem] md:text-[2.45rem]">{title}</h2>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-3 flex-1 overflow-hidden rounded-full bg-surface-container">
              <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-sm font-bold text-primary">{stepLabel}</span>
          </div>
        </section>

        <section className="mt-5 grid gap-4 md:mt-7 md:gap-6 md:grid-cols-[minmax(0,1fr)_320px] md:items-start">
          <div className="space-y-4">
            <TutorialStepCard
              mediaSrc={mediaSrc}
              mediaType={mediaType}
              text={stepText}
              stepLabel={stepLabel}
              totalLabel={stepLabel}
              headerAction={<VoiceButton onSpeak={() => speak(voiceText, language)} onStop={stop} speaking={speaking} disabled={!supported} />}
            />

            {!supported ? (
              <p className="rounded-2xl bg-error-container px-4 py-3 text-sm font-medium text-on-error-container">
                {language === 'hi'
                  ? 'इस ब्राउज़र में आवाज़ सहायता उपलब्ध नहीं है। कृपया Chrome में खोलकर दोबारा देखें।'
                  : 'Voice guidance is not available in this browser. Please try opening the app in Chrome.'}
              </p>
            ) : voiceCount === 0 ? (
              <p className="rounded-2xl bg-surface-container-low px-4 py-3 text-sm font-medium text-on-surface-variant">
                {language === 'hi'
                  ? 'आवाज़ लोड हो रही है। अगर आवाज़ न आए तो पेज एक बार रिफ्रेश करें।'
                  : 'Voices are still loading. If you do not hear audio, refresh the page once.'}
              </p>
            ) : null}

            <div className="rounded-[1.75rem] border border-amber-300 bg-amber-50 px-5 py-4 text-base font-semibold text-amber-900">
              <span className="flex items-center gap-2">
                <Icon name="gpp_maybe" className="text-[1.3rem]" />
                {language === 'hi' ? `सुरक्षा टिप: ${safetyTip}` : `Safety Tip: ${safetyTip}`}
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-[7.25rem] left-0 right-0 z-40 mx-auto max-w-md px-5 md:bottom-24 md:max-w-3xl md:px-6">
        <div className="rounded-[2rem] bg-white/95 p-3 shadow-ambient backdrop-blur-md md:p-4">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={goToPreviousStep}
              disabled={stepIndex === 0}
              className="min-w-0 flex-1 rounded-full bg-surface-container-high px-4 py-4 text-lg font-bold text-on-surface disabled:opacity-50"
            >
              {language === 'hi' ? 'पीछे' : 'Back'}
            </button>
            <button
              type="button"
              onClick={goToNextStep}
              disabled={stepIndex === totalSteps - 1}
              className="min-w-0 flex-[1.35] rounded-full bg-secondary px-4 py-4 text-lg font-bold text-on-secondary disabled:opacity-50"
            >
              <span className="flex items-center justify-center gap-2">
                <span>{language === 'hi' ? 'अगला स्टेप' : 'Next Step'}</span>
                <Icon name="arrow_forward" className="text-[1.5rem]" />
              </span>
            </button>
          </div>
        </div>
      </footer>
      <BottomNav />
    </>
  );
}
