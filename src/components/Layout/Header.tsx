import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="h-16 border-b flex items-center px-4 justify-between">
      <div className="flex items-center gap-2">
        <img src="/google-drive-logo.png" alt="Drive Logo" className="h-6" />
        <h1 className="text-xl font-medium">Drive Clone</h1>
      </div>
      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search in Drive"
            className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="w-8 h-8 rounded-full bg-gray-200">
          {/* User avatar or initial */}
          <span className="text-sm">M</span>
        </button>
      </div>
    </header>
  );
} 