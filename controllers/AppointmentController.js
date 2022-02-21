const AppointmentModel = require("../models/appointmentModel");


const sellerAppointments = (req,res)=>{
  // function that give all appointments for the seller how have them.
  let received = req.body.whoReceived
  AppointmentModel.find({whoReceived:received}).then((response)=>{
    res.json(response)
  }).catch((err)=>{
    res.json({message:err})
  })

}

const createAppointment = (req, res) => {
    // function to create a new appointment.

  let appointment = AppointmentModel({
    time: req.body.time,
    date: req.body.date,
    whoBooking: req.body.whoBooking,
    whoReceived: req.body.whoReceived,
    active: req.body.active,
    underProcess: req.body.underProcess,
    finished: req.body.finished,
  });
  appointment.save().then((appointment) => {
    res.json({
      message: "Appointment Added Successfully!",
      data :appointment
    });
  })
  .catch((err) => {
    res.json({
      messageError: err,
    });
  });

};


const updateAppointment = (req,res)=>{
  let id=req.params.id;
  let newBody = {}
  Object.keys(req.body).map(item=>newBody[item] = req.body[item])
  console.log(newBody);

  AppointmentModel.findByIdAndUpdate(id ,{$set:newBody},{new:true}).then(response=>{
  res.send({message:'update Successfully' ,data:response})
}).catch(err=>{
  res.send({messageError:err})
})

}

const deleteAppointment = (req,res)=>{
  let id=req.params.id;
  

  User.findByIdAndRemove(id, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Removed Appointment Successful!", docs);
    }
});

}


module.exports = {
    createAppointment ,
    sellerAppointments,
    updateAppointment,
    deleteAppointment
}