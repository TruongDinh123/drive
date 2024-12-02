import { FileItem } from '../../types/file';
import { 
  DocumentIcon, 
  FolderIcon, 
  PhotoIcon,
  TableCellsIcon,
  EllipsisHorizontalIcon
} from '@heroicons/react/24/outline';

interface FileGridItemProps {
  file: FileItem;
}

export default function FileGridItem({ file }: FileGridItemProps) {
  const getFileIcon = () => {
    switch (file.type) {
      case 'folder':
        return <FolderIcon className="w-12 h-12 text-gray-400" />;
      case 'image':
        return <PhotoIcon className="w-12 h-12 text-gray-400" />;
      case 'spreadsheet':
        return <TableCellsIcon className="w-12 h-12 text-gray-400" />;
      default:
        return <DocumentIcon className="w-12 h-12 text-gray-400" />;
    }
  };

  return (
    <div className="p-4 border rounded-lg hover:bg-gray-50 group">
      <div className="flex items-center justify-between mb-4">
        {getFileIcon()}
        <button className="p-1 rounded-full hover:bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
          <EllipsisHorizontalIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <div className="space-y-2">
        <h3 className="font-medium truncate">{file.name}</h3>
        <div className="flex items-center gap-2">
          {file.uploadedBy.avatar ? (
            <img 
              src={file.uploadedBy.avatar} 
              className="w-6 h-6 rounded-full"
              alt={file.uploadedBy.name}
            />
          ) : (
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm">
              {file.uploadedBy.name[0].toUpperCase()}
            </div>
          )}
          <span className="text-sm text-gray-500">{file.uploadedBy.name}</span>
        </div>
        <div className="text-sm text-gray-500">
          {file.lastModified}
        </div>
      </div>
    </div>
  );
} 