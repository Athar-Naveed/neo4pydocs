import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown"; // Import Markdown renderer
import { X, MessageCircle } from "lucide-react"; // Import icons

const Chat = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Track loading state

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevent empty messages

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]); // Update UI instantly
    setInput("");
    setLoading(true);

    try {
      const { data } = await axios.post("http://127.0.0.1:8000/ask", {
        message: input,
      });

      const botMessage = { role: "ai", content: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Panel (Modal) */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-lg font-semibold">Chatbot</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Container */}
            <div className="border bg-black p-4 h-64 lg:h-72 overflow-auto w-full">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`p-2 lg:w-full ${
                    m.role === "user" ? "text-blue-600" : "text-white"
                  }`}
                >
                  <strong>{m.role === "user" ? "You" : "AI"}:</strong>{" "}
                  <div className="">
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                </div>
              ))}
              {loading && <div className="text-gray-500">Thinking...</div>}
            </div>

            {/* Input Field */}
            <form onSubmit={sendMessage} className="mt-4 flex">
              <input
                className="border p-2 flex-1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                disabled={loading}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 ml-2 rounded"
                disabled={loading}
              >
                {loading ? "..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
