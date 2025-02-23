import { signInWithEmail, signInWithGithub } from "./supabase/auth";
import { useState } from "react";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-dvh flex items-center justify-center bg-gray-900">
      <div className="bg-gray-100 p-8 rounded-lg">
        <h1>Login</h1>
        <form onSubmit={() => signInWithEmail(email, password)}>
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
        <h2>Or</h2>
        <button onClick={signInWithGithub}>Login with Github</button>
      </div>
    </div>
  );
}
