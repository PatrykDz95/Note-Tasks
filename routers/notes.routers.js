const express = require('express');
const Notes = require('../models/notes');
//const auth = require('../middleware/auth');
const router = new express.Router();

router.get('/all', async (req, res) => {
    const note = await Notes.find();
	res.send(note);
})

router.post('/add', async (req, res) => {
    const note = new Notes(req.body);
    try {
        await note.save();
        res.status(201).send({note});
    } catch (e) {
        res.status(400).send(e);
    }
});

// router.get('/:id', auth, async (req, res) => {
//     try {
//         const api = await GeoAPI.findOne({_id: req.params.id});

//         if (!api) {
//             return res.status(404).send();
//         }
//         res.send(api);
//     } catch (e) {
//         res.status(500).send();
//     }
// })

// router.delete('/:id', auth, async (req, res) => {
//     try {
//         const api = await GeoAPI.findOneAndDelete({ _id: req.params.id});

//         if (!api) {
//             res.status(404).send();
//         }
//         res.send(api);
//     } catch (e) {
//         res.status(500).send();
//     }
// });

module.exports = router;