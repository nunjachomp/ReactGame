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





// Define the order of middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// Use the JWT middleware to protect routes
app.use(jwtCheck);



// Protected route
app.get('/protectedAPI', (req, res) => {
  const { token } = req.cookies;
  console.log(token);
  // The request is authenticated with a valid JWT
  // You can access user information via req.auth
  const user = req.auth.payload; // This contains user claims (e.g., sub, email)

  // Your logic for handling the protected route here
  res.send(`Hello, ${user.email}! You have access to this protected resource.`);
}); 

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(401).json({ error: 'Unauthorized' }); // Customize the error response as needed
});

app.listen(PORT, () => console.log('Listening on port', PORT));
