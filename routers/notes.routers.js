const express = require('express');
const Notes = require('../models/note');
const router = new express.Router();

// @route GET notes/all
// @desc Get all notes
// @access Private
router.get('/all', async (req, res) => {
    const note = await Notes.find();
	res.send(note);
})

// @route POST notes/add
// @desc Post a note
// @access Private
router.post('/add', async (req, res) => {
    const note = new Notes(req.body);
    try {
        await note.save();
        res.status(201).send({note});
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;