import iconHidePreview from "./assets/icon-hide-preview.svg";
import iconShowPreview from "./assets/icon-show-preview.svg";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

interface PreviewProps {
  showPreview: boolean;
  setShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
  showEditor: boolean;
  setShowEditor: React.Dispatch<React.SetStateAction<boolean>>;
  markdown: string;
}

export default function Preview({
  showPreview,
  setShowPreview,
  showEditor,
  setShowEditor,
  markdown,
}: PreviewProps) {
  const previewMarkdown = markdown;
  return (
    <div
      className={`${!showPreview && "hidden"} sm:block flex flex-col h-full`}
    >
      <div
        className={`bg-gray-200 h-[2.625rem] flex items-center justify-between px-4`}
      >
        <span className="text-gray-500 text-heading-s font-roboto tracking-[2px] font-medium">
          PREVIEW
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
      <div className="flex items-center justify-center">
        <div className="px-5 pt-4 font-robotoSlab max-w-2xl">
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeSanitize]}
          >
            {previewMarkdown}
          </Markdown>
        </div>
      </div>
    </div>
  );
}
