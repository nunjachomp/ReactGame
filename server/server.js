require('dotenv').config();
const cors = require('cors');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const { auth } = require('express-oauth2-jwt-bearer');




// Define the order of middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());




const protectedRoute = require('./Routes/Protected');
app.use('/protectedAPI',protectedRoute )

app.listen(PORT, () => console.log('Listening on port', PORT));
