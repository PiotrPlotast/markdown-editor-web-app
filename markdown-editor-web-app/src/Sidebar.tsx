import { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import ThemeSwitcher from "./ThemeSwitcher";
import NewDocumentButton from "./NewDocumentButton";
import SignOutButton from "./SignOutButton";
import { queryForDocuments } from "./FireStore";
export default function Sidebar({
  sidebarIsOpen,
  openedDocumentID,
  setOpenedDocumentID,
  setOpenedDocumentName,
  setOpenedDocumentContent,
}) {
  const [documentsList, setDocumentsList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await queryForDocuments();
      setDocumentsList(result);
    }

    fetchData();
  }, []);
  return (
    <div
      className={`${
        sidebarIsOpen ? `translate-x-0` : `-translate-x-full`
      }  top-0 flex flex-col justify-between  w-64 transition-transform duration-200 ease-in-out bg-gray-900 fixed h-full pl-6 pt-7 pb-6`}
    >
      <div>
        <h1>
          <img src={logo} alt="markdown editor logo" />
        </h1>
        <h2 className="text-gray-500 text-heading-s uppercase font-roboto my-7 tracking-[2px]">
          My Documents
        </h2>
        <NewDocumentButton />
        <ul>
          {documentsList.map((document) => (
            <button
              onClick={() => {
                if (document.id === openedDocumentID) {
                  setOpenedDocumentID("");
                  setOpenedDocumentName("");
                  setOpenedDocumentContent("");
                } else {
                  setOpenedDocumentID(document.id);
                  setOpenedDocumentName(document.name);
                  setOpenedDocumentContent(document.contents);
                }
              }}
              key={document.id}
              className="text-gray-500 text-heading-s"
            >
              {document.date}
              {document.name}
            </button>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between pr-8">
        <ThemeSwitcher />
        <SignOutButton />
      </div>
    </div>
  );
}
