import BottomNav from '../components/BottomNav';
import TopBar from '../components/TopBar';
import { safetyTips } from '../data/content';
import { useAppContext } from '../hooks/useAppContext';
import { getLocalizedText } from '../utils/i18n';
import Icon from '../components/Icon';

export default function SafetyPage() {
  const { language } = useAppContext();

  return (
    <>
      <TopBar />
      <main className="app-shell">
        <section className="mt-4">
          <h2 className="editorial-title text-[3rem]">
            {language === 'hi' ? 'ऑनलाइन सुरक्षित रहें' : 'Stay Safe Online'}
          </h2>
          <div className="mt-4 h-2 w-24 rounded-full bg-primary" />
          <p className="mt-5 text-xl leading-8 text-on-surface-variant">
            {language === 'hi'
              ? 'इन आसान नियमों को याद रखें ताकि आपका पैसा और जानकारी सुरक्षित रहे।'
              : "Remember these simple rules to keep your money and identity safe. Don't worry, just stay alert."}
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          {safetyTips.map((tip) => (
            <article key={tip.title.en} className="surface-card rounded-xl p-6">
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${tip.accent}`}>
                <Icon name={tip.icon} filled className="text-[1.8rem]" />
              </div>
              <h3 className="text-2xl font-bold leading-snug">{getLocalizedText(language, tip.title)}</h3>
              <p className="mt-3 text-lg leading-8 text-on-surface-variant">{getLocalizedText(language, tip.text)}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 overflow-hidden rounded-xl bg-cta-gradient p-7 text-white">
          <h3 className="text-3xl font-extrabold">{language === 'hi' ? 'अगर संदेह हो तो?' : 'Feeling uncertain?'}</h3>
          <p className="mt-4 text-lg leading-8 text-white/90">
            {language === 'hi'
              ? 'अगर कोई मैसेज, कॉल या भुगतान अजीब लगे, रुकें और परिवार के किसी सदस्य से पूछें।'
              : 'If a message, call, or payment request feels suspicious, pause first and ask a trusted family member.'}
          </p>
          <button
            type="button"
            className="mt-6 rounded-full bg-secondary px-6 py-4 text-lg font-bold text-on-secondary transition duration-300 active:scale-[0.98]"
          >
            {language === 'hi' ? 'मदद लें' : 'Ask for help'}
          </button>
        </section>

        <p className="mt-8 text-center text-lg italic text-tertiary">
          {language === 'hi'
            ? 'आपकी सुरक्षा सबसे ज़रूरी है। आराम से पढ़ें और बिना जल्दी किए फैसला लें।'
            : 'Your security is our top priority. Take all the time you need to feel safe.'}
        </p>
      </main>
      <BottomNav />
    </>
  );
}
