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
class Character {
  constructor(
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
    this.isAlive = true;
  }

  // Character talk method()
  talkMethod() {
    return `${this.name} made a sound of ${this.sound}`;
  }

  // Character useYourMoves method()
  useYourMoves() {
    return `${this.name} will now ${this.move}`;
  }
}

const newCharacter = new Character("Wigglytuft");

// sub-class to Character
class grassCharacter extends Character {
  constructor(name, hitPoints, attackDamage, sound, move, type, isGrass) {
    super(name, hitPoints, attackDamage, sound, move, type);
    this.isGrass = true;
  }
  grassPower() {
    return `${this.name} will destroy you with ${this.hitPoints} points accumulated`;
  }
}

// create new instance of grassyPikachu using the grassCharacter()
const grassypikachu = new grassCharacter("grassypikachu");

//Trainer object
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

// Battle object & methods : refer to battle.js

module.exports = {
  Character,
  grassCharacter,
  Trainer
};
