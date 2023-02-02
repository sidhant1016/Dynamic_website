const express = require('express')
const { route } = require('express/lib/application')
const Detail = require("../models/Detail")
const slider = require('../models/slider')
const services = require('../models/services')

const router = express.Router()

router.get("/", async (req, res) => {

    const detail = await Detail.findOne({ "_id": "63d9fb5555a52097dbcdc87d" })
    // const Slides = await slider.find()
    //  const services = await  services.find()
    res.render("index", {
        detail: detail,
        // slider: slider,
        //  services:services
    
    });
});
router.get("/gallery", async (req, res) => {
    const detail = await Detail.findOne({ "_id": "63d9fb5555a52097dbcdc87d" })

    res.render("gallery", {
        detail: detail
    })

});
// router.get("/about", async (req, res) => {
//     const detail = await Detail.findOne({ "_id": "63d9fb5555a52097dbcdc87d" })

//     res.render("about", {
//         detail:detail
//     })
// })
// router.get("/about",(res,req)=>{
//     res.render("about")


router.post("/process-contact-form",(req,res)=>{
    console.log("successfully submitted")
    console.log(req.body)
    // res.send("You Successfully login to our website")
    // save the data to db
    try{
        const data = Contact.create(req.body)
        console.log(data)
        res.redirect("/")

    }catch(e){
        console.log(e)
        res.redirect("/")
    }

})

module.exports = router

