import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: string) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return {
    saveToken,
    deleteToken,
    token,
  };
}
