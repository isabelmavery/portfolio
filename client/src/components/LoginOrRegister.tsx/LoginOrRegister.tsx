import { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import useToken from "../../hooks/useToken";
import "./LoginOrRegister.css";

export default function LoginOrRegister() {
  const { token, saveToken, deleteToken } = useToken();
  const [showLogin, setShowLogin] = useState(false);

  function handleToggleLogin() {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  }

  if (token) {
    return (
      <div className="primary-content text-content login-register-content">
        <h3>Welcome :)</h3> <p> You are logged in!</p>
        <span>
          <button className="toggle-login" onClick={deleteToken}>
            Sign Out
          </button>
        </span>
      </div>
    );
  }

  return (
    <div className="primary-content text-content login-register-content">
      {showLogin ? (
        <Login saveToken={saveToken} />
      ) : (
        <Register saveToken={saveToken} />
      )}

      <div className="toggle-login-wrapper">
        {showLogin ? (
          <span>
            No Account?{" "}
            <button className="toggle-login" onClick={handleToggleLogin}>
              Sign up
            </button>
          </span>
        ) : (
          <span>
            Have an account?{" "}
            <button className="toggle-login" onClick={handleToggleLogin}>
              Login
            </button>
          </span>
        )}
      </div>
    </div>
  );
}
