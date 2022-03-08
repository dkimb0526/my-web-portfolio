//import classes from "./components/modules/textStyling.module.css";
//import Background from "./components/background/background";
import React from "react";
import Layout from "./components/layouts/Layouts";
import { Route, Routes } from "react-router-dom";
import Overview from "./components/pages/Overview";
//import Aboutme from "./components/pages/Aboutme";
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
