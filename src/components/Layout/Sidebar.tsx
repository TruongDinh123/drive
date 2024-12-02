import { FolderIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  return (
    <aside className="w-60 border-r p-2">
      <nav className="space-y-1">
        <a 
          href="#" 
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-100 text-blue-600"
        >
          <FolderIcon className="w-5 h-5" />
          All Documents
        </a>
        <a 
          href="#" 
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
        >
          <TrashIcon className="w-5 h-5" />
          Trash
        </a>
      </nav>
    </aside>
  );
} 