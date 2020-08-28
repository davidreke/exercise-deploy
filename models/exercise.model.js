const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exerciseSchema = new Schema(
    {
        username: {
            type: String,
            requird: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    },
    {timestamps: true}
)

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;

// CRUD
// Create
// Read
// Update
// Delete