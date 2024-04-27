var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});
router.get("/about", (req, res) => {
    res.send(
        "This is an about page"
    );
});
router.get("/students", (req, res) => {
    res.send("students :\n 1.2019331047\n 2.2020331101\n");
});
router.get("/time", (req, res) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
    });

    res.send(formattedDate);
});
module.exports = router;
