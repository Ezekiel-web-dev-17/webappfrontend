import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiContext } from "../../context/ApiContext.jsx";
import "./ChatDetails.css";
import { BsArrowLeftShort, BsPerson, BsSend } from "react-icons/bs";
import { demoMessages } from "../../demo/demoMsgs.js";

const ChatDetails = ({ user }) => {
  user.id = 2007;
  const { chatId } = useParams();
  const api = useContext(ApiContext);
  const [messages, setMessages] = useState(demoMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Fetch messages for this chatId
  useEffect(() => {
    if (!user) return;

    const getMsgs = new Promise((resolve, reject) => {
      const getMsg = async () => {
        try {
          const res = await api.get("/messages/");
          // Assume res.data is an array of { _id, text, senderId, timestamp }
          setMessages(res.data);
          resolve("Gotten messages");
        } catch (error) {
          reject(error);
        }
      };

      getMsg();
    });

    getMsgs
      .then((res) => {
        console.log(res);
      })
      .catch((reject) => {
        console.error("Could not fetch Messages:", reject.message);
      });
  }, [chatId, user]);

  // Autoscroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const messageData = {
      text: newMessage,
      participants: [Number(chatId.slice(1)), user.id],
      createdAt: Date(),
    };

    // Post request to Create messages
    try {
      setMessages((prev) => [...prev, messageData]);
      setNewMessage("");
      const res = await api.post("/messages/create", messageData);
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };

  if (user == null) {
    return (
      <p className="text-white mx-5 mt-1">
        Please <Link to="/login">login</Link> to view the chat.
      </p>
    );
  }

  return (
    <div>
      <nav className="chat-nav d-flex align-items-center px-3 py-2 position-fixed top-0 w-100 z-1">
        <Link to="/">
          <BsArrowLeftShort className="fs-1 me-2 text-white" />
        </Link>

        <div className="chat bg-transparent border-0 d-flex gap-2 align-items-center">
          <Link to="/">
            <BsPerson
              className="border-1 p-1 border-white border rounded-circle text-white bg-white bg-opacity-50"
              style={{
                minHeight: "25px",
                minWidth: "25px",
              }}
              alt="person img"
            />
          </Link>
          <div className="div1 bg-transparent text-white">
            <h5 className=" fs-6 fw-lighter bg-transparent mb-0">
              {user.name}
            </h5>
          </div>
        </div>
      </nav>

      {/* Messages Area */}
      <div
        className="messages-area flex-grow-1 overflow-auto px-3 mt-5 pt-2 mb-2 pb-5 pb-3 mx-3"
        ref={messagesEndRef}
      >
        {messages.map((msg) => {
          if (msg.participants.includes(Number(chatId.slice(1)))) {
            const isMine = msg.participants[1] === user.id;
            return (
              <div
                key={msg._id}
                className={`message-bubble h-25 p-2 rounded ${
                  isMine ? "mine" : "theirs "
                } mb-3`}
              >
                <p className=" bg-transparent mb-1">{msg.text}</p>
                <span className="msg-time bg-transparent">
                  {new Date(msg.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            );
          } else return;
        })}
        <div />
      </div>

      {/* Input Footer */}
      <footer className="text-sender d-flex align-items-center px-3 py-2 border-top position-fixed bottom-0">
        <form onSubmit={handleSend} className="d-flex flex-grow-1 text-form">
          <textarea
            value={newMessage}
            onChange={(e) => {
              setNewMessage(e.target.value);
            }}
            placeholder="Type your message..."
            className="form-control me-2 text-white  placeholder-wave border-0 px-3 py-1 rounded w-100"
            maxLength={500}
            style={{ backgroundColor: "#292727" }}
          />
          <button
            type="submit"
            className="btn-send border-0 bg-white rounded-end-circle rounded-start-circle"
          >
            <BsSend className="text-black bg-white fs-5" />
          </button>
        </form>
      </footer>
    </div>
  );
};

export default ChatDetails;
