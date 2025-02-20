import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DocLayout from "./DocLayout";
import NoDocLayout from "./NoDocLayout";
import data from "./data.json";
export default function Home() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [openedDocumentName, setOpenedDocumentName] = useState("");
  const [openedDocumentContent, setOpenedDocumentContent] = useState("");
  const [documentsList, setDocumentsList] = useState<
    { createdAt: string; name: string; content: string }[]
  >([]);

  useEffect(() => {
    setDocumentsList(data);
  }, []);
  return (
    <div className="h-dvh overflow-hidden">
      <Navbar
        openedDocumentName={openedDocumentName}
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
        setOpenedDocumentName={setOpenedDocumentName}
      />
      <Sidebar
        sidebarIsOpen={sidebarIsOpen}
        openedDocumentName={openedDocumentName}
        setOpenedDocumentName={setOpenedDocumentName}
        setOpenedDocumentContent={setOpenedDocumentContent}
        documentsList={documentsList}
      />
      {openedDocumentName ? (
        <DocLayout
          openedDocumentName={openedDocumentName}
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
