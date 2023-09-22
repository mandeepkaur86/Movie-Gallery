const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    poster: {
        type: String,
        default: 'https://coltchronicle.org/wp-content/uploads/2022/03/movies-for-newspaper.jpeg'
    },
    year:{
        type: String,
        required: true
    },
    director:{
        type: String,
        requried: true,
    },
    genre: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Movie', movieSchema)