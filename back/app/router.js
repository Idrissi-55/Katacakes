const {Router, json} = require('express');

const router = Router();

router.get('/home', console.log("hello world"));

module.exports = router;