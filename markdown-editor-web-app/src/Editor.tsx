import iconShowPreview from "./assets/icon-show-preview.svg";

interface ActiveDocumentProps {
  showEditor: boolean;
  setShowEditor: React.Dispatch<React.SetStateAction<boolean>>;
  showPreview: boolean;
  setShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
  markdown: string;
}

export default function ActiveDocument({
  showEditor,
  setShowEditor,
  showPreview,
  setShowPreview,
  setMarkdown,
  markdown,
}: ActiveDocumentProps) {
  return (
    <div
      className={`${showEditor && "hidden"} ${
        showEditor && "md:hidden"
      } h-full`}
    >
      <div
        className={`bg-gray-200 h-[2.625rem] flex items-center justify-between px-4 md:border-r-[1px] border-r-gray-300 `}
      >
        <span className="text-gray-500 text-heading-s font-roboto tracking-[2px]">
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
      <div className="h-full">
        <textarea
          style={{ height: "calc(100% - 7rem)" }}
          name="markdown"
          id="markdown"
          className="w-full p-4 font-robotoMono text-p leading-6 text-gray-700 focus:outline-none"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}
