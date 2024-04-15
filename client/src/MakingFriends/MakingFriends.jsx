import React, { useState } from "react";
import useWebsocket from "../hooks/useWebsocket";
import "./MakingFriends.css";

export default function MakingFriends() {
  const { items, sendMessage, count } = useWebsocket();
  const [newItem, setNewItem] = useState("");

  return (
    <div className="primary-content text-content making-friends-container">
      <div>
        {count < 2
          ? `${count} person here! Welcome :)`
          : `${count} people are here! Say hey to eachother :)`}
      </div>

      <div className="chat-box">
        {Object.entries(items).map(([key, value]) => (
          <div key={key}>
            {`> `}
            {value}
          </div>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!newItem.length) return;
          sendMessage({
            type: "item",
            data: {
              id: crypto.randomUUID(),
              value: newItem,
            },
          });
          setNewItem("");
        }}
      >
        <input
          placeholder="What was your rose today?"
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
          onKey
        />

        <button type="submit">Send ➷‿➹⁀➷</button>
      </form>
    </div>
  );
}
