const express = require("express");
const router = express.Router();
const searchController = require("../controllers/search.controller");

router.post("/", searchController.createSearch);

router.get("/", searchController.getAllSearches);

router.get("/:id", searchController.getSearchById);

router.put("/:id", searchController.updateSearch);

router.delete("/:id", searchController.deleteSearch);

module.exports = router;
