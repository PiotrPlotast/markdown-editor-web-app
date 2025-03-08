import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { useAuth } from "./context/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <LoginPage />}
        />
        <Route
          path="/"
          element={user ? <Home /> : <Navigate replace to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
