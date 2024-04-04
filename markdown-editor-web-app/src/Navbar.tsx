import SidebarToggle from "./SidebarToggle";
import ActiveDocName from "./ActiveDocName";
import DeleteButton from "./DeleteButton";
import SaveButton from "./SaveButton";
export default function Navbar() {
  return (
    <nav className="bg-gray-800 flex">
      <SidebarToggle />
      <div className="flex ml-6 py-2 sm:py-4 justify-between flex-grow">
        <ActiveDocName />
        <div className="flex space-x-6 mr-2 sm:mr-4">
          <DeleteButton />
          <SaveButton />
        </div>
      </div>
    </nav>
  );
}
