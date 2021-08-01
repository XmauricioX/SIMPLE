let express = require("express");
let router = express.Router();


module.exports = {
    index: (req, res)=> {
        res.render('index')
    }
};