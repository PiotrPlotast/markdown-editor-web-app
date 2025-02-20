export default function LoginPage() {
  return (
    <div className="bg-gray-700 text-gray-100 p-4 max-w-lg">
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
      <button>Login with Github</button>
    </div>
  );
}
