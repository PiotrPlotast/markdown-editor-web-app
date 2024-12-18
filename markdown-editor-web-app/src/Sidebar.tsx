import logo from "./assets/logo.svg";
import ThemeSwitcher from "./ThemeSwitcher";
import NewDocumentButton from "./NewDocumentButton";
import SignOutButton from "./SignOutButton";
import IconDocument from "./assets/icon-document.svg";
export default function Sidebar({
  sidebarIsOpen,
  openedDocumentID,
  setOpenedDocumentID,
  setOpenedDocumentName,
  setOpenedDocumentContent,
  documentsList,
  setDocumentCount,
}) {
  function handleClick(document) {
    const id = getDocumentID(document);
    if (document.id === openedDocumentID) {
      setOpenedDocumentID("");
      setOpenedDocumentName("");
      setOpenedDocumentContent("");
    } else {
      setOpenedDocumentID(id);
      setOpenedDocumentName(document.name);
      setOpenedDocumentContent(document.contents);
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
        <NewDocumentButton setDocumentCount={setDocumentCount} />
        <ul>
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
                    {document.date}
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
        <SignOutButton />
      </div>
    </div>
  );
}
