import { useState, useMemo } from 'react';
import { FileItem, ViewMode } from '../../types/file';
import FileListItem from './FileListItem';
import FileGridItem from './FileGridItem';
import ViewToggle from './ViewToggle';

interface FileListProps {
  files: FileItem[];
}

const FILE_TYPE_ORDER = {
  folder: 0,
  doc: 1,
  spreadsheet: 2,
  pdf: 3,
  image: 4,
};

export default function FileList({ files }: FileListProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('list');

  const { folders, sortedFiles } = useMemo(() => {
    const folders = files.filter(file => file.type === 'folder');
    const nonFolders = files.filter(file => file.type !== 'folder')
      .sort((a, b) => FILE_TYPE_ORDER[a.type] - FILE_TYPE_ORDER[b.type]);

    return {
      folders,
      sortedFiles: nonFolders
    };
  }, [files]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">All Documents</h1>
        <div className="flex items-center gap-2">
          <ViewToggle mode={viewMode} onChange={setViewMode} />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            New
          </button>
        </div>
      </div>
      
      {viewMode === 'list' ? (
        <div className="border rounded-lg overflow-hidden">
          <div className="grid grid-cols-[1fr,200px,200px,100px,50px] bg-gray-50 px-4 py-2 border-b">
            <div>Name</div>
            <div>Uploaded by</div>
            <div>Last Modified</div>
            <div>File size</div>
            <div>Action</div>
          </div>
          {files.map(file => (
            <FileListItem key={file.id} file={file} />
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          {folders.length > 0 && (
            <section>
              <h2 className="text-lg font-medium mb-4">Folders</h2>
              <div className="grid grid-cols-4 gap-4">
                {folders.map(folder => (
                  <FileGridItem key={folder.id} file={folder} />
                ))}
              </div>
            </section>
          )}
          
          {sortedFiles.length > 0 && (
            <section>
              <h2 className="text-lg font-medium mb-4">Files</h2>
              <div className="grid grid-cols-4 gap-4">
                {sortedFiles.map(file => (
                  <FileGridItem key={file.id} file={file} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
} 