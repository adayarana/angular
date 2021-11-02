const { Router } = require('express');
const {
  getApi,
  getAllPokemons,
  createPokemon,
  getById,
  updatePokemon,
  deletePokemon,
  deleteAllPokemons
} = require('../controllers/pokedex.controller');

const routes = Router();

routes
  .route('/')
  .get(getApi);

routes
  .route('/favourites')
  .get(getAllPokemons)
  .post(createPokemon)
  .delete(deleteAllPokemons);

routes
  .route('/favourites/:id')
  .get(getById)
  .put(updatePokemon)
  .delete(deletePokemon);

module.exports = routes;