const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: true,     
    },
    // The note expires after 200 sec
    sessionActivity: { 
        type: Date, 
        expires: '200s', 
        default: Date.now
    }
});

noteSchema.pre("save", function(next) {
     this.sessionActivity = new Date(); 
     next(); 
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;