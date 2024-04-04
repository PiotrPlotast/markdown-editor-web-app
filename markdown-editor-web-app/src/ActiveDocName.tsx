import blank from "./assets/icon-document.svg";

export default function ActiveDocName() {
  return (
    <div className="flex items-center space-x-2">
      <div>
        <img src={blank} alt="" />
      </div>
      <div>
        <p className="text-gray-500 text-body-s font-light font-roboto">
          Document Name
        </p>
        <p className="text-white text-heading-m font-roboto">welcome.md</p>
      </div>
    </div>
  );
}
