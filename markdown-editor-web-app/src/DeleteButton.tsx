import iconDelete from "./assets/icon-delete.svg";
export default function DeleteButton({ openedDocumentID }) {
  return (
    <button
      onClick={() => console.log("delete document with ID: ", openedDocumentID)}
      className=" hover:invert-[73%] hover:sepia-[69%] hover:saturate-[6826%] hover:hue-rotate-[341deg] hover:brightness-[105%] hover:contrast-[79%]"
    >
      <img src={iconDelete} alt="delete opened document" />
    </button>
  );
}
