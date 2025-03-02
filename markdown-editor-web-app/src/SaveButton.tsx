import iconSave from "./assets/icon-save.svg";
import { saveDocument } from "./supabase/db";
export default function SaveButton({
  openedDocumentId,
  openedDocumentContent,
}: {
  openedDocumentId: string;
  openedDocumentContent: string;
}) {
  const handleSaveDocument = async () => {
    console.log("Saving document...");
    console.log("Document ID:", openedDocumentId);
    console.log("Document Content:", openedDocumentContent);
    await saveDocument(openedDocumentId, openedDocumentContent);
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
