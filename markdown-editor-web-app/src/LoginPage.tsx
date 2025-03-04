import {
  signInWithEmail,
  signInWithGithub,
  signUpNewUser,
} from "./supabase/auth";
import { useState } from "react";
export default function LoginPage() {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault();
    signInWithEmail(email, password);
  }
  function handleEmailRegister(e: React.FormEvent) {
    e.preventDefault();
    signUpNewUser(email, password);
  }
  return (
    <div className="h-dvh flex items-center justify-center bg-gray-900">
      <div className="bg-gray-100 p-8 rounded-lg flex flex-col items-center">
        <h1>{login ? "Login" : "Register"}</h1>
        {login ? (
          <form onSubmit={handleEmailLogin} className="flex flex-col gap-6">
            <label>
              Email:
              <input
                className="w-full"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                className="w-full"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="text-gray-100 bg-orange-200 w-full p-2 rounded-lg hover:bg-orange-100 transition-all"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleEmailRegister} className="flex flex-col gap-6">
            <label>
              Email:
              <input
                className="w-full"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                className="w-full"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button
              className="text-gray-100 bg-orange-200 w-full p-2 rounded-lg hover:bg-orange-100 transition-all"
              type="submit"
            >
              Register
            </button>
          </form>
        )}
        <h2 className="mt-4">
          {login ? "Do not have an account yet?" : "Already have an account?"}
        </h2>
        <button className="underline" onClick={() => setLogin(!login)}>
          {login ? "Register" : "Login"}
        </button>
        <h2>Or</h2>
        <button className="underline" onClick={signInWithGithub}>
          Login with Github
        </button>
      </div>
    </div>
  );
}
