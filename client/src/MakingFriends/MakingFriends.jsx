import React, { useState } from "react";
import useWebsocket from "../hooks/useWebsocket";
import "./MakingFriends.css";

const getRandomColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
};

export default function MakingFriends() {
  const { chatMessages, sendMessage, clients, uid, socket } = useWebsocket();
  const [newChatMessage, setNewChatMessage] = useState("");
  const [uidToColors, setUidToColors] = useState({});

  function getUserColor(chatMsg) {
    // Note, think more about this. I'm not sure if it is necessary to use state here? is there a better way..
    if (uidToColors[chatMsg.uid]) {
      return uidToColors[chatMsg.uid];
    }
    const newColor = getRandomColor();
    setUidToColors((prev) => ({ ...prev, [chatMsg.uid]: newColor }));
    return newColor;
  }

  if (!socket?.current)
    return (
      <div className="primary-content text-content making-friends-container">
        Looks like you don't have a connection right now, try to chat again
        later.
      </div>
    );

  return (
    <div className="primary-content text-content making-friends-container">
      <div>
        {clients.length === 1
          ? `${clients.length} person here! Welcome :)`
          : `${clients.length} people are here! Say hey to eachother`}
      </div>

      <div className="chat-box-container">
        <div className="chat-box">
          {chatMessages.map((chatMsg) => (
            <div key={chatMsg.key} className="chat-msg">
              <span className="user" style={{ color: getUserColor(chatMsg) }}>
                {chatMsg.uid.slice(0, 3)}
              </span>
              {` > `}
              {chatMsg.value}
            </div>
          ))}
          <div id="anchor" />
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!newChatMessage.length) return;
          sendMessage({
            uid,
            type: "item",
            data: {
              id: crypto.randomUUID(),
              value: newChatMessage,
            },
          });
          setNewChatMessage("");
        }}
      >
        <input
          placeholder="What was your rose today?"
          value={newChatMessage}
          onChange={(e) => {
            setNewChatMessage(e.target.value);
          }}
        />

        <button type="submit">Send ➷‿➹⁀➷</button>
      </form>
    </div>
  );
}
