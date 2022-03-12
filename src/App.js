import React from "react";
import Layout from "./components/layouts/Layouts";
import { Route, Routes } from "react-router-dom";
import Overview from "./components/pages/Overview";
import ChatbotApril from "./components/pages/ChatbotApril";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/my-web-portfolio" element={<Overview />} />
        <Route path="/chatbot-april" element={<ChatbotApril />} />
      </Routes>
    </Layout>
  );
}

export default App;
