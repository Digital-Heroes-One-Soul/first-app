const express = require("express");
const route = express.Router();
const AppointmentController = require("../controllers/AppointmentController");

// end point for create a new appointment.
route.post('/create',AppointmentController.createAppointment)

// end point for get appointments for the seller.
route.get('/appointments',AppointmentController.sellerAppointments)

// end point for update appointment.
route.put('/update/:id',AppointmentController.updateAppointment)

// end point for delete appointment.
route.put('/delete/:id',AppointmentController.deleteAppointment)

module.exports = route