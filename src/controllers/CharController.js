const Character = require("../models/Character");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    async listCharacters(req, res) {
        try {
            let char = await Character.findOne({});
            if (!char) throw new Error("Nenhum personagem encontrado!");
            else return res.json(char);
        } catch (error) {
            return res.status(409).json(error.message);
        }
    },

    async store(req, res) {
        try {
            const {
                name,
                description,
                comicItemNames,
                eventItemNames,
                seriesItemNames
                //storyItemNames,
                //storyItemTypes
            } = req.body;

            if (comicItemNames)
                var comicItemNamesArray = parseStringAsArray(comicItemNames);
            if (eventItemNames)
                var eventItemNamesArray = parseStringAsArray(eventItemNames);
            if (seriesItemNames)
                var seriesItemNameArray = parseStringAsArray(seriesItemNames);
            /*  if (storyItemNames)
                                                                                                                                                                                                                                                                                                                                                                                              var storyItemNamesArray = parseStringAsArray(storyItemNames);
                                                                                                                                                                                                                                                                                                                                                                                          if (storyItemTypes)
                                                                                                                                                                                                                                                                                                                                                                                              var storyItemTypesArray = parseStringAsArray(storyItemTypes);
                                                                                                                                                                                                                                                                                                                                                                                          */
            let char = await Character.findOne({ name });
            let modified = new Date();
            console.log(comicItemNamesArray);
            //let dump = comicItemNamesArray.length
            let ComicList = {
                //avaible = dump,
                items: [{ name: comicItemNamesArray[1] }]
            };

            console.log(ComicList);

            let EventList = {
                //avaible = dump,
                items: [{ name: eventItemNamesArray[1] }]
            };

            let SerieList = {
                //avaible = dump,
                items: [{ name: seriesItemNameArray[1] }]
            };

            if (!char) {
                char = await Character.create({
                    name,
                    description,
                    modified,
                    comics: ComicList,
                    events: EventList,
                    series: SerieList
                });

                await Character.findOne({ name }).then(function(record) {
                    comicItemNamesArray.forEach(element => {
                        record.comics.ComicList.items.push({ name: element });
                    });
                });
            } else throw new Error("Personagem já existe!");
            return res.json(char);
        } catch (error) {
            return res.json({ code: 409 } + error.message);
        }
    }
};