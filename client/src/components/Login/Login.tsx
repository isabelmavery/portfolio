import { useState } from "react";
import { postHelper } from "../../apis";
import useToken from "../../hooks/useToken";
import LoadingGrid from "../../base-components/LoadingGrid/LoadingGrid";
import "./Login.css";

export default function Login() {
  console.log("rendering login component!!!!");

  const { token, saveToken } = useToken();
  const [user, setUser] = useState<any>(null); // todo pull user by default via token and set in context or s.t.

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);

      const user = await postHelper("users/login", { email, password });
      if (!user || !user?.id) {
        throw new Error("No account was found with these credentials");
      }

      setUser(user);
      saveToken(user.id);
      setLoading(false);
    } catch (err: any) {
      console.log("error", err);
      setError(err.message ? err.message : "Failed to login");
      setLoading(false);
    }
  };

  if (token) {
    return (
      <div className="primary-content text-content">
        <h3>Welcome {user?.name} :)</h3> <p> You are logged in!</p>
      </div>
    );
  }

  return (
    <div className="primary-content text-content login-content">
      {loading ? (
        <LoadingGrid />
      ) : error ? (
        <>
          <h4>There was an issue loading your account</h4>
          <p>{error}</p>
        </>
      ) : (
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}
