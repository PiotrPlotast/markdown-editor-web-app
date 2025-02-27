import { useState } from "react";
import Editor from "./Editor";
import Previev from "./Preview";

interface DocLayoutProps {
  sidebarIsOpen: boolean;
  openedDocumentName: string;
  openedDocumentContent: string;
  setOpenedDocumentContent: React.Dispatch<React.SetStateAction<string>>;
}
export default function DocLayout({
  sidebarIsOpen,
  openedDocumentContent,
}: DocLayoutProps) {
  const [showPreview, setShowPreview] = useState(true);
  const [showEditor, setShowEditor] = useState(true);
  const [markdown, setMarkdown] = useState(openedDocumentContent);
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
        markdown={markdown}
        setMarkdown={setMarkdown}
      />
      <Previev
        showPreview={showPreview}
        setShowPreview={setShowPreview}
        showEditor={showEditor}
        setShowEditor={setShowEditor}
        markdown={markdown}
      />
    </div>
  );
}
