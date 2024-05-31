import { useState } from "react";
import { postHelper } from "../../apis";
import LoadingGrid from "../../base-components/LoadingGrid/LoadingGrid";
import "./Register.css";

export default function Register(props: { saveToken: (id: string) => void }) {
  const { saveToken } = props;
  const [user, setUser] = useState<any>(null); // todo pull user by default via token and set in context or s.t.

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);

      const newUser = await postHelper("users/register", {
        name,
        email,
        password,
      });

      if (!newUser || !newUser?.id) {
        throw new Error("Failed to create account");
      }

      setUser(newUser);
      saveToken(newUser.id);
      setLoading(false);
    } catch (err: any) {
      console.log("error", err);
      setError(err.message ? err.message : "Failed to login");
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Create an account!</h3>
      {loading ? (
        <LoadingGrid />
      ) : error ? (
        <>
          <h4>There was an issue loading your account</h4>
          <p>{error}</p>
        </>
      ) : (
        <form onSubmit={handleRegister} id="registerForm">
          <label htmlFor="name">Your Name:</label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Password:</label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button form="registerForm" type="submit" value="Submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
