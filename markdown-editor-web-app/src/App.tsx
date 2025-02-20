import Home from "./Home";
import LoginPage from "./LoginPage";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();
  return user ? <Home /> : <LoginPage />;
}

export default App;
