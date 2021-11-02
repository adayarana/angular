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
  .route('/pokedex')
  .get(getAllPokemons)
  .post(createPokemon)
  .delete(deleteAllPokemons);

routes
  .route('/pokedex/:id')
  .get(getById)
  .put(updatePokemon)
  .delete(deletePokemon);

module.exports = routes;