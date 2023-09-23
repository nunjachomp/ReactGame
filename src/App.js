import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";

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

  return <><Home />
  {/* {isAuthenticated ? <Home /> :<Auth/> } */}
  </>;
};

export default App;
