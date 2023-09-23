import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/auth" element={<Auth />} />
    <Route path="*" element={isAuthenticated ? <Home /> : <Auth />} />
  </Routes>
  );
};

export default App;
