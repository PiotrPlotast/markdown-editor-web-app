import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DocLayout from "./DocLayout";
import NoDocLayout from "./NoDocLayout";
import { fetchDocuments } from "./supabase/db";

export default function Home() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [openedDocumentName, setOpenedDocumentName] = useState("");
  const [openedDocumentContent, setOpenedDocumentContent] = useState("");
  const [openedDocumentId, setOpenedDocumentId] = useState("");
  const [documentsList, setDocumentsList] = useState<
    { created_at: string; name: string; content: string; id: string }[]
  >([]);

  useEffect(() => {
    fetchDocuments().then((data) => {
      if (data) {
        setDocumentsList(data);
      }
    });
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
        openedDocumentId={openedDocumentId}
        setOpenedDocumentId={setOpenedDocumentId}
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
