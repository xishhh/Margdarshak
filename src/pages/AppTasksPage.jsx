import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import TaskCard from '../components/TaskCard';
import TopBar from '../components/TopBar';
import { apps, tutorials } from '../data/content';
import { useAppContext } from '../hooks/useAppContext';

export default function AppTasksPage() {
  const { appId } = useParams();
  const { language } = useAppContext();
  const app = apps.find((entry) => entry.id === appId);
  const appTutorials = useMemo(() => tutorials.filter((entry) => entry.appId === appId), [appId]);

  if (!app) {
    return null;
  }

  return (
    <>
      <TopBar />
      <main className="app-shell">
        <section className="mt-4">
          <h2 className="editorial-title text-[3rem]">
            {language === 'hi' ? `${app.name} पर क्या करना है?` : `What would you like to do on ${app.name}?`}
          </h2>
          <p className="mt-4 text-xl leading-8 text-on-surface-variant">
            {language === 'hi'
              ? 'नीचे एक काम चुनिए। हम हर कदम बहुत आसान तरीके से समझाएंगे।'
              : "Choose a task below. We'll guide you through every step."}
          </p>
        </section>

        <section className="mt-8 space-y-5">
          {appTutorials.map((tutorial) => (
            <TaskCard key={tutorial.id} appId={appId} tutorial={tutorial} />
          ))}
        </section>

        <div className="mt-10 rounded-xl bg-surface-container-low p-6 text-center">
          <p className="text-lg italic text-tertiary">
            {language === 'hi' ? 'आराम से करें। हम हर कदम पर आपके साथ हैं।' : 'Take your time. We are here to help at every step.'}
          </p>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
