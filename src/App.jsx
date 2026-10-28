
import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function sendMessage() {
    if (message.trim() === "") return;

    setMessages([...messages, message]);
    setMessage("");
  }

  return (
    <div className="chat-container">
      <h1>Mini Chat Application</h1>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />

        <button onClick={sendMessage}>Send Message</button>
      </div>

      <div className="messages">
        <h2>Messages</h2>

        {messages.length === 0 ? (
          <p>No messages yet. Start chatting!</p>
        ) : (
          messages.map((msg, index) => (
            <div className="message" key={index}>
              {msg}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
