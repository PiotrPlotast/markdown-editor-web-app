import SidebarToggle from "./SidebarToggle";
import ActiveDocName from "./ActiveDocName";
import DeleteButton from "./DeleteButton";
import SaveButton from "./SaveButton";
import logo from "./assets/logo.svg";
export default function Navbar({
  openedDocumentName,
  setOpenedDocumentName,
  sidebarIsOpen,
  setSidebarIsOpen,
}) {
  return (
    <nav
      className={`${
        sidebarIsOpen ? `translate-x-64` : `translate-x-0`
      } sticky top-0 w-full transition-all duration-200 ease-in-out bg-gray-800 flex h-14 sm:h-[4.5rem]`}
    >
      <SidebarToggle
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      <div className="flex ml-6 py-2 sm:py-4 justify-between flex-grow">
        <div className="flex items-center">
          <img src={logo} alt="" className="hidden lg:block" />
          <div className="hidden lg:block lg:h-full lg:w-[1px] lg:bg-gray-600 mr-6 lg:ml-8"></div>
          <ActiveDocName
            openedDocumentName={openedDocumentName}
            setOpenedDocumentName={setOpenedDocumentName}
          />
        </div>
        <div className="flex space-x-6 mr-2 sm:mr-4">
          <DeleteButton />
          <SaveButton />
        </div>
      </div>
    </nav>
  );
}
