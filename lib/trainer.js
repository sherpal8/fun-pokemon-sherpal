class Trainer {
  constructor(name) {
    this.name = name;
    this.storage = {};
  }
  catchMethod = function(newPokemon) {
    this.storage[newPokemon.name] = newPokemon;
    return this.storage;
  };
}

module.exports = { Trainer };
