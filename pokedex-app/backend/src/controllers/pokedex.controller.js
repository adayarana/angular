const axios = require('axios');
const chalk = require('chalk');
const debug = require('debug')('server:coinController');
const Pokedex = require('../models/pokedex.model');

function controller() {
  const getApi = async (req, res) => {
    await axios.get(process.env.API_URL)
      .then((response) => {
        res.json(response);
        debug(`${chalk.green(response)}`);
      })
      .catch((error) => {
        res.status(500);
        res.send(error);
        debug(`${chalk.red(error)}`);
      });
  };

  const getAllPokemons = async (req, res) => {
    try {
      const pokemons = await Pokedex.find(req.query);
      res.json(pokemons);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const createPokemon = async (req, res) => {
    try {
      const newPokemon = await Pokedex.create(req.body);
      res.json(newPokemon);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const getById = async (req, res) => {
    const { id } = req.params;
    try {
      const pokemon = await Pokedex.findById(id);
      res.json(pokemon);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const updatePokemon = async (req, res) => {
    const { id } = req.params;
    try {
      const pokemon = await Pokedex.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true, useFindAndModify: false }
      );
      res.json(pokemon);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const deletePokemon = async (req, res) => {
    const { id } = req.params;
    try {
      await Pokedex.findByIdAndDelete(id);
      res.status(204);
      res.send();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const deleteAllPokemons = async (req, res) => {
    try {
      await Pokedex.deleteMany(req.query);
      res.status(204);
      res.send();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  return {
    getApi,
    getAllPokemons,
    createPokemon,
    getById,
    updatePokemon,
    deletePokemon,
    deleteAllPokemons
  };
}

module.exports = controller();