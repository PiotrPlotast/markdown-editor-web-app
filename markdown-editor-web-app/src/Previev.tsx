import iconHidePreview from "./assets/icon-hide-preview.svg";
import iconShowPreview from "./assets/icon-show-preview.svg";
export default function Previev({
  showPreview,
  setShowPreview,
  showEditor,
  setShowEditor,
}) {
  return (
    <div className={`${!showPreview && "hidden"} sm:block`}>
      <div
        className={` bg-gray-200 h-[2.625rem] flex items-center justify-between px-4`}
      >
        <span className="text-gray-500 text-heading-s font-roboto tracking-[2px] font-medium">
          PREVIEV
        </span>
        <button
          onClick={() => {
            setShowPreview((showPreview = !showPreview));
            setShowEditor((showEditor = !showEditor));
          }}
        >
          <img src={showEditor ? iconHidePreview : iconShowPreview} alt="" />
        </button>
      </div>
      <div>
        <input type="text" name="" id="" />
      </div>
    </div>
  );
}
