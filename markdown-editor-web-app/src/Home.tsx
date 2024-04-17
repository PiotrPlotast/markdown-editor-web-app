import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DocLayout from "./DocLayout";
import NoDocLayout from "./NoDocLayout";
export default function Home() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [documentIsOpen, setDocumentIsOpen] = useState(true);
  return (
    <div className="h-[100dvh] overflow-hidden">
      <Navbar
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      <Sidebar sidebarIsOpen={sidebarIsOpen} />
      {documentIsOpen ? (
        <DocLayout sidebarIsOpen={sidebarIsOpen} />
      ) : (
        <NoDocLayout sidebarIsOpen={sidebarIsOpen} />
      )}
    </div>
  );
}
