import logo from "./assets/logo.svg";
import ThemeSwitcher from "./ThemeSwitcher";
import NewDocumentButton from "./NewDocumentButton";
import IconDocument from "./assets/icon-document.svg";
import LogoutBtn from "./LogoutBtn";
interface SidebarProps {
  sidebarIsOpen: boolean;
  setOpenedDocumentName: (name: string) => void;
  openedDocumentId: string;
  setOpenedDocumentId: (id: string) => void;
  setOpenedDocumentContent: (content: string) => void;
  documentsList: {
    created_at: string;
    name: string;
    content: string;
    id: string;
  }[];
}

export default function Sidebar({
  sidebarIsOpen,
  setOpenedDocumentName,
  openedDocumentId,
  setOpenedDocumentId,
  setOpenedDocumentContent,
  documentsList,
}: SidebarProps) {
  interface Document {
    name: string;
    content: string;
    createdAt: string;
    id: string;
  }

  function handleClick(document: Document) {
    if (document.id === openedDocumentId) {
      setOpenedDocumentName("");
      setOpenedDocumentId("");
      setOpenedDocumentContent("");
    } else {
      setOpenedDocumentName(document.name);
      setOpenedDocumentId(document.id);
      setOpenedDocumentContent(document.content);
    }
  }
  return (
    <div
      className={`${
        sidebarIsOpen ? `translate-x-0` : `-translate-x-full`
      }  top-0 flex flex-col justify-between w-64 transition-transform duration-200 ease-in-out bg-gray-900 fixed h-full pl-6 pt-7 pb-6`}
    >
      <div>
        <h1>
          <img src={logo} alt="markdown editor logo" />
        </h1>
        <h2 className="text-gray-500 text-heading-s uppercase font-roboto my-7 tracking-[2px]">
          My Documents
        </h2>
        <NewDocumentButton />
        <ul className="flex flex-col space-y-4 mt-4">
          {documentsList.map((document) => (
            <button
              onClick={() => {
                handleClick(document);
              }}
              key={document.id}
              className="text-gray-500 text-heading-s"
            >
              <div className="flex items-center space-x-2">
                <img src={IconDocument} alt="" />
                <div className="flex flex-col items-start">
                  <span className="text-gray-500 text-body">
                    {document.created_at}
                  </span>
                  <span className="text-white text-heading-m">
                    {document.name}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between pr-8">
        <ThemeSwitcher />
        <LogoutBtn />
      </div>
    </div>
  );
}
