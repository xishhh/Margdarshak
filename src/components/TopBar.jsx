import { Link, useNavigate } from 'react-router-dom';
import Icon from './Icon';

export default function TopBar({ title = 'Margdarshak', showBack = true, showHome = true, rightSlot = null }) {
  const navigate = useNavigate();

  return (
    <header className="top-bar">
      <div className="top-bar-inner">
        <div className="flex items-center gap-3">
          {showBack ? (
            <button type="button" className="icon-button" onClick={() => navigate(-1)} aria-label="Go back">
              <Icon name="arrow_back" className="text-[28px]" />
            </button>
          ) : (
            <div className="h-12 w-12" />
          )}
          <h1 className="text-[1.7rem] font-bold tracking-tight">{title}</h1>
        </div>

        <div className="flex items-center gap-2">
          {rightSlot}
          {showHome ? (
            <Link to="/home" className="icon-button" aria-label="Go home">
              <Icon name="home" className="text-[28px]" />
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}
