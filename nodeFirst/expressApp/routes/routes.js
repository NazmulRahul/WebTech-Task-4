const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.send("Showing Registration number");
});
router.get('/students',(req,res))

module.exports=router