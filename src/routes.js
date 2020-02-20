const { Router } = require("express");
const routes = Router();
const CharController = require("./controllers/CharController");
const SearchController = require("./controllers/SearchController");

routes.post("/v1/public/character", CharController.store);
routes.get("/v1/public/character", CharController.listCharacters);
routes.get("/v1/public/character/:characterID", SearchController.findCharacter);
routes.get(
    "/v1/public/character/:characterID/comics",
    SearchController.findComics
);
routes.get(
    "/v1/public/character/:characterID/events",
    SearchController.findEvents
);
routes.get(
    "/v1/public/character/:characterID/series",
    SearchController.findStories
);
routes.get(
    "/v1/public/character/:characterID/stories",
    SearchController.findSeries
);

module.exports = routes;