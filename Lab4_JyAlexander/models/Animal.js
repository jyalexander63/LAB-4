require('dotenv').config();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const conn = process.env.DB_STRING;
console.log("DB_STRING:", process.env.DB_STRING);
console.log("conn:", conn);

mongoose.connect(conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const animalSchema = new mongoose.Schema({
    Zoo: { type: String, required: true },
    ScientificName: { type: String, required: true },
    CommonName: { type: String, required: true },
    GivenName: { type: String, required: true },
    Gender: { type: String, required: true },
    DateOfBirth: { type: Date, required: true },
    Age: { type: Number, required: true },
    IsTransportable: { type: Boolean, required: true }
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;