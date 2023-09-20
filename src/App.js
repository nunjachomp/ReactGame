import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./components/Home/Home";
import axios from "axios";
import Auth from "./components/Auth/Auth";


const App = () => {
  const { isAuthenticated} = useAuth0();






  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated);
    if (isAuthenticated) {
      return;
    }
    try {
      console.log("Redirecting to login...")
     console.log(isAuthenticated);
    } catch (err) {
      console.log("Auth0 Error:", err);
    }
  }, [isAuthenticated]);

  return <>{isAuthenticated ? <Home /> :<Auth/> }</>;

};

export default App;
