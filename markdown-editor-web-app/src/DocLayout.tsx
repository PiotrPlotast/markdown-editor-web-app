import { useState } from "react";
import Editor from "./Editor";
import Previev from "./Preview";

interface DocLayoutProps {
  sidebarIsOpen: boolean;
  openedDocumentContent: string;
  setOpenedDocumentContent: React.Dispatch<React.SetStateAction<string>>;
}
export default function DocLayout({
  sidebarIsOpen,
  openedDocumentContent,
  setOpenedDocumentContent,
}: DocLayoutProps) {
  const [showPreview, setShowPreview] = useState(true);
  const [showEditor, setShowEditor] = useState(true);
  return (
    <div
      className={`transition-all md:grid h-full ${
        !showEditor && "md:grid-cols-2"
      } ${sidebarIsOpen && "md:ml-64"}`}
    >
      <Editor
        showPreview={showPreview}
        setShowPreview={setShowPreview}
        showEditor={showEditor}
        setShowEditor={setShowEditor}
        openedDocumentContent={openedDocumentContent}
        setOpenedDocumentContent={setOpenedDocumentContent}
      />
      <Previev
        showPreview={showPreview}
        setShowPreview={setShowPreview}
        showEditor={showEditor}
        setShowEditor={setShowEditor}
        openedDocumentContent={openedDocumentContent}
      />
    </div>
  );
}
