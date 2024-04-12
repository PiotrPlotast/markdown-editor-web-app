import iconShowPreview from "./assets/icon-show-preview.svg";

export default function ActiveDocument({
  showEditor,
  setShowEditor,
  showPreview,
  setShowPreview,
}) {
  return (
    <div className={`${showEditor && "hidden"} ${showEditor && "sm:hidden"}`}>
      <div
        className={`bg-gray-200 h-[2.625rem] flex items-center justify-between px-4 sm:border-r-[1px] border-r-gray-300`}
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
      <div></div>
    </div>
  );
}
