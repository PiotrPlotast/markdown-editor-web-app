import blank from "./assets/icon-document.svg";

export default function ActiveDocName({
  openedDocumentName,
  setOpenedDocumentName,
}) {
  return (
    <div className="flex items-center space-x-4 sm:space-x-2">
      <div>
        <img src={blank} alt="" />
      </div>
      <div>
        {openedDocumentName === "" ? (
          <span className="text-white text-heading-m font-roboto">
            No Document Selected
          </span>
        ) : (
          <>
            {" "}
            <p className="hidden sm:block text-gray-500 text-body-s font-light font-roboto">
              Document Name
            </p>
            <input
              type="text"
              className="text-white placeholder:text-white text-heading-m font-roboto bg-gray-800"
              value={openedDocumentName}
              onChange={(e) => {
                console.log(e.target.value);
                setOpenedDocumentName(e.target.value);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
