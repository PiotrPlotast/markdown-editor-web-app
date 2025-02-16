interface NewDocumentButtonProps {
  setDocumentCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function NewDocumentButton({
  setDocumentCount,
}: NewDocumentButtonProps) {
  async function addNewDocument() {
    setDocumentCount((prevCount: number) => prevCount + 1);
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
