import { useEffect, useState } from "react";
const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

export default function useDB<T>(path: string) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchFromServer() {
    try {
      setLoading(true);
      const res = await fetch(`${VITE_SERVER_URL}${path}`, {
        method: "get",
        mode: "cors",
      });
      const result = await res.json();
      console.log("result", result);

      setData(result);
      setLoading(false);
    } catch (e: any) {
      setError(e);
      console.log("e,", e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFromServer();
  }, []);

  return { data, error, loading };
}
