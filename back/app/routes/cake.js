const Cake = require("../models/Cake");

const cakeRouter = require("express").Router();

async function getCake(req, res, next) {
    let cake;
    try {
       cake = await Cake.findById(req.params.id)
        if (cake === null) {
            return res.status(404).json({ message: 'cannot find cake'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
    res.cake = cake;
    next();
}

cakeRouter.get("/", async (req, res) => {
    let cakes = await Cake.find();

    try {
        res.status(200).json(cakes);
    }
    catch (err) {
        res.status(500).json(err);

    }
})

//cakeRouter find by id
cakeRouter.get("/:id", getCake, (req,res) => {
        res.status(200).json(res.cake);
        
})

module.exports = cakeRouter;