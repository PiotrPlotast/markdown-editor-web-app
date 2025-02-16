export default function NewDocumentButton() {
  async function addNewDocument() {}
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
