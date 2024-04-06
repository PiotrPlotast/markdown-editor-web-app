import SidebarToggle from "./SidebarToggle";
import ActiveDocName from "./ActiveDocName";
import DeleteButton from "./DeleteButton";
import SaveButton from "./SaveButton";
import logo from "./assets/logo.svg";
export default function Navbar() {
  return (
    <nav className="bg-gray-800 flex">
      <SidebarToggle />
      <div className="flex ml-6 py-2 sm:py-4 justify-between flex-grow">
        <div className="flex items-center">
          <img src={logo} alt="" className="hidden lg:block" />
          <div className="hidden lg:block lg:h-full lg:w-[1px] lg:bg-gray-600 mr-6 lg:ml-8"></div>
          <ActiveDocName />
        </div>
        <div className="flex space-x-6 mr-2 sm:mr-4">
          <DeleteButton />
          <SaveButton />
        </div>
      </div>
    </nav>
  );
}
