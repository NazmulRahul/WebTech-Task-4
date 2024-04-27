var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const stylus = require("stylus");
const nib = require("nib");
var app = express();
const PORT = 3000;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(
    stylus.middleware({
        src: __dirname + "/public",
        compile: (str, path) => {
            return stylus(str).set("filename", path).use(nib());
        },
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index", { title: "Express" });
});
app.post("/submit", (req, res) => {
    const { name, email } = req.body;
    res.render("info", { name, email });
});
app.get("/Form", (req, res) => {
    res.render("form", { title: "Form" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
