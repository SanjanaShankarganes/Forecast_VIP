const mongoose = require('mongoose');
const express= require('express');
const app= express();
require('dotenv').config();
const Schema = mongoose.Schema;

const EventSchema = new Schema({
 name: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String, 
    required: true
  },
   modeofArrival: {
    type: Number, 
    required: true
  },
  entryRoute: {
    type: String, 
    required: true
  },
  exitRoute: {
    type: String,
    required: true
  },
  PlaceofStay: {
    type: String,
    required: true
  },
  crowd: {
    type: Boolean, 
    required: true
  },
  officer: {
    type: String ,
  }
});
const Normal = mongoose.model('VIPVisit', EventSchema);
module.exports = Normal;
