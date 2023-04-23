const express = require('express');
const signupdata = require('./model')

const router = new express.Router()
const mongoose = require('mongoose');



router.post('/post', async (req, res) => {

    const userdata = new signupdata({

        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mail: req.body.mail,
        mobilenumber: req.body.mobilenumber,
        password: req.body.password
    })

    try {
        await userdata.save()

        res.status(201).json({
            registereduser: userdata
        })
    } catch (error) {
        console.log(error)
        res.status(401).json(error)
    }
});



router.post('/login', async (req, res) => {
    signupdata.find({ mail: req.body.mail, password: req.body.password }).select().exec().then(
        doc => {

            if (doc) {
                res.status(200).json({
                    data: doc

                })
            } else {
                res.status(200).json({
                    message: "no matching data found",

                })

            }
        }
    ).catch(err => {
        res.status.json({

            error: err
        })
    })
});


module.exports = router