import { useState } from "react";
import Editor from "./Editor";
import Previev from "./Previev";
export default function DocLayout({
  sidebarIsOpen,
  openedDocumentContent,
  setOpenedDocumentContent,
}) {
  const [showPreview, setShowPreview] = useState(true);
  const [showEditor, setShowEditor] = useState(true);
  const [markdown, setMarkdown] = useState("");
  return (
    <div
      className={`transition-all sm:grid h-full ${
        !showEditor && "sm:grid-cols-2"
      } ${sidebarIsOpen && "sm:ml-64"}`}
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
