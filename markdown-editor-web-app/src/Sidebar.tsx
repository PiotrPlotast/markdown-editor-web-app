import logo from "./assets/logo.svg";
import ThemeSwitcher from "./ThemeSwitcher";
import NewDocumentButton from "./NewDocumentButton";
export default function Sidebar({ sidebarIsOpen }) {
  return (
    <div
      className={`${
        sidebarIsOpen ? `translate-x-0` : `-translate-x-full`
      } w-64 transition-transform duration-200 ease-in-out bg-gray-900 fixed h-full z-50 `}
    >
      <h1>
        <img src={logo} alt="" />
      </h1>
      <h2 className="text-gray-500 text-heading-s uppercase font-roboto">
        My Documents
      </h2>
      <NewDocumentButton />
      <ul></ul>
      <ThemeSwitcher />
    </div>
  );
}
