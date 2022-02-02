const SellerModel  = require('../models/sellerModule')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = (req, res, next) => {
    // function to register a new seller.
    
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
        password: req.body.password,

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

const login = (req,res,next)=>{
    // function to login exists seller.
    var email = req.body.email;
    var password = req.body.password;
    
    SellerModel.findOne({$or: [{email:email},{phone:email}]})
    .then(user=>{
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if(err){
                    res.json({error:err})
                }
                if(result){
                    let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({message:"Login Successful!",
                    token
                })
                }
                else{
                    res.json({message:'password does not match!'})
                }
            })

        }else{
            res.json({message:"No user found"})
        }
    })
    
    }

const allSeller = (req , res )=>{

    SellerModel.find().then(response=>{
        res.json({
            response
        })
    }).catch(err=>{res.json({message:"An Error"})})
}

module.exports = {register,login}


