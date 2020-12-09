const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../models/user");
const Car = require("../models/car");
const mongoose = require("mongoose");


router.get("/:id", async (req, res, next) => {
    let myUserFounded = await User.findById(req.params.id);

    try {
        res.json(myUserFounded);
    } catch (error) {
        console.log(error)
    }
})

// RUTA PARA EDITAR INFORMACION DEL USUARIO

router.put("/:id/edituser", (req, res, next) =>{
   // console.log(req.body, "console.log de req.body")
    User.findByIdAndUpdate(
        req.params.id ,
        {
            username: req.body.username,
            age: req.body.age,
            country: req.body.country,
            city: req.body.city,
            image: req.body.image
        },
        { new: true }
    )
        .then((updateUser) =>{
            res.locals.currentUserInfo = updateUser;
            res.status(200).json(updateUser);
        })
        .catch((error) => {
            console.log(error);
        });
});



// router.get("/:id", async (req, res, next) => {
    
//     let myUser = await User.findById(req.params.id);
//     try{
//         res.json(myUser)
//     } catch(error) {
//         console.log(error);
//     }
// });




module.exports = router;