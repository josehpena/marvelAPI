const Character = require("../models/Character");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    async store(req, res) {
        let response;
        try {
            const {
                name,
                description,
                comicItemNames,
                eventItemNames,
                seriesItemNames,
                //storyItemNames,
                //storyItemTypes
            } = req.body;

            if (comicItemNames)
                var comicItemNamesArray = parseStringAsArray(comicItemNames);
            if (eventItemNames)
                var eventItemNamesArray = parseStringAsArray(eventItemNames);
            if (seriesItemNames)
                var seriesItemNameArray = parseStringAsArray(seriesItemNames);
            if (storyItemNames)
                var storyItemNamesArray = parseStringAsArray(storyItemNames);
            if (storyItemTypes)
                var storyItemTypesArray = parseStringAsArray(storyItemTypes);

            let char = await Character.findOne({ name });
            let modified = new Date();

            //let dump = comicItemNamesArray.length
            let ComicList = {
                //avaible = dump,
                items: { names: [comicItemNamesArray] }
            }
            
            let EventList = {
                //avaible = dump,
                items: { names: [eventItemNamesArray] }
            }

            
            let SerieList = {
                //avaible = dump,
                items: { names: [seriesItemNameArray] }
            }

            if (!char) {

                char = await Character.create({
                    name,
                    description,
                    modified,
                    comics: ComicList,
                    events: EventList,
                    series: SerieList
                })
                if(char)
                    response = {"code":200,
                    "status":"OK",
                    char
                }
                else throw new Error("Erro na criação de personagem!")
            } else throw new Error("Personagem já existe!");

        } catch (error) {
            console.log(error.name + ":" + error.message);
        }
        return res.json(response);
    }
};