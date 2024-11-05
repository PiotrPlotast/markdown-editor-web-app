import { useState } from "react";
export default function SignOutButton() {
  const [user, setUser] = useState(false);

  function handleClick() {}
  return (
    <button
      onClick={handleClick}
      className="transition-all bg-orange-200 hover:bg-orange-100  text-white rounded p-2"
    >
      Sign out
    </button>
  );
}
