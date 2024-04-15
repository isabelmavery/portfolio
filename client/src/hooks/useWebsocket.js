const WS_ENV = `ws://localhost:${import.meta.env.VITE_WS_PORT}`;
import { useEffect, useState, useRef } from "react";

const SocketType = {
  ITEM: "item",
  COUNT: "count",
};

export default function useWebsocket() {
  const socket = useRef(null);
  const [items, setItems] = useState({});
  const [count, setCount] = useState(0);

  const updateMessageLocally = (update) => {
    const {
      type,
      data: { id, value },
    } = update;

    switch (type) {
      case SocketType.ITEM:
        setItems((prevItems) => ({
          ...prevItems,
          [id]: value,
        }));
        break;
      case SocketType.COUNT:
        setCount(value);
        break;
    }
  };

  useEffect(() => {
    socket.current = new WebSocket(WS_ENV);
    socket.current.onopen = (e) => {
      console.log("connection established", e);
    };
    /** Message event happens usually when the server sends some data. Messages sent by the server to the client can include plain text messages, binary data or images */
    socket.current.onmessage = (e) => {
      console.log("message received", e);
      updateMessageLocally(JSON.parse(e.data));
    };
    socket.current.onerror = (e) => {
      console.log("connection error", e);
    };
    socket.current.onclose = (e) => {
      console.log("connection closed", e);
      if (socket.current.readyState === WebSocket.OPEN) {
        socket.current.close();
      }
      if (e.code != 1000) {
        // Error code 1000 means that the connection was closed normally. Try to reconnect.
        if (!navigator.onLine) {
          alert(
            "You are offline. Please connect to the Internet and try again."
          );
        }
      }
    };
    return () => {
      socket.current.close();
    };
  }, []);

  // used to send a message
  const sendMessage = (update) => {
    if (!socket.current) {
      alert("Error saving - check your internet connection");
      return;
    }
    updateMessageLocally(update);
    socket.current.send(JSON.stringify(update));
  };

  return {
    sendMessage,
    items,
    count,
  };
}
