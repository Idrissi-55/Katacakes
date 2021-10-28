const Cake = require("../models/Cake");

const cakeRouter = require("express").Router();

cakeRouter.get("/", async (req, res) => {
    let cakes = await Cake.find();

    try {
        res.status(200).json(cakes);
    }
    catch (err) {
        res.status(500).json(err);

    }
})

module.exports = cakeRouter;