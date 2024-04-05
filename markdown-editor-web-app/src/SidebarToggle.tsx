import iconMenu from "./assets/icon-menu.svg";

export default function SidebarToggle() {
  return (
    <button className="transition-all bg-gray-700 hover:bg-orange-200 px-[0.813rem] sm:px-[1.375rem]">
      <img src={iconMenu} alt="" />
    </button>
  );
}
