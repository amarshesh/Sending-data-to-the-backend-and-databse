const Register = require("../database/models");

const register = (req, res, next)=>{
    const user = new Register({
        name :   req.body.name,
        text :   req.body.text,
        // date :   req.body.date,
        title :  req.body.title
    })

    user.save().then(user =>{
        res.json({
            message: "Your data added sucessfully",
            user
        })
    })
    .catch(err =>{
            res.json({
                message: err
            })
    })
}
module.exports = {register};
