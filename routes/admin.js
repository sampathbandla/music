var express = require('express');
var router = express.Router();


router.get("/dashboard",(req,res) => {
    res.render("admin-dashboard")
})


module.exports = router