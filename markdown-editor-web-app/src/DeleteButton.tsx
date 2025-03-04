import iconDelete from "./assets/icon-delete.svg";
import { deleteDocument } from "./supabase/db";
export default function DeleteButton({
  openedDocumentId,
  documentsChanged,
  setDocumentsChanged,
  setOpenedDocumentId,
}: {
  openedDocumentId: string;
  documentsChanged: boolean;
  setDocumentsChanged: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenedDocumentId: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleDeleteDocument = async (documentId: string) => {
    await deleteDocument(documentId);
    setOpenedDocumentId("");
    setDocumentsChanged(!documentsChanged);
  };
  return (
    <button
      onClick={() => handleDeleteDocument(openedDocumentId)}
      aria-label="Delete opened document"
      className="hover:invert-[73%] hover:sepia-[69%] hover:saturate-[6826%] hover:hue-rotate-[341deg] hover:brightness-[105%] hover:contrast-[79%]"
    >
      <img src={iconDelete} alt="delete opened document" />
    </button>
  );
}
