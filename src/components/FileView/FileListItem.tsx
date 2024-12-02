import { FileItem } from '../../types/file';
import { 
  DocumentIcon, 
  FolderIcon, 
  PhotoIcon,
  TableCellsIcon
} from '@heroicons/react/24/outline';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';

interface FileListItemProps {
  file: FileItem;
}

export default function FileListItem({ file }: FileListItemProps) {
  const getFileIcon = () => {
    switch (file.type) {
      case 'folder':
        return <FolderIcon className="w-5 h-5 text-gray-400" />;
      case 'image':
        return <PhotoIcon className="w-5 h-5 text-gray-400" />;
      case 'spreadsheet':
        return <TableCellsIcon className="w-5 h-5 text-gray-400" />;
      default:
        return <DocumentIcon className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="grid grid-cols-[1fr,200px,200px,100px,50px] px-4 py-2 hover:bg-gray-50 border-b items-center">
      <div className="flex items-center gap-2">
        {getFileIcon()}
        <span>{file.name}</span>
      </div>
      <div className="flex items-center gap-2">
        {file.uploadedBy.avatar ? (
          <img 
            src={file.uploadedBy.avatar} 
            className="w-6 h-6 rounded-full"
            alt={file.uploadedBy.name}
          />
        ) : (
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
            {file.uploadedBy.name[0]}
          </div>
        )}
        <span>{file.uploadedBy.name}</span>
      </div>
      <div>{file.lastModified}</div>
      <div>{file.size}</div>
      <button className="p-1 hover:bg-gray-100 rounded-full">
        <EllipsisVerticalIcon className="w-5 h-5 text-gray-500" />
      </button>
    </div>
  );
} 