import iconShowPreview from "./assets/icon-show-preview.svg";

interface ActiveDocumentProps {
  showEditor: boolean;
  setShowEditor: React.Dispatch<React.SetStateAction<boolean>>;
  showPreview: boolean;
  setShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenedDocumentContent: React.Dispatch<React.SetStateAction<string>>;
  openedDocumentContent: string;
}

export default function ActiveDocument({
  showEditor,
  setShowEditor,
  showPreview,
  setShowPreview,
  openedDocumentContent,
  setOpenedDocumentContent,
}: ActiveDocumentProps) {
  return (
    <div
      className={`${showEditor && "hidden"} ${
        showEditor && "md:hidden"
      } h-full md:border-r md:border-r-gray-200 dark:border-r-gray-500`}
    >
      <div
        className={`bg-gray-100 dark:bg-gray-800 h-[2.625rem] flex items-center justify-between px-4`}
      >
        <span className="text-gray-500 dark:text-gray-300 text-heading-s font-roboto tracking-[2px]">
          MARKDOWN
        </span>
        <button
          className="md:hidden"
          onClick={() => {
            setShowEditor((showEditor = !showEditor));
            setShowPreview((showPreview = !showPreview));
          }}
        >
          <img src={iconShowPreview} alt="" />
        </button>
      </div>
      <div className="dark:bg-gray-900 h-full flex">
        <textarea
          name="markdown"
          id="markdown"
          className="dark:bg-gray-900 dark:text-gray-300 w-full p-4 font-robotoMono text-p leading-6 text-gray-700 focus:outline-none"
          value={openedDocumentContent}
          onChange={(e) => setOpenedDocumentContent(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}
