const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    note: {
        type: String,
        unique: true,
        required: true,     
    },
    //The note expires after 5 sec
    // sessionActivity: { 
    //     type: Date, 
    //     expires: '5s', 
    //     default: Date.now
    // }
});

noteSchema.pre("save", function(next) {
     this.sessionActivity = new Date(); 
     next(); 
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;