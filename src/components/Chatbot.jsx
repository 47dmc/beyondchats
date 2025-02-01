import React, { useState } from "react";

const Chatbot = () => {
  const [userInput, setUserInput] = useState(""); // Store user's input
  const [chatHistory, setChatHistory] = useState([]); // Store chat history (user's questions + chatbot responses)

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value); // Update user input
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      // Add user's message to chat history
      setChatHistory([...chatHistory, { sender: "user", message: userInput }]);
      
      // Simulate chatbot's response after the user's input
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "chatbot", message: "Sorry, chatbot is not working right now..." },
      ]);
      
      // Clear the user input field
      setUserInput("");
    }
  };


  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 max-sm:w-[90%] max-lg:w-[80%] min-h-[400px]">
      <h2 className="text-3xl font-semibold text-center mb-6">Chatbot</h2>

      {/* Chat History Display */}
      <div className="overflow-y-auto h-72 mb-4">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`mb-4 ${chat.sender === "user" ? "text-right" : "text-left"}`}>
            <div
              className={`inline-block px-4 py-2 rounded-md ${
                chat.sender === "user" ? "bg-teal-500 text-white" : "bg-gray-200"
              }`}
            >
              {chat.message}
            </div>
          </div>
        ))}
      </div>

      {/* User Input Section */}
      <div className="flex items-center">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInputChange}
          className="w-full p-3 border border-gray-300 rounded-l-md"
          placeholder="Type your question..."
        />
        <button
          onClick={handleSendMessage}
          className="p-3 bg-teal-500 text-white rounded-r-md hover:bg-teal-400 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
