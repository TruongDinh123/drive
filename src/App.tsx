import AppLayout from "./components/Layout/AppLayout";
import FileList from "./components/FileView/FileList";
import { FileItem } from "./types/file";

const MOCK_FILES: FileItem[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    uploadedBy: {
      name: "Annie Jane",
      avatar: "https://example.com/avatar1.jpg",
    },
    lastModified: "01/10/2024",
    size: "-",
  },
  {
    id: "2",
    name: "Projects",
    type: "folder",
    uploadedBy: {
      name: "me",
    },
    lastModified: "01/10/2024",
    size: "-",
  },
  {
    id: "3",
    name: "Report.doc",
    type: "doc",
    uploadedBy: {
      name: "me",
    },
    lastModified: "01/10/2024",
    size: "2.1 MB",
  },
  {
    id: "4",
    name: "Budget.xls",
    type: "spreadsheet",
    uploadedBy: {
      name: "me",
    },
    lastModified: "01/10/2024",
    size: "47 KB",
  },
  {
    id: "5",
    name: "Contract.pdf",
    type: "pdf",
    uploadedBy: {
      name: "me",
    },
    lastModified: "01/10/2024",
    size: "10 MB",
  },
  {
    id: "6",
    name: "Profile.jpg",
    type: "image",
    uploadedBy: {
      name: "me",
    },
    lastModified: "01/10/2024",
    size: "32 KB",
  },
];

function App() {
  return (
    // <div className="debug">
    <AppLayout>
      <FileList files={MOCK_FILES} />
    </AppLayout>
    // </div>
  );
}

export default App;
