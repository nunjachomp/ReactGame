require('dotenv').config();
const cors = require('cors');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const { auth } = require('express-oauth2-jwt-bearer');




const jwtCheck = auth({
  audience: 'http://localhost:8080/protectedAPI',
  issuerBaseURL: 'https://gameitc.eu.auth0.com/',
  tokenSigningAlg: 'RS256'
});




const protectedRoute = require('./Routes/Protected');

// Define the order of middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use('/ProtectedAPI', protectedRoute);



app.listen(PORT, () => console.log('Listening on port', PORT));
