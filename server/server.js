require('dotenv').config();
const cors = require('cors');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const mongoose = require("mongoose")
const { auth } = require('express-oauth2-jwt-bearer');
const Player = require('./Schemas/PlayerSchema')


mongoose.connect(process.env.MongoDB_URI)


// Define the order of middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());




const protectedRoute = require('./Routes/Protected');
app.use('/protectedAPI',protectedRoute )

app.listen(PORT, () => console.log('Listening on port', PORT));
