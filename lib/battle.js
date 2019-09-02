class Battle {
  constructor(trainer1, trainer2, pokemonNameTrainer1, pokemonNameTrainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.pokemonNameTrainer1 = pokemonNameTrainer1;
    this.pokemonNameTrainer2 = pokemonNameTrainer2;
  }

  fightMethod = function() {
    const designatedAttacker = Math.floor(Math.random() * 2) + 1;
    if (designatedAttacker === 1) {
      console.log(
        `Attacker ${this.trainer1.name} goes first. The warrior's pokemon ${this.pokemonNameTrainer1} is of type ${this.trainer1.storage[this.pokemonNameTrainer1].type}.`
      );
      console.log(
        `Defender ${this.trainer2.name}'s pokemon ${this.pokemonNameTrainer2} is of type ${this.trainer2.storage[this.pokemonNameTrainer2].type}.`
      );
      if (
        this.trainer1.storage[this.pokemonNameTrainer1].strength ===
        this.trainer2.storage[this.pokemonNameTrainer2].type
      ) {
        return console.log(
          `Attacker wins with attack damage of ${this.trainer1.storage[
            this.pokemonNameTrainer1
          ].attackDamage * 1.25}. Defender loses with hit points of ${this
            .trainer2.storage[this.pokemonNameTrainer2].hitPoints -
            this.trainer1.storage[this.pokemonNameTrainer1].attackDamage *
              1.25}`
        );
      }
      if (
        this.trainer1.storage[this.pokemonNameTrainer1].strength ===
        this.trainer2.storage[this.pokemonNameTrainer2].type
      ) {
        return console.log(
          `Defender wins with attack damage of ${this.trainer2.storage[
            this.pokemonNameTrainer2
          ].attackDamage * 1.25}. Attacker loses with hit points of ${this
            .trainer1.storage[this.pokemonNameTrainer1].hitPoints -
            this.trainer2.storage[this.pokemonNameTrainer2].attackDamage *
              1.25}`
        );
      }
    }
    if (designatedAttacker === 2) {
      console.log(
        `Attacker ${this.trainer2.name} goes first. The warrior's pokemon ${this.pokemonNameTrainer2} is of type ${this.trainer2.storage[this.pokemonNameTrainer2].type}.`
      );
      console.log(
        `Defender ${this.trainer1.name}'s pokemon ${this.pokemonNameTrainer1} is of type ${this.trainer1.storage[this.pokemonNameTrainer1].type}.`
      );
      if (
        this.trainer2.storage[this.pokemonNameTrainer2].strength ===
        this.trainer1.storage[this.pokemonNameTrainer1].type
      ) {
        return console.log(
          `Attacker wins with attack damage of ${this.trainer2.storage[
            this.pokemonNameTrainer2
          ].attackDamage * 1.25}. Defender loses with hit points of ${this
            .trainer1.storage[this.pokemonNameTrainer1].hitPoints -
            this.trainer2.storage[this.pokemonNameTrainer2].attackDamage *
              1.25}`
        );
      }
      if (
        this.trainer2.storage[this.pokemonNameTrainer2].weakness ===
        this.trainer1.storage[this.pokemonNameTrainer1].type
      ) {
        return console.log(
          `Defender wins with attack damage of ${this.trainer1.storage[
            this.pokemonNameTrainer1
          ].attackDamage * 1.25}. Attacker loses with hit points of ${this
            .trainer2.storage[this.pokemonNameTrainer2].hitPoints -
            this.trainer1.storage[this.pokemonNameTrainer1].attackDamage *
              1.25}`
        );
      }
    }
  };
}

module.exports = { Battle };
