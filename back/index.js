const express = require ('express');

const app = express();

const port = process.env.PORT || 1234;

const router = require('./app/router');

app.use(express.json());

app.use(cors());

app.use('/api', router);

app.listen(port, () => console.log(`Server is running ons ${port}`));