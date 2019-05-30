// Pokemon objects & key-value details
const Pokemon = function() {
  this.name = "charizard";
  this.hitPoints = 11;
  this.attackDamage = 14;
  this.sound = "roar";
  this.move = "bite";
  this.type = "normal"; // can also be a type with strengths or weaknesses
};

// Pokemon talk method()
Pokemon.prototype.talkMethod = function() {
  return `${this.name} made a sound of ${this.sound}`;
};

// Pokemon useYourMoves method()
Pokemon.prototype.useYourMoves = function() {
  return `${this.name} will now ${this.move}`;
};

// Trainer objects
const Trainer = function() {};

// Trainer method()
const trainerMethod = {
  trainerMethod1: function() {},
  trainerMethod2: function() {},
  trainerMethod3: function() {}
};

// Battle object
const Battle = function() {};

// Battle method()
const battleMethod = {
  battleMethod1: function() {},
  battleMethod1: function() {}
};

module.exports = {
  Pokemon,
  Trainer,
  Battle
};
