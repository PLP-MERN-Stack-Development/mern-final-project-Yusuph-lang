import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // connects to your server

function Community() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // listen for posts broadcasted from server
    socket.on("receive_post", (post) => {
      setPosts((prev) => [...prev, post]);
    });

    return () => socket.off("receive_post");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newPost = { text: message, time: new Date().toLocaleTimeString() };

    // send post to server
    socket.emit("new_post", newPost);

    setMessage("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🌍 HelpHub Community</h1>

      <div style={{ margin: "1rem 0" }}>
        {posts.map((p, i) => (
          <div
            key={i}
            style={{
              background: "#f4f4f4",
              marginBottom: "0.5rem",
              padding: "0.8rem",
              borderRadius: "8px",
            }}
          >
            <p>{p.text}</p>
            <small style={{ color: "gray" }}>{p.time}</small>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          placeholder="Write your message..."
          onChange={(e) => setMessage(e.target.value)}
          style={{
            padding: "0.8rem",
            width: "70%",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginRight: "0.5rem",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.8rem 1.2rem",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Community;
