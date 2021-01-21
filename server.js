const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// Listener
app.listen(PORT, function() {
    console.log(`Now listening on http://localhost:${PORT}`);
});