import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "./Firebase";
import { useEffect, useState } from "react";
export default function SignOutButton() {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(app), (user) => {
      if (!user) {
        navigate("/login");
      }
      setUser(!!user);
    });

    return () => {
      unsubscribe();
    };
  }, [user, setUser, navigate]);

  function handleClick() {
    const auth = getAuth(app);
    auth.signOut();
  }
  return (
    <button
      onClick={handleClick}
      className="transition-all bg-orange-200 hover:bg-orange-100  text-white rounded p-2"
    >
      Sign out
    </button>
  );
}
