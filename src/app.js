const express = require("express")
const hbs = require('hbs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes/main')
const Detail = require('./models/Detail')
const Slider = require("./models/slider")
 const services = require("./models/services")
 mongoose.set('strictQuery', false);




app.use(bodyParser.urlencoded({extended:false}))

app.use('/static', express.static("public"))
app.use('', routes)

app.set('view engine', 'hbs')
app.set('views', 'views')
hbs.registerPartials("views/partials")
mongoose.connect("mongodb+srv://sidhant:9cu0pFHpz56dD9OI@cluster0.cvzhshl.mongodb.net/dynamic_website?retryWrites=true&w=majority", () => {
    console.log("db connected")

    // Services.create([
    //     {
    //     title:'Provide Best Courses',
    //     description:'We provide all kind of Courses',
    //     linkText:'http://www.odaninfotech.com',
    //     link:'Check'
    //     },
    //     {
    //     title:'Help',
    //     description:'Contact us for help',
    //     linkText:'http://www.odaninfotech.com',
    //     link:'help'
    //     }
    // ])


    // Slider.create([
    //     {
    //         title:'Welcome To Odan Inforech',
    //         imageUrl:'/static/images/img1.jpg'
    //     },
    //     {
    //         title:'Best App Development Company',
    //         imageUrl:'/static/images/img2.jpg'
    //     },
    //     {
    //         title:'Be Here Be Vibrant',
    //         imageUrl:'/static/images/img 3.jpg'
    //     }
    // ])






    //     Detail.create({
    //         brandName:"ODAN INFOTECH",
    //         brandIconUrl:"https://media-exp1.licdn.com/dms/image/C4D0BAQE8WmykGyTR1Q/company-logo_200_200/0/1659607756708?e=2147483647&v=beta&t=c8uXPa7kG2qmseLpojGTdbP9Y2bEvZspixt7s8dPOFI",

    //         links:[
    //             {
    //                 label:"Home",
    //                 url:"/",
    //             },
    //             {
    //                 label:"Services",
    //                 url:"/services"
    //             },
    //             {
    //                 label:"Gallery",
    //                 url:"/gallery"
    //             },
    //             {
    //                 label:"About",
    //                 url:"/about"
    //             },
    //             {
    //                 label:"Contact Us",
    //                 url:"/contact-us"



    //             }
    //         ]
    //     })

     })
    mongoose.con

app.get("/about",(req,res)=>{
    res.send("We are the service based company with over 5+years of experience in web & mobile application development. We have successfully implemented 100+ projects and well pleased our clients with our work ethics. Our work humanities are furnishing the Advanced and original solution to our clients and unbeatable mind to shine in all features of our commitment. We aimlessly run ourselves to execute above and beyond the call-of-duty, while often officiating as quarterbacks for project accomplishment and fireman in moments of need. We endlessly charge and fire revolutions in the areas of the blockchain, mobile app development, web app development, service intelligence, Internet of things, Project lifecycle management. our center of attention authorizes to carry advanced & original service and industry wise digital determination based on client requirements. ")

})
// app.get("/contact-us",(req,res)=>{
//     res.send("thanks for contacting us")

// })


    app.listen(3000, function (res, req) {
        console.log("good to see ");
    });