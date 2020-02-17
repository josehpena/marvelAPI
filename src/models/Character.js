const mongoose = require('mongoose');

const charSchema = new mongoose.Schema({
    id (int, optional)            : 
    name (string, optional)       : 
    description (string, optional): 
    modified (Date, optional)     :  
    comics (ComicList, optional)  : 
    stories (StoryList, optional) : 
    events (EventList, optional)  : 
    series (SeriesList, optional) : 
}); 