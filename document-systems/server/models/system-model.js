const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const System = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('systems', System);