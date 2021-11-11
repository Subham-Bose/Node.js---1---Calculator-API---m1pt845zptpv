const express = require("express");
const app = express();
const router = require("./routes/router");
const port = 3000;
app.use(express.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use("/calculator", router);

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
