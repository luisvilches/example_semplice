const User = require('../models/user');

exports.user = (req,res) => {
    let user = new User({
        email:req.body.email,
        password: req.body.password
    })

    user.save((err,result) => {
        if(err){
            res.send(500,{error:err})
        } else {
            res.send(200,result,result);
        }
    })
}