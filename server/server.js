require('dotenv').config();
const cors = require('cors');
const express = require("express");
const cookieParser = require('cookie-parser');
const session = require('express-session')
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose")


const MongoStore = require('connect-mongo') ;
require('dotenv').config();



mongoose.connect(process.env.MongoDB_URI+process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })


  const sessionStore =  MongoStore.create({ mongoUrl: process.env.MongoDB_URI+process.env.DB })



// Define the order of middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

app.use(cookieParser())
app.use(session({
    secret:  "asfefsgethrethfggfhjFFFAERRHJUJYJTEEEEWDFDFrthjtphjper",
    resave: false,
    saveUninitialized: false,
    cookie: {
        sameSite: 'strict',
        maxAge: 1000*60*60*24
    },
    store:sessionStore
})
)

const protectedRoute = require('./Routes/Protected');
app.use('/protectedAPI',protectedRoute )

app.listen(PORT, () => console.log('Listening on port', PORT));
