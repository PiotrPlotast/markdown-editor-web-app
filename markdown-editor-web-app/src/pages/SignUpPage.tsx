import { Link } from "react-router-dom";
import { signInWithGithub, signUpNewUser } from "../supabase/auth";
import { useState } from "react";
export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleEmailRegister(e: React.FormEvent) {
    e.preventDefault();
    signUpNewUser(email, password);
  }
  return (
    <div className="h-dvh flex items-center justify-center bg-gray-900">
      <div className="bg-gray-100 p-8 rounded-lg flex flex-col items-center w-96 sm:w-full sm:max-w-md md:w-7/12 md:max-w-md ">
        <h1>Register</h1>
        <form onSubmit={handleEmailRegister} className="flex flex-col gap-6">
          <label>
            Email:
            <input
              className={`w-full rounded`}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              className={`w-full rounded`}
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
        <h2 className="mt-4 mb-2 text-h4 sm:text-h2">
          Already have an account?
        </h2>
        <Link to="/login" className="underline">
          Login
        </Link>
        <h2 className="text-h4 sm:text-h2">Or</h2>
        <button className="underline" onClick={signInWithGithub}>
          Login with Github
        </button>
      </div>
    </div>
  );
}
