import { signInWithEmail, signInWithGithub } from "../supabase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const result = await signInWithEmail(email, password);
      if (result.error) {
        setError(true);
      } else {
        setError(false);
        navigate("/");
      }
    } catch (error) {
      setError(true);
    }
  }

  async function handleGithubLogin() {
    const { error } = await signInWithGithub();
    if (error) {
      setError(true);
    } else {
      setError(false);
      navigate("/");
    }
  }

  if (user) {
    navigate("/");
  }

  return (
    <div className="h-dvh flex items-center justify-center bg-gray-900">
      <div className="bg-gray-100 p-8 rounded-lg flex flex-col items-center w-96 sm:w-full sm:max-w-md md:w-7/12 md:max-w-md ">
        <h1 className="dark:text-gray-700">Login</h1>

        <form
          onSubmit={handleEmailLogin}
          className="flex flex-col gap-6 w-full"
        >
          <label className="flex flex-col w-full">
            Email:
            <input
              id="email"
              autoComplete="email"
              className={`w-full rounded ${
                error ? "border border-orange-100" : ""
              }`}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className={`text-orange-100 ${error ? "visible" : "hidden"}`}>
              Must be valid email
            </span>
          </label>
          <label>
            Password:
            <input
              id="password"
              className={`w-full rounded ${
                error ? "border border-orange-100" : ""
              }`}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className={`text-orange-100 ${error ? "visible" : "hidden"}`}>
              Must be valid password
            </span>
          </label>
          <button
            type="submit"
            className="text-gray-100 bg-orange-200 w-full p-2 rounded-lg hover:bg-orange-100 transition-all"
          >
            Login
          </button>
        </form>
        <h2 className="mt-4 mb-2 text-h4 sm:text-h2 dark:text-gray-700">
          Do not have an account yet?
        </h2>
        <Link to="/signup" className="underline">
          Sign Up
        </Link>
        <h2 className="text-h4 sm:text-h2 dark:text-gray-700">Or</h2>
        <button className="underline" onClick={handleGithubLogin}>
          Login with Github
        </button>
      </div>
    </div>
  );
}
