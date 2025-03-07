import iconMenu from "./assets/icon-menu.svg";
import iconClose from "./assets/icon-close.svg";

interface SidebarToggleProps {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SidebarToggle({
  sidebarIsOpen,
  setSidebarIsOpen,
}: SidebarToggleProps) {
  return (
    <button
      onClick={() => {
        setSidebarIsOpen(!sidebarIsOpen);
      }}
      className="transition-all bg-gray-600 hover:bg-orange-200 w-14 h-14 flex items-center justify-center sm:h-[4.5rem] sm:w-[4.5rem]"
    >
      <img src={sidebarIsOpen ? iconClose : iconMenu} alt="" />
    </button>
  );
}
