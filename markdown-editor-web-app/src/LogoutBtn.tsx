import { useAuth } from "./context/AuthContext";
import { signOut } from "./supabase/auth";
export default function LogoutBtn() {
  const user = useAuth();
  const handleLogout = async () => {
    try {
      await signOut(user);
    } catch (error) {
      console.error("Error logging out", error);
    }
  };
  return (
    <button
      className="font-roboto bg-orange-200 border-none text-gray-200 p-2 rounded"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
