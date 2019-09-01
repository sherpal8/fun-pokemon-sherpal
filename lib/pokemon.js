class Pokemon {
  constructor(name, hitPoints, attackDamage, sound, move, type) {
    const acceptableTypes = ["grass", "fire", "water"];
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.sound = sound;
    this.move = move;
    this.type = acceptableTypes.includes(type) ? type : "normal";
    if (this.type == "fire") {
      this.strength = "grass";
      this.weakness = "water";
    }
    if (this.type == "grass") {
      this.strength = "water";
      this.weakness = "fire";
    }
    if (this.type == "water") {
      this.strength = "fire";
      this.weakness = "water";
    }
  }
  talkMethod = function() {
    return `${this.name} just made a sound of ${this.sound}`;
  };
  useYourMove = function() {
    return `${this.name} just made a move of ${this.move}`;
  };
}

module.exports = { Pokemon };
