const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

const app = express();

// Parse POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Listener
app.listen(PORT, function() {
    console.log(`Now listening on http://localhost:${PORT}`);
});