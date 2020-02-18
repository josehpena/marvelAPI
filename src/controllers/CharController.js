const Character = require("../models/Character");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    async store(req, res) {
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
                const comicItemNamesArray = parseStringAsArray(comicItemNames);
            if (eventItemNames)
                const eventItemNamesArray = parseStringAsArray(eventItemNames);
            if (seriesItemNames)
                const seriesItemNameArray = parseStringAsArray(seriesItemNames);
            if (storyItemNames)
                const storyItemNamesArray = parseStringAsArray(storyItemNames);
            if (storyItemTypes)
                const storyItemTypesArray = parseStringAsArray(storyItemTypes);

            let char = await Character.findOne({ name });
            let modified = new Date();

            let ComicList = {
                avaible = comicItemNamesArray.length,
                items: { names: [comicItemNamesArray] }
            }

            let EventList = {
                avaible = eventItemNamesArray.length,
                items: { names: [eventItemNamesArray] }
            }

            let SerieList = {
                avaible = seriesItemNameArray.length,
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

            } else throw new Error("Personagem já existe!");

        } catch (error) {
            console.log(error.name + ":" + error.message);
        }
        return res.json(char);
    }
};