import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DocLayout from "./DocLayout";
import NoDocLayout from "./NoDocLayout";
export default function Home() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [openedDocumentID, setOpenedDocumentID] = useState("");
  const [openedDocumentName, setOpenedDocumentName] = useState("");
  const [openedDocumentContent, setOpenedDocumentContent] = useState("");
  return (
    <div className="h-[100dvh] overflow-hidden">
      <Navbar
        openedDocumentName={openedDocumentName}
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      <Sidebar
        sidebarIsOpen={sidebarIsOpen}
        setOpenedDocumentID={setOpenedDocumentID}
        setOpenedDocumentName={setOpenedDocumentName}
        openedDocumentID={openedDocumentID}
        setOpenedDocumentContent={setOpenedDocumentContent}
      />
      {openedDocumentID ? (
        <DocLayout
          openedDocumentID={openedDocumentID}
          sidebarIsOpen={sidebarIsOpen}
          openedDocumentContent={openedDocumentContent}
          setOpenedDocumentContent={setOpenedDocumentContent}
        />
      ) : (
        <NoDocLayout sidebarIsOpen={sidebarIsOpen} />
      )}
    </div>
  );
}
