var jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
require('dotenv').config();


const jwksClientInstance = jwksClient({
    jwksUri: 'gameitc.eu.auth0.com', // Replace with your Auth0 domain
  });
  
  function auth(req, res, next) {
    const token = req.headers.authorization; 
    // Get the token from the Authorization header
  console.log(token);
    if (!token) {
      return res.status(401).send('Token Required');
    }
  
    // Verify the RS256 token using the Auth0 JWKS
    jwt.verify(token, (header, callback) => {
      // Fetch the public key for verification
      jwksClientInstance.getSigningKey(header.kid, (err, key) => {
        if (err) {
          return res.status(401).send('Invalid Token');
        }
  
        const signingKey = key.publicKey || key.rsaPublicKey;
  
        // Verify the token with the retrieved public key
        jwt.verify(token, signingKey, (err, decoded) => {
          if (err) {
            return res.status(401).send('Invalid Token');
          }
  
          req.Player = decoded; // Store the decoded token data in the request
          next();
        });
      });
    });
  }
  
  module.exports = {auth};