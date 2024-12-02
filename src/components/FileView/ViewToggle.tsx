import { Squares2X2Icon as ViewGridIcon, ListBulletIcon as ViewListIcon } from '@heroicons/react/24/outline';
import { ViewMode } from '../../types/file';
import classNames from 'classnames';

interface ViewToggleProps {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export default function ViewToggle({ mode, onChange }: ViewToggleProps) {
  return (
    <div className="flex bg-gray-100 rounded-lg p-1">
      <button
        className={classNames(
          'p-2 rounded-md',
          mode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
        )}
        onClick={() => onChange('list')}
      >
        <ViewListIcon className="w-5 h-5" />
      </button>
      <button
        className={classNames(
          'p-2 rounded-md',
          mode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
        )}
        onClick={() => onChange('grid')}
      >
        <ViewGridIcon className="w-5 h-5" />
      </button>
    </div>
  );
} 