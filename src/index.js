import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecoilRoot } from "recoil";
import { BrowserRouter } from 'react-router-dom';
// import { Auth0Provider } from '@auth0/auth0-react';
import { PlayerContextProvider } from './Context/PlayerContext';
import { TotalScoreProvider } from './Context/TotalScoreContext';

ReactDOM.render(
    <BrowserRouter>
      {/* <Auth0Provider
        domain="gameitc.eu.auth0.com"
        clientId="J6O1eJSfkckaZAXJGt4mqQtSLTSMKwQf"
        redirectUri={window.location.origin}
        useRefreshTokens={true}
      > */}
        <PlayerContextProvider>
          <RecoilRoot>
          <TotalScoreProvider>
            <App />
            </TotalScoreProvider>
          </RecoilRoot>
        </PlayerContextProvider>
      {/* </Auth0Provider> */}
    </BrowserRouter>,
  document.getElementById('root')
);
