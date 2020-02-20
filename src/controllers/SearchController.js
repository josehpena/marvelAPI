const Character = require("../models/Character");

module.exports = {
    async findCharacter(req, res) {
        const ID = req.params.characterID;
        await Character.findById(ID)
            .then(function(char) {
                return res.json(char);
            })
            .catch(function(err) {
                return res.status(404).json("Character not found.");
            });
    },

    async findComics(req, res) {
        const ID = req.params.characterID;

        await Character.findById(ID)
            .then(function(char) {
                return res.json(char.comics);
            })
            .catch(function() {
                return res.status(404).json("Character not found.");
            });
    },
    async findSeries(req, res) {
        const ID = req.params.characterID;
        await Character.findById(ID)
            .then(function(char) {
                return res.json(char.series);
            })
            .catch(function() {
                return res.status(404).json("Character not found.");
            });
    },
    async findEvents(req, res) {
        const ID = req.params.characterID;
        await Character.findById(ID)
            .then(function(char) {
                return res.json(char.events);
            })
            .catch(function() {
                return res.status(404).json("Character not found.");
            });
    },
    async findStories(req, res) {
        const ID = req.params.characterID;
        await Character.findById(ID)
            .then(function(char) {
                return res.json(char.stories);
            })
            .catch(function() {
                return res.status(404).json("Character not found.");
            });
    }
};