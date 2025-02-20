import { signInWithGithub } from "./supabase/auth";

export default function LoginPage() {
  return (
    <div className="h-dvh flex items-center justify-center bg-gray-900">
      <div className="bg-gray-100 p-8 rounded-lg">
        <h1>Login</h1>
        <form>
          <label>
            Email:
            <input type="email" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
          <button type="submit">Login</button>
        </form>
        <h2>Or</h2>
        <button onClick={signInWithGithub}>Login with Github</button>
      </div>
    </div>
  );
}
