import React from "react";
import Layout from "./components/layouts/Layouts";
import { Route, Routes } from "react-router-dom";
import Overview from "./components/pages/Overview";
import Chatbot from "./components/pages/Chatbot";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Overview />} />
        <Route exact path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Layout>
  );
}

export default App;
