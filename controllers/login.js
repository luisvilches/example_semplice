const User = require('../models/user');

exports.login = (req,res) => {

    User.findOne({email: req.body.email},(err, user) => {
        
        if (err) throw err;

        if (!user) {

            res.send(403,{ success: false, message: 'Authentication failed. User not found.' });

        } else if (user) {

            if (user.password != req.body.password) {

                res.send(403,{ success: false, message: 'Authentication failed. Wrong password.' });

            } else {

                res.send(200,{
                    success: true,
                    token: res.generateToken(user),
                    user: user
                });

            }

        }

    });

}