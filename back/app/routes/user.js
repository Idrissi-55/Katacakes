const User = require("../models/User");

const userRouter = require("express").Router();


userRouter.post("/login", async (req, res) => {
    
    const {email, password}= req.body;
    const user = await User.findOne({
        email, password,
    });
    try {
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json(err);

    }
})


module.exports = userRouter;