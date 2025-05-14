const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true
    },
    BUS_Number: {
        type: String,
        // required: 
    },
    Begininig: {
        type: String,
        // required: true
    },
    Destination: {
        type: String,
        // required: true
    },
    Date: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Person', personSchema);
