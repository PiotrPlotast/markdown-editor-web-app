import iconShowPreview from "./assets/icon-show-preview.svg";

export default function ActiveDocument({
  showEditor,
  setShowEditor,
  showPreview,
  setShowPreview,
  setMarkdown,
  markdown,
}) {
  return (
    <div
      className={`${showEditor && "hidden"} ${
        showEditor && "sm:hidden"
      } h-full`}
    >
      <div
        className={`bg-gray-200 h-[2.625rem] flex items-center justify-between px-4 sm:border-r-[1px] border-r-gray-300 `}
      >
        <span className="text-gray-500 text-heading-s font-roboto tracking-[2px]">
          MARKDOWN
        </span>
        <button
          className="sm:hidden"
          onClick={() => {
            setShowEditor((showEditor = !showEditor));
            setShowPreview((showPreview = !showPreview));
          }}
        >
          <img src={iconShowPreview} alt="" />
        </button>
      </div>
      <div className="" style={{ height: "inherit" }}>
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
