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
  const [documentsChanged, setDocumentsChanged] = useState(false);

  useEffect(() => {
    fetchDocuments().then((data) => {
      if (data) {
        setDocumentsList(data);
      }
    });
  }, [documentsChanged]);

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
        setOpenedDocumentName={setOpenedDocumentName}
        openedDocumentId={openedDocumentId}
        setOpenedDocumentId={setOpenedDocumentId}
        setOpenedDocumentContent={setOpenedDocumentContent}
        documentsList={documentsList}
        setDocumentsChanged={setDocumentsChanged}
        documentsChanged={documentsChanged}
      />
      {openedDocumentName ? (
        <DocLayout
          openedDocumentName={openedDocumentName}
          sidebarIsOpen={sidebarIsOpen}
          openedDocumentContent={openedDocumentContent}
          setOpenedDocumentContent={setOpenedDocumentContent}
        />
      ) : (
        <NoDocLayout
          sidebarIsOpen={sidebarIsOpen}
          setDocumentsChanged={setDocumentsChanged}
          documentsChanged={documentsChanged}
        />
      )}
    </div>
  );
}
