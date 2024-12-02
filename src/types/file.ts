export interface FileItem {
  id: string;
  name: string;
  type: 'folder' | 'doc' | 'pdf' | 'image' | 'spreadsheet';
  uploadedBy: {
    name: string;
    avatar?: string;
  };
  lastModified: string;
  size?: string;
}

export type ViewMode = 'list' | 'grid'; 