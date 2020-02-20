const mongoose = require("mongoose");

const ComicList = new mongoose.Schema({
    avaible: { type: Number, required: false },
    items: [{ name: String, _id: false }, { _id: false }]
}, { _id: false });

const StorySummary = new mongoose.Schema({
    name: String,
    type: String
}, { _id: false });

const StoryList = new mongoose.Schema({
    avaible: { type: Number, required: false },
    items: [StorySummary]
}, { _id: false });

const EventList = new mongoose.Schema({
    avaible: { type: Number, required: false },
    items: [{ name: String, _id: false }]
}, { _id: false });

const SeriesList = new mongoose.Schema({
    avaible: { type: Number, required: false },
    items: [{ name: String, _id: false }]
}, { _id: false });

exports.ComicList = ComicList;
exports.StoryList = StoryList;
exports.EventList = EventList;
exports.SeriesList = SeriesList;