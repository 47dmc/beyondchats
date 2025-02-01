import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import UserRegistration from "./components/UserRegistration";
import SetupOrganization from "./components/SetupOrganization";
import ChatbotIntegration from "./components/ChatbotIntegration";
import Footer from "./components/Footer";
import ConfettiUI from "./components/Confetti";
import Chatbot from "./components/ChatBot";

function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Routes>
        <Route path="/" element={<UserRegistration />} />
        <Route path="/setup" element={<SetupOrganization />} />
        <Route path="/chatbot" element={<ChatbotIntegration />} />
        <Route path="/confetti" element={<ConfettiUI />} />
        <Route path="/chat" element={<Chatbot />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
