const mongoose = require('mongoose');
const express= require('express');
const bodyParser = require('body-parser');

const app= express();
app.use(bodyParser.json());
//const mongoose = require('mongoose');
const VIPVist = require('./schema'); 
const dotenv = require('dotenv');

dotenv.config();
const URL = process.env.MONGOURL

mongoose.connect(URL)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use("/",(req,res)=>{
    console.log(req.body);
    const {name}=req.body;
    const {place} =req.body;
    const {date} = req.body;
    const {time}= req.body;
    const {modeofArrival} =req.body;
    const {entryRoute }= req.body;
    const {exitRoute}= req.body;
    const {PlaceofStay}= req.body;
    const {crowd}= req.body;
    const {officer}=req.body;
    
    const newEvent = new Event({
    name,
      place,
      date,
      time,
      modeofArrival,
      entryRoute,
      exitRoute,
      PlaceofStay,
      crowd,
      officer,
    });
    newEvent.save()
      .then(doc => {
        console.log('New event saved:', doc);
        res.send('Event saved successfully');
      })
      .catch(err => {
        console.error('Error saving event:', err);
        res.status(500).send('Error saving event');
      });
})




app.listen(3100,()=>{console.log("running server")});

