import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ChatbotIntegration = () => {
  const [integrationStatus, setIntegrationStatus] = useState(false); // false (not in integration) by default
  const navigate = useNavigate();

  const handleIntegrateChatbot = () => {
    // Set to true to show integration instructions when Integrate button is clicked
    setIntegrationStatus(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 max-sm:w-[90%] max-lg:w-[80%] min-h-screen">
      <h2 className="text-3xl font-semibold text-center mb-6">Chatbot Integration</h2>

      {/* Initial buttons: Test Chatbot and Integrate on Your Website */}
      {!integrationStatus && (
        <>
          <div className="space-y-4">
            <Link to="/chat">
            <button
              className="w-full p-3 bg-teal-500 text-white rounded-md hover:bg-teal-400 transition"
            >
              Test Chatbot
            </button>
            </Link>
          </div>
          <div className="space-y-4 mt-4">
            <button
              onClick={handleIntegrateChatbot}
              className="w-full p-3 bg-purple-700 text-white rounded-md hover:bg-purple-600 transition"
            >
              Integrate on Your Website
            </button>
          </div>
        </>
      )}

      {/* Integration Instructions State */}
      {integrationStatus && (
        <div className="mt-6 space-y-4">
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-semibold">Integration Instructions</h3>
            <p className="text-sm mt-2">
              1. Copy and paste the following code into the <code>&lt;head&gt;</code> section of your website:
            </p>
            <pre className="bg-gray-200 sm:p-4 text-sm mt-2 rounded-md">
              <code className="max-sm:text-xs">&lt;script src="https://your-chatbot-url.js"&gt;&lt;/script&gt;</code>
            </pre>
            <p className="text-sm mt-2">
              2. If you need assistance, you can{" "}
              <button
                onClick={() => navigate("/chatbot")}
                className="text-teal-500 hover:underline"
              >
                email your developer
              </button>
            </p>
          </div>
          <Link to="/confetti">
          <button
            className="w-full p-3 bg-teal-500 text-white rounded-md hover:bg-teal-400 transition mt-6"
          >
            Test Integration
          </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ChatbotIntegration;