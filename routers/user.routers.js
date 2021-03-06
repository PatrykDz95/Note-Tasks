const express = require('express');
const User = require('../models/user');
const router = new express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");



// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);// Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }User.findOne({ 
        email: req.body.email 
    }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          });// Hash password before saving in database
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            });
          });
        }
      });
});


// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {

    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }// Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 3600 // 1 hour in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
});




// router.post('/create', async (req, res) => {
//     const user = new User(req.body);
//     try {
//         await user.save();
//         const token = await user.generateAuthToken();
//         res.status(201).send({ user, token });
//     } catch (e) {
//         res.status(400).send(e);
//     }
// })

// router.post('/login', async (req, res) => {
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password);
//         const token = await user.generateAuthToken();
//         res.send({ user, token });
//     } catch (e) {
//         res.status(400).send();
//     }
// })

// router.delete('/delete', async (req, res) => {
//     try {
//         await req.user.remove();
//         res.send(req.user);
//     } catch (e) {
//         res.status(500).send();
//     }
// })

module.exports = router;