const mongoose = require("mongoose");

const ComicList = new mongoose.Schema({
    avaible: { type: Number, required: false },
    returned: { type: Number, required: false },
    items: [{ name: String }]
});

const StorySummary = new mongoose.Schema({
    name: [String],
    type: [String]
});
const StoryList = new mongoose.Schema({
    avaible: { type: Number, required: false },
    returned: { type: Number, required: false },
    items: [StorySummary]
});

const EventList = new mongoose.Schema({
    avaible: { type: Number, required: false },
    returned: { type: Number, required: false },
    items: [{ name: [String] }]
});

const SeriesList = new mongoose.Schema({
    avaible: { type: Number, required: false },
    returned: { type: Number, required: false },
    items: [{ name: [String] }]
});

exports.ComicList = ComicList;
exports.StoryList = StoryList;
exports.EventList = EventList;
exports.SeriesList = SeriesList;