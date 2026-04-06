import { Link } from 'react-router-dom';
import Icon from './Icon';
import { useAppContext } from '../hooks/useAppContext';

export default function TaskCard({ appId, tutorial }) {
  const { language } = useAppContext();
  const title = language === 'hi' ? tutorial.title_hi : tutorial.title_en;
  const href = `/tutorial/${appId}/${tutorial.id}`;

  return (
    <Link
      to={href}
      className="surface-card flex items-center gap-5 rounded-xl border-l-8 border-primary p-6 transition duration-300 active:scale-[0.98]"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-fixed text-primary">
        <Icon name="play_circle" className="text-[2rem]" />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-1 text-base text-on-surface-variant">
          {language === 'hi' ? 'हर कदम आसान भाषा में' : 'Each step explained clearly'}
        </p>
      </div>
      <Icon name="chevron_right" className="text-[2rem] text-outline" />
    </Link>
  );
}
