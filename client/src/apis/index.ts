const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

// Simple Post Util
export async function postHelper(path: string, body: any) {
  const res = await fetch(`${VITE_SERVER_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
}
