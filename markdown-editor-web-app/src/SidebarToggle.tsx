import iconMenu from "./assets/icon-menu.svg";
import iconClose from "./assets/icon-close.svg";
export default function SidebarToggle({ sidebarIsOpen, setSidebarIsOpen }) {
  return (
    <button
      onClick={() => {
        setSidebarIsOpen(!sidebarIsOpen);
      }}
      className="transition-all bg-gray-700 hover:bg-orange-200 w-14 h-14 flex items-center justify-center sm:h-[4.5rem] sm:w-[4.5rem]"
    >
      <img src={sidebarIsOpen ? iconClose : iconMenu} alt="" />
    </button>
  );
}
