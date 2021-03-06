require('./db/mongoose');
const express = require('express');
const user = require('./routers/user.routers');
const notes = require('./routers/notes.routers');
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");
const passport = require("passport");

const port = process.env.PORT || 5000

app.use(express.json())

app.use(cors({
    origin: '*',
  }));
  
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

app.use("/api/users", user);
app.use("/notes", notes);

app.listen(port, () => {
    console.log(`Express is running`);
});
