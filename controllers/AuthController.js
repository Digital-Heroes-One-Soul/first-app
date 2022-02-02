const SellerModel  = require('../models/sellerModule')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if(err) {
             res.json({
                 error: err
             })
        }
    })
    let seller = new SellerModel ({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass,

        image: req.body.image,
        service: req.body.service,
        isSeller:req.body.isSeller
    })
    seller.save()
    .then(seller =>{
        res.json({
            message : "Seller Added Successfully!"
        })
    }).catch(err=>{
        res.json({
            message : "An error"
        }) 
    })
}

module.exports = {register}