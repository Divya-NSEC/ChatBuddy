import { useEffect, useState } from "react";

const ComponentA = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState(() => {
    const saved = localStorage.getItem("ai-chat-history");
    return saved
      ? JSON.parse(saved)
      : [
          {
            role: "assistant",
            text: "Hey 👋 I’m here with you. What’s on your mind today?",
          },
        ];
  });

  const [isTyping, setIsTyping] = useState(false);

  // 💾 Save chat history
  useEffect(() => {
    localStorage.setItem("ai-chat-history", JSON.stringify(chat));
  }, [chat]);

  // ✍️ Typing effect
  const typeBotMessage = (text) => {
    let index = 0;
    let tempText = "";

    setIsTyping(true);
    setChat((prev) => [...prev, { role: "assistant", text: "" }]);

    const interval = setInterval(() => {
      if (index < text.length) {
        tempText += text[index];
        index++;

        setChat((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            text: tempText,
          };
          return updated;
        });
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 30); // typing speed
  };

  const handleSend = async () => {
    if (!message.trim() || isTyping) return;

    const userMessage = message;

    setChat((prev) => [...prev, { role: "user", text: userMessage }]);
    setMessage("");

    try {
      const response = await fetch(" https://chat-backend-uogb.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content:
                "You are a friendly, caring AI companion. Talk casually like a close friend. Be warm, supportive, and engaging.",
            },
            ...chat.map((item) => ({
              role: item.role,
              content: item.text,
            })),
            { role: "user", content: userMessage },
          ],
        }),
      });

      const data = await response.json();
      typeBotMessage(data.reply);
    } catch (error) {
      console.error(error);
      typeBotMessage("Hmm 😕 something went wrong. Want to try again?");
    }
  };

  const clearChat = () => {
    const freshChat = [
      {
        role: "assistant",
        text: "Hey 😊 I’m back. Want to start fresh?",
      },
    ];
    setChat(freshChat);
    localStorage.removeItem("ai-chat-history");
  };

  return (
    <div className="w-full h-screen bg-blue-100 flex items-center justify-center">
      <div className="w-[95%] max-w-7xl h-[620px] bg-white rounded-xl shadow-lg flex p-5 gap-4">

        {/* CHAT AREA */}
        <div className="flex flex-col flex-1 bg-blue-200 rounded-xl p-4">
          {/* Header */}
          <div className="mb-3">
            <h1 className="text-2xl font-bold">Your AI Companion 💙</h1>
            <p className="text-sm text-gray-700">
              Always here to listen, chat, and keep you company.
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
            {chat.map((item, index) => (
              <div
                key={index}
                className={`max-w-[70%] px-4 py-2 rounded-lg text-sm leading-relaxed ${
                  item.role === "user"
                    ? "ml-auto bg-blue-600 text-white"
                    : "mr-auto bg-white text-black"
                }`}
              >
                {item.text}
              </div>
            ))}

            {isTyping && (
              <div className="mr-auto font-bold px-4 py-2 rounded-lg text-sm italic">
                typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type something… I’m listening 👂"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 h-10 px-3 border border-gray-400 rounded-lg focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="h-10 px-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
            >
              Send
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-[350px] flex flex-col gap-4">

          {/* Chat History */}
          <div className="flex-1 bg-blue-200 rounded-xl p-4 overflow-y-auto">
            <h1 className="text-xl font-bold mb-3">Recent Chats</h1>
            {chat.slice(-6).map((item, index) => (
              <div key={index} className="text-sm text-gray-700 mb-2">
                <span className="font-semibold">
                  {item.role === "user" ? "You:" : "AI:"}
                </span>{" "}
                {item.text.slice(0, 35)}...
              </div>
            ))}
          </div>

          {/* Settings */}
          <div className="h-[150px] bg-blue-200 rounded-xl p-4">
            <h1 className="text-xl font-bold mb-2">Settings</h1>
            <button
              onClick={clearChat}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Clear Conversation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentA;
