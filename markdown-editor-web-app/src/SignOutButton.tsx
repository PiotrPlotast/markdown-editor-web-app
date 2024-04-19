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
  return <button onClick={handleClick}>Sign out</button>;
}
