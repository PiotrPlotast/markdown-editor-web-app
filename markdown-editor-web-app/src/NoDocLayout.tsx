import NewDocumentButton from "./NewDocumentButton";

interface NoDocLayoutProps {
  sidebarIsOpen: boolean;
  documentsChanged: boolean;
  setDocumentsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NoDocLayout({
  sidebarIsOpen,
  documentsChanged,
  setDocumentsChanged,
}: NoDocLayoutProps) {
  return (
    <div
      className={`dark:bg-gray-900 flex flex-col gap-4 items-center justify-center h-full transition-all right-0 ${
        sidebarIsOpen && "sm:ml-64"
      }`}
    >
      <span className="text-gray-600 dark:text-gray-200 font-roboto text-h4 sm:text-h2">
        No Document Selected
      </span>
      <NewDocumentButton
        documentsChanged={documentsChanged}
        setDocumentsChanged={setDocumentsChanged}
      />
    </div>
  );
}
