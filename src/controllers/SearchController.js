const Character = require("../models/Character");

module.exports = {
    async findCharacter(req, res) {
        try {
            const ID = req.params.characterID;
            let char = await Character.findById(ID, function(err) {
                if (err) {
                    throw new Error("Character not found.");
                }
            });
            return res.json(char);
        } catch (error) {
            return res.status(404).json(error.message);
        }
    },

    async findComics(req, res) {
        try {
            const ID = req.params.characterID;

            let char = await Character.findById(ID);

            return res.json(char.comics);
        } catch (error) {
            return res.json(error.message);
        }
    },
    async findSeries(req, res) {
        try {
            const ID = req.params.characterID;

            let char = await Character.findById(ID);

            return res.json(char.series);
        } catch (error) {
            return res.json(error.message);
        }
    },
    async findEvents(req, res) {
        try {
            const ID = req.params.characterID;

            let char = await Character.findById(ID);

            return res.json(char.events);
        } catch (error) {
            return res.json(error.message);
        }
    },
    async findStories(req, res) {
        try {
            const ID = req.params.characterID;

            let char = await Character.findById(ID);

            return res.json(char.stories);
        } catch (error) {
            return res.json(error.message);
        }
    }
};