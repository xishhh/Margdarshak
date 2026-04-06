import { Link } from 'react-router-dom';
import Icon from './Icon';
import { useAppContext } from '../hooks/useAppContext';
import { getLocalizedText } from '../utils/i18n';

export default function AppCard({ app }) {
  const { language } = useAppContext();

  return (
    <Link
      to={`/app/${app.id}`}
      className="surface-card flex items-center gap-5 rounded-xl p-6 transition duration-300 active:scale-[0.98]"
    >
      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${app.accent}`}>
        <Icon name={app.icon} filled className="text-[2.2rem]" />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold">{app.name}</h3>
        <p className="mt-1 text-base font-semibold text-secondary">{getLocalizedText(language, app.note)}</p>
      </div>
      <Icon name="chevron_right" className="text-[2rem] text-outline" />
    </Link>
  );
}
