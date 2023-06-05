var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
    console.log("Hello I'm on start page.")
    res.send("Hello.");
});

module.exports = router;