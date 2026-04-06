import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon';
import { useAppContext } from '../hooks/useAppContext';

const items = [
  { to: '/home', label: { en: 'Home', hi: 'होम' }, icon: 'home' },
  { to: '/home', label: { en: 'Learn', hi: 'सीखें' }, icon: 'menu_book', match: ['/category', '/app', '/tutorial'] },
  { to: '/safety', label: { en: 'Safety', hi: 'सुरक्षा' }, icon: 'gpp_maybe' },
];

export default function BottomNav() {
  const location = useLocation();
  const { language } = useAppContext();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-md items-center justify-around rounded-t-[2.6rem] bg-white px-4 pb-8 pt-4 shadow-[0_-10px_40px_rgba(16,27,48,0.06)] md:max-w-3xl">
        {items.map((item) => {
          const isActive =
            location.pathname === item.to ||
            item.match?.some((prefix) => location.pathname.startsWith(prefix));

          return (
            <Link
              key={item.label.en}
              to={item.to}
              className={`nav-pill ${isActive ? 'bg-emerald-100 text-emerald-900' : 'text-slate-500'}`}
            >
              <Icon name={item.icon} filled={isActive} className="text-[1.8rem]" />
              <span>{language === 'hi' ? item.label.hi : item.label.en}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
