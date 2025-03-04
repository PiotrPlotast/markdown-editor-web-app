import iconSave from "./assets/icon-save.svg";
import { saveDocument } from "./supabase/db";
export default function SaveButton({
  openedDocumentId,
  openedDocumentContent,
  documentsChanged,
  setDocumentsChanged,
}: {
  openedDocumentId: string;
  openedDocumentContent: string;
  documentsChanged: boolean;
  setDocumentsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleSaveDocument = async () => {
    await saveDocument(openedDocumentId, openedDocumentContent);
    setDocumentsChanged(!documentsChanged);
  };
  return (
    <button
      onClick={() => handleSaveDocument()}
      className="bg-orange-200 hover:bg-orange-100 transition-all flex items-center justify-center p-3 rounded space-x-2 sm:py-[0.547rem]"
    >
      <img src={iconSave} alt="save the file" className="w-4 h-4" />
      <span className="hidden sm:inline sm:text-heading-m font-roboto text-white">
        Save Changes
      </span>
    </button>
  );
}
