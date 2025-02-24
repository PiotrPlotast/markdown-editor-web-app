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
      <div className="bg-gray-100 p-8 rounded-lg">
        <h1>{login ? "Login" : "Register"}</h1>
        {login ? (
          <form onSubmit={handleEmailLogin}>
            <label>
              Email:
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              Password:
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">Login</button>
          </form>
        ) : (
          <form onSubmit={handleEmailRegister}>
            <label>
              Email:
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              Password:
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">Register</button>
          </form>
        )}
        <h2>
          {login ? "Do not have an account yet?" : "Already have an account?"}
        </h2>
        <button onClick={() => setLogin(!login)}>
          {login ? "Register" : "Login"}
        </button>
        <h2>Or</h2>
        <button onClick={signInWithGithub}>Login with Github</button>
      </div>
    </div>
  );
}
