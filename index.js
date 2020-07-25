const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
const port = 3000;

app.get("/", function(req, res) {
    res.render("home", {
        title: "Hello World",
        body: "This is the body of the the homepage",
    });
});

app.get("/another", (req, res) => res.send("Another World!"));

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);