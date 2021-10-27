const express = require ('express');
const mongoose = require("mongoose")
const app = express();

const cors = require("cors")

// const port = process.env.PORT || 1234;

const port = 5000;

const CakeModel = require("./app/models/Cake")

// const router = require('./app/router');

app.use(express.json());

mongoose.connect(
    "mongodb+srv://test-user:oL6trPKqfQDgvMCM@katacakes.3upik.mongodb.net/Katacakes?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
    }
)


app.use(cors());

// app.use('/api', router);

app.get("/", async(req, res) => {
    const cake = new CakeModel({id: 20, name: "testCake", thumbnail: "/fakePath", season: "autumn", description: "lorem ipsum"});

    try{
        await cake.save();
        res.send(`${cake}`);
    } catch(err) {
        console.log(err)
    }
})


app.listen(port, () => console.log(`Server is running on ${port}`));