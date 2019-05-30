const soundPool = [
  "*burp*",
  "*sniff*",
  "*yawwwwwwwwn*",
  'mutters "f**ing**ting**rd***ce"',
  "what have I ever done to you?",
  "can't we be friends?"
];

const movePool = ["flick", "glare", "stinks-out", "low-blow"];

const elementPool = ["grass", "fire", "wind"];

//random character creation, takes only name argument
function Pokemon(
  name,
  hitPoints = Math.floor(Math.random() * Math.floor(20) + 1),
  attackDamage = Math.floor(Math.random() * Math.floor(20) + 1),
  sound = soundPool[Math.floor(Math.random() * soundPool.length)],
  move = movePool[Math.floor(Math.random() * movePool.length)],
  type = elementPool[Math.floor(Math.random() * elementPool.length)]
) {
  this.name = name;
  this.hitPoints = hitPoints;
  this.attackDamage = attackDamage;
  this.sound = sound;
  this.move = move;
  this.type = type;
}

const newCharacter = new Pokemon("Wigglytuft");

// Pokemon talk method()
Pokemon.prototype.talkMethod = function() {
  return `${this.name} made a sound of ${this.sound}`;
};

// Pokemon useYourMoves method()
Pokemon.prototype.useYourMoves = function() {
  return `${this.name} will now ${this.move}`;
};

// Trainer object
function Trainer(name) {
  this.name = name;
  this.storage = [];
  this.quantity = 0;
  this.maxStorage = 6;
}

const trainer1 = new Trainer("Ralph");

// Trainer catchMethod() - to store more pokemon
Trainer.prototype.catch = function(item) {
  if (this.quantity < this.maxStorage) {
    this.quantity++;
    this.storage.push(item);
  }
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
