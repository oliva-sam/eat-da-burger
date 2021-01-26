// Dependencies 
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controllers")

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

// Parse POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// express can now use the routes
app.use(routes)

// Listener
app.listen(PORT, function() {
    console.log(`Now listening on http://localhost:${PORT}`);
});