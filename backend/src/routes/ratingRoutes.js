const express =
    require("express");

const router =
    express.Router();

const {
    fetchRatingHistory
} = require(
    "../controllers/ratingController"
);

router.get(
    "/:handle",
    fetchRatingHistory
);

module.exports =
    router;