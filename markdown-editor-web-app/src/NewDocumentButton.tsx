import { createNewDocument } from "./supabase/db";

interface NewDocumentButtonProps {
  documentsChanged: boolean;
  setDocumentsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function NewDocumentButton({
  documentsChanged,
  setDocumentsChanged,
}: NewDocumentButtonProps) {
  async function addNewDocument() {
    await createNewDocument();
    setDocumentsChanged(!documentsChanged);
  }
  return (
    <button
      onClick={() => {
        addNewDocument();
      }}
      className="transition-all bg-orange-200 hover:bg-orange-100 text-heading-m text-white px-11 py-3 rounded"
    >
      + New Document
    </button>
  );
}
