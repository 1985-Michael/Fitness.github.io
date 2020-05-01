const mongoose = require("mongoose");

let Schema;

Schema = mongoose.Schema;

let workoutSchema;

workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Exercise Type"
        },
        name: {
            type: String,
            trim: true,
            required: "Excercise Name"
        },
        duration: {
            type: Number,
            required: "Duration"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
}, {
    toJSON: {
        virtuals: true
    }
});

workoutSchema.virtual("totalDuration").get(function() {

    return this.exercises.reduce((total, exercise) => total + exercise.duration, 0);
});

let Workout;


Workout = mongoose.model("Workout", workoutSchema);


module.exports = Workout;