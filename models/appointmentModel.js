const mongoose = require("mongoose");

// Schema for Appointment
let AppointmentSchema = mongoose.Schema({
    time : String ,
    date : String ,
    whoBooking : String,
    whoReceived : String,
    active : Boolean,
    underProcess : Boolean,
    finished : Boolean


})

// model for Appointment
let AppointmentModel = mongoose.model('appointment',AppointmentSchema)

module.exports = AppointmentModel