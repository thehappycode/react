const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const System = new Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Description: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('systems', System);