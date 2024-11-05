import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DocLayout from "./DocLayout";
import NoDocLayout from "./NoDocLayout";
export default function Home() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [openedDocumentID, setOpenedDocumentID] = useState("");
  const [openedDocumentName, setOpenedDocumentName] = useState("");
  const [openedDocumentContent, setOpenedDocumentContent] = useState("");
  const [documentsList, setDocumentsList] = useState([]);
  const [documentCount, setDocumentCount] = useState(0);

  return (
    <div className="h-[100dvh] overflow-hidden">
      <Navbar
        openedDocumentName={openedDocumentName}
        openedDocumentID={openedDocumentID}
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      <Sidebar
        sidebarIsOpen={sidebarIsOpen}
        setOpenedDocumentID={setOpenedDocumentID}
        setOpenedDocumentName={setOpenedDocumentName}
        openedDocumentID={openedDocumentID}
        setOpenedDocumentContent={setOpenedDocumentContent}
        documentsList={documentsList}
        setDocumentCount={setDocumentCount}
      />
      {openedDocumentID ? (
        <DocLayout
          openedDocumentID={openedDocumentID}
          sidebarIsOpen={sidebarIsOpen}
          openedDocumentContent={openedDocumentContent}
          setOpenedDocumentContent={setOpenedDocumentContent}
        />
      ) : (
        <NoDocLayout
          sidebarIsOpen={sidebarIsOpen}
          setDocumentCount={setDocumentCount}
        />
      )}
    </div>
  );
}
