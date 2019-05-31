////////////////////////////// WIZARDS N SHIT //////////////////////////////
//////////////////the tropetastic generic battle simulator//////////////////

const soundPool = [
  "*burp*",
  "*sniff*",
  "*yawwwwwwwwn*",
  'mutters "f**ing**ting**rd***ce"',
  "what have I ever done to you?",
  "can't we be friends?"
];

const movePool = [
  "fireball",
  "frenzy",
  "freeze",
  "shard",
  "reflect",
  "blind",
  "posses",
  "negate",
  "consume",
  "rally",
  "inspire"
];

const elementPool = ["fire", "ice", "light", "void", "normal"];

//random character creation, takes only name argument
function Character(
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

const newCharacter = new Character("Wigglytuft");

// Character talk method()
Character.prototype.talkMethod = function() {
  return `${this.name} made a sound of ${this.sound}`;
};

// Character useYourMoves method()
Character.prototype.useYourMoves = function() {
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

// Trainer catchMethod() - to store more characters
Trainer.prototype.catch = function(item) {
  if (this.quantity < this.maxStorage) {
    if (
      item.hasOwnProperty(
        "name" && "hitPoints" && "attackDamage" && "sound" && "move" && "type"
      )
    ) {
      this.quantity++;
      this.storage.push(item);
    }
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
  Character,
  Trainer,
  Battle
};
