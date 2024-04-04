import iconDelete from "./assets/icon-delete.svg";

export default function DeleteButton() {
  return (
    <button>
      <img src={iconDelete} alt="delete opened document" />
    </button>
  );
}
