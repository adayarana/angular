const { model, Schema } = require('mongoose');

const pokedexSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  level: {
    type: Number,
    required: true
  },
  favourite: {
    type: Boolean
  }
}, {
  timestamps: true
}).method('toJSON', function toJson() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Pokedex', pokedexSchema);