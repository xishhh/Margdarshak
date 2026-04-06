import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import AppCard from '../components/AppCard';
import BottomNav from '../components/BottomNav';
import TopBar from '../components/TopBar';
import { apps, categories } from '../data/content';
import { useAppContext } from '../hooks/useAppContext';
import { getLocalizedText } from '../utils/i18n';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const { language } = useAppContext();
  const category = categories.find((entry) => entry.id === categoryId);
  const matchingApps = useMemo(() => apps.filter((entry) => entry.categoryId === categoryId), [categoryId]);

  if (!category) {
    return null;
  }

  return (
    <>
      <TopBar />
      <main className="app-shell">
        <section className="mt-4">
          <h2 className="editorial-title text-[3rem]">
            {language === 'hi' ? 'सीखने के लिए ऐप चुनें' : 'Choose an App to Learn'}
          </h2>
          <p className="mt-4 max-w-[92%] text-xl leading-8 text-on-surface-variant">
            {getLocalizedText(language, category.description)}
          </p>
        </section>

        <section className="mt-8 space-y-5">
          {matchingApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </section>

        <div className="mt-10 rounded-xl bg-surface-container-low p-6 text-center">
          <p className="text-lg italic text-tertiary">
            {language === 'hi'
              ? 'अगर आपका ऐप यहाँ नहीं है, चिंता न करें। नए ऐप बाद में जोड़े जा सकते हैं।'
              : 'If your app is not listed yet, no problem. New apps can be added later.'}
          </p>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
