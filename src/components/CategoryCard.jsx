import { Link } from 'react-router-dom';
import Icon from './Icon';
import { getLocalizedText } from '../utils/i18n';
import { useAppContext } from '../hooks/useAppContext';

export default function CategoryCard({ category }) {
  const { language } = useAppContext();

  return (
    <Link
      to={`/category/${category.id}`}
      className="surface-card flex min-h-[188px] flex-col items-start rounded-xl p-6 transition duration-300 active:scale-[0.98]"
    >
      <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${category.accent}`}>
        <Icon name={category.icon} className="text-[2.2rem]" />
      </div>
      <h3 className="text-2xl font-bold">{getLocalizedText(language, category.headline)}</h3>
      <p className="mt-2 text-base leading-7 text-on-surface-variant">{getLocalizedText(language, category.description)}</p>
    </Link>
  );
}
