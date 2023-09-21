
import { useAuth0 } from "@auth0/auth0-react";
import './AuthGame.css';
import React, { useEffect } from 'react';
import skrollr from 'skrollr';

const Auth = () => {
  const { loginWithPopup } = useAuth0();
  useEffect(() => {

    const s = skrollr.init({
      easing: {
        frames: (p) => Math.round(Math.sin(p) * 500),
      },
    });


    return () => {
      s.destroy();
    };
  }, []); 

  return (
    <>
    <div className="authMain">
      <li className="autBtn" onClick={loginWithPopup}>Sign In</li>
      <li className="autBtn">New Game</li>
      <li className="autBtn">Continue</li>
    </div>
     <div id="redRidingHood" className="skrollable running-girl" data-bottom-top="background-position-x[frames]:0px; right:-0%;" data-top-bottom="background-position-x[frames]:200px; right:0%;"></div>

      <div className="background skrollable" data-bottom-top="background-position-x: 0px; right:-0%;" data-top-bottom="background-position-x:-1042px; right:0%;"></div>
    </>
  );
};

export default Auth;
