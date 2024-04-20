// controllers/animalController.js
const Animal = require('../models/Animal');

function loadAnimalData(req, res) {
    Animal.find({}).then(function(animalList) {
        console.log(animalList);
        res.render('animals/all-animals', {
            pageTitle: 'List of Animals',
            animals: animalList
        });
    }).catch(function(error) {
        res.status(500).send(error.message);
    });
}
/**
 * renders animal view
 * @param {*} req 
 * @param {*} res 
 */

function getAllAnimals(req, res) {
    loadAnimalData(req, res);
}

async function getEntryForm(req, res) {
    if (req.method === 'GET') {
        // Render the form page
        res.render('animals/entry-form');
    } else if (req.method === 'POST') {
        // Handle the form submission
        try {
            const newAnimal = new Animal(req.body);
            await newAnimal.save();
            res.redirect('/animals/all-animals');
        } catch (error) {
            res.status(500).send("Failed to add animal.");
        }
    }
}

async function getEditAnimal(req, res) {
    try {
        if (req.method === 'GET') {
            const animal = await Animal.findById(req.params.id);
            if (!animal) return res.status(404).send("Animal not found.");
            res.render('animals/edit-animal', { animal });
        } else if (req.method === 'POST') {
            if (req.path.includes('delete')) {
                await Animal.findByIdAndDelete(req.params.id);
            } else {
                await Animal.findByIdAndUpdate(req.params.id, req.body);
            }
            res.redirect('/animals/all-animals');
        }
    } catch (error) {
        res.status(500).send("Failed to process request.");
    }

}

module.exports = {
    getAllAnimals,
    getEntryForm,
    getEditAnimal
};
