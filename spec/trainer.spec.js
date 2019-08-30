const { Trainer } = require("../lib/trainer.js");
const { expect } = require("chai");
const { Pokemon } = require("../lib/pokemon.js");

describe("instances of Trainer constructor function", () => {
  it("new instance of Trainer constructor function is an object", () => {
    const newTrainer = new Trainer();
    expect(newTrainer).to.be.an("object");
  });
  it("new instance of Trainer constructor should contain the following properties/ keys", () => {
    const newTrainer = new Trainer("John");
    expect(newTrainer).to.have.keys("name", "storage", "catchMethod");
    expect(newTrainer.name).to.equal("John");
  });
  it("new instance will have a storage property, which itself is an empty object", () => {
    const newTrainer = new Trainer();
    expect(newTrainer.storage).to.be.an("object");
  });
  it("new instance will have access to `catchMethod()`, to store pokemon to their storage", () => {
    const newTrainer = new Trainer();
    const newPokemon = new Pokemon("Felix", 0, 0, "purr", "jump", "grass");
    newTrainer.catchMethod(newPokemon);
    expect(newTrainer.storage[newPokemon.name]).to.eql(newPokemon);
  });
  it("new instance can accept multiple items from `catchMethod()`", () => {
    const newTrainer = new Trainer();
    const newPokemon1 = new Pokemon("Felix", 0, 0, "purr", "jump", "grass");
    const newPokemon2 = new Pokemon("Zizi", 0, 0, "purr", "jump", "fire");
    newTrainer.catchMethod(newPokemon1);
    newTrainer.catchMethod(newPokemon2);
    expect(Object.keys(newTrainer.storage).length).to.equal(2);
  });
});
