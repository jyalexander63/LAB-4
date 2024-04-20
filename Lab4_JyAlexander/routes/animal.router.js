const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animal.controller');

router.get('/all-animals', animalController.getAllAnimals);
router.get('/entry-form', animalController.getEntryForm);
router.get('/edit-animal', animalController.getEditAnimal);

router.post('/entry-form', animalController.getEntryForm);
router.post('/edit-animal', animalController.getEditAnimal);

module.exports = router;