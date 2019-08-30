const { Battle } = require("../lib/battle.js");
const { Pokemon } = require("../lib/pokemon.js");
const { Trainer } = require("../lib/trainer.js");
const { expect } = require("chai");

describe("Instances of Battle constructor function", () => {
  it("instance of new battle from the Battle() constructor which contains 2 different trainers", () => {
    const trainer1 = new Trainer();
    const trainer2 = new Trainer();
    const newBattle = new Battle(trainer1, trainer2);
    expect(newBattle.trainer1).to.equal(trainer1);
    expect(newBattle.trainer2).to.equal(trainer2);
  });
  it("instance of new battle should have names of pokemons that each of the trainer wishes to use for battle", () => {
    const trainer1 = new Trainer();
    const trainer2 = new Trainer();
    const newPokemon1 = new Pokemon("Felix", 0, 0, "purr", "jump", "fire");
    const newPokemon2 = new Pokemon("Zizi", 0, 0, "woof", "fly", "grass");
    trainer1.catchMethod(newPokemon1);
    trainer2.catchMethod(newPokemon2);
    const pokemonNameTrainer1 = Object.keys(trainer1.storage)[0]; // 'Felix'
    const pokemonNameTrainer2 = Object.keys(trainer2.storage)[0]; // 'Zizi'
    const newBattle = new Battle(
      trainer1,
      trainer2,
      pokemonNameTrainer1,
      pokemonNameTrainer2
    );
    expect(newBattle.pokemonNameTrainer1).to.equal("Felix");
    expect(newBattle.pokemonNameTrainer2).to.equal("Zizi");
  });
  it("instance of new battle should have access the `fightMethod()` method", () => {
    const newBattle = new Battle();
    expect(newBattle.fightMethod).to.be.a("function");
  });
  it("when the `fightMethod()` invoked, it will return final fight outcome as a string", () => {
    const trainer1 = new Trainer("John");
    const trainer2 = new Trainer("Jane");
    const newPokemon1 = new Pokemon("Felix", 10, 10, "purr", "jump", "fire");
    const newPokemon2 = new Pokemon("Zizi", 10, 10, "woof", "fly", "grass");
    trainer1.catchMethod(newPokemon1);
    trainer2.catchMethod(newPokemon2);
    const newBattle = new Battle(trainer1, trainer2, "Felix", "Zizi");
    const fightOutcome = newBattle.fightMethod();
    expect(typeof fightOutcome).to.equal("string");
  });
});
