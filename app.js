const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const usersRoutes = require("./routes/users");
const homeRoutes = require("./routes/home");

app.get("/favicon.ico", (req, res) => res.status(204));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(usersRoutes);
app.use(homeRoutes);

app.listen(3000);
