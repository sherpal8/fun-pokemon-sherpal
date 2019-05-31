const { Character, grassCharacter, Trainer } = require("./index");

// Battle object
class Battle {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    {
      this.trainer1.storage[0].hitPoints -= this.trainer2.storage[0].attackDamage;
    }
    console.log(
      `${this.trainer1.storage[0].name} has dealt a ${
        this.trainer1.storage[0].attackDamage
      } point damage to ${this.trainer2.storage[0].name}`
    );
    if (this.trainer1.storage[0].hitPoints < 1) {
      this.trainer1.storage.splice(0, 1);
    }
    if (this.trainer1.storage.length === 0) {
      console.log(`Game over ${this.trainer1.name}`);
    }
  }
  // battle method
  // isAlive() {
  //   if (this.trainer1.storage[0].hitPoints < 1) {
  //     this.trainer1.storage[0].splice(0, 1);
  //   }
  // }
}

module.exports = { Battle };
