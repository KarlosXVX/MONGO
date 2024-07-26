
const { postCinema, getCinema } = require('../controllers/cinema');
const cinemasRouter = require('express').Router();

cinemasRouter.get('/:id', getCinema);
cinemasRouter.post('/', postCinema);

module.exports = cinemasRouter;
