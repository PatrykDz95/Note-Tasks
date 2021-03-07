require('./db/mongoose');
const express = require('express');
const user = require('./routers/user.routers');
const notes = require('./routers/notes.routers');
const cors = require('cors');
const passport = require("passport");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
    origin: '*',
  }));
  
// Bodyparser middleware
app.use(express.json());
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

app.use("/api/users", user);
app.use("/notes", notes);

app.listen(port, () => {
    console.log(`Express is running`);
});

module.exports = app;