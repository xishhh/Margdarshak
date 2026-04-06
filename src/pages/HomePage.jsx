import { Link } from 'react-router-dom';
import { categories } from '../data/content';
import CategoryCard from '../components/CategoryCard';
import BottomNav from '../components/BottomNav';
import TopBar from '../components/TopBar';
import { useAppContext } from '../hooks/useAppContext';

export default function HomePage() {
  const { language } = useAppContext();

  return (
    <>
      <TopBar showBack={false} />
      <main className="app-shell">
        <section className="mt-4">
          <h2 className="editorial-title text-[3.1rem]">
            {language === 'hi' ? 'नमस्ते! आज क्या सीखना है?' : 'Good morning! What would you like to learn?'}
          </h2>
          <p className="mt-3 text-xl leading-8 text-on-surface-variant">
            {language === 'hi'
              ? 'सब कुछ आसान है। बस एक श्रेणी चुनिए और हम आपको धीरे-धीरे हर कदम दिखाएंगे।'
              : 'Everything is looking good. Pick a category and we will guide you one step at a time.'}
          </p>
        </section>

        <section className="mt-8">
          <label className="group relative block">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-primary">
              <span className="material-symbols-outlined text-[2rem]">search</span>
            </span>
            <input
              type="text"
              disabled
              value={language === 'hi' ? 'आज क्या करना है?' : 'What do you want to do today?'}
              className="w-full rounded-xl bg-surface-container-highest py-6 pl-16 pr-5 text-lg text-on-surface outline-none"
              readOnly
            />
          </label>
          <p className="mt-3 px-2 text-sm italic text-tertiary">
            {language === 'hi' ? 'आराम से पढ़ें और अपना समय लें।' : 'Take your time. Everything here is designed to be simple.'}
          </p>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-5">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </section>

        <Link
          to="/safety"
          className="mt-8 flex items-center gap-4 rounded-xl bg-error-container p-6 text-left shadow-ambient"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-error">
            <span className="material-symbols-outlined text-[2rem]">gpp_maybe</span>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-on-error-container">
              {language === 'hi' ? 'ऑनलाइन सुरक्षा टिप्स' : 'Stay Safe: Scam Prevention Tips'}
            </h3>
            <p className="mt-1 text-base text-on-error-container/80">
              {language === 'hi' ? 'ज़रूरी सुरक्षा नियम एक जगह' : 'Important digital safety reminders'}
            </p>
          </div>
        </Link>
      </main>
      <BottomNav />
    </>
  );
}
