const mongoose = require("mongoose");
const SchemaList = require("./utils/SchemaLists");

const CharSchema = new mongoose.Schema({
    _id: { type: Schema.ObjectId, auto: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    modified: { type: Date, required: false },
    comics: { type: [SchemaList.ComicList], required: false },
    stories: { type: [SchemaList.StoryList], required: false },
    events: { type: [SchemaList.EventList], required: false },
    series: { type: [SchemaList.SeriesList], required: false }
});

module.exports = mongoose.model("Character", CharSchema);