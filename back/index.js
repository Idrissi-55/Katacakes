const express = require('express');
const mongoose = require("mongoose")
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

//connect to db
mongoose
    .connect(
        "mongodb+srv://test-user:oL6trPKqfQDgvMCM@katacakes.3upik.mongodb.net/Katacakes?retryWrites=true&w=majority",
        { useNewUrlParser: true, }
    )
    .then(() => console.log("Connected to DB successfuly"))
    .catch((err)=>{
        console.log(err);
    })


//routers
const cakeRoute = require('./app/routes/cake');

app.use(cors());
app.use(express.json());
app.use('/api/cakes', cakeRoute);

app.listen(port, () => console.log(`Server is running on ${port}`));