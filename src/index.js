import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from "recoil";
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { PlayerContextProvider } from './Context/PlayerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <PlayerContextProvider>
      <Auth0Provider
        domain='gameitc.eu.auth0.com'
        clientId='J6O1eJSfkckaZAXJGt4mqQtSLTSMKwQf'
        authorizationParams={{ redirectUri: window.location.origin }}
        useRefreshTokens={true}>
          <RecoilRoot>
              <App />
          </RecoilRoot>
      </Auth0Provider>
      </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
