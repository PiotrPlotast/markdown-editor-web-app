import blank from "./assets/icon-document.svg";
import { updateDocumentName } from "./supabase/db";
import { useEffect, useState } from "react";
interface ActiveDocNameProps {
  openedDocumentName: string;
  setOpenedDocumentName: React.Dispatch<React.SetStateAction<string>>;
  openedDocumentId: string;
  setDocumentsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ActiveDocName({
  openedDocumentName,
  setOpenedDocumentName,
  openedDocumentId,
  setDocumentsChanged,
}: ActiveDocNameProps) {
  const [debouncedName, setDebouncedName] = useState(openedDocumentName);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (openedDocumentId && debouncedName) {
        updateDocumentName(openedDocumentId, debouncedName);
        setDocumentsChanged((prev) => !prev);
      }
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedName, openedDocumentId, setDocumentsChanged]);

  useEffect(() => {
    setDebouncedName(openedDocumentName);
  }, [openedDocumentName]);
  return (
    <div className="flex items-center space-x-4 sm:space-x-2">
      <div>
        <img src={blank} alt="" />
      </div>
      <div>
        {openedDocumentId === "" ? (
          <span className="text-white text-heading-m font-roboto">
            No Document Selected
          </span>
        ) : (
          <>
            <p className="hidden sm:block text-gray-500 text-body-s font-light font-roboto">
              Document Name
            </p>
            <input
              type="text"
              className="text-white placeholder:text-white text-heading-m font-roboto bg-gray-700"
              value={openedDocumentName}
              onChange={(e) => {
                setOpenedDocumentName(e.target.value);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
