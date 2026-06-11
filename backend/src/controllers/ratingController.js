const {
    getRatingHistory
} = require("../services/ratingService");

const fetchRatingHistory = async (
    req,
    res
) => {

    try {

        const handle =
            req.params.handle;

        const data =
            await getRatingHistory(
                handle
            );

        res.json(
            data.result
        );

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

module.exports = {
    fetchRatingHistory
};