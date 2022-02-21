const express = require("express");
const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
const mongoose=require('mongoose');

const AuthRoute = require('./routes/auth');
const AppointmentRoute = require('./routes/AppointmentRoute');

// Connected to the mongo Db
mongoose.connect(process.env.REACT_APP_DB).then(re=>{
    console.log("Connected Successfully");
}).catch(err=>{console.error(`Not Connected....${err}`); })

// end point for user.
app.use('/api',AuthRoute)
// end point for appointment.
app.use('/api/appointment',AppointmentRoute)

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port ,()=> console.log(`On Port ${port}`))