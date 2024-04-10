export default function NoDocLayout({
  sidebarIsOpen,
}: {
  sidebarIsOpen: boolean;
}) {
  return (
    <div
      className={` flex items-center justify-center h-full transition-all right-0 ${
        sidebarIsOpen && "sm:ml-64"
      }`}
    >
      <span className="text-gray-600 font-roboto text-h4 sm:text-h2">
        No Document Selected
      </span>
    </div>
  );
}
