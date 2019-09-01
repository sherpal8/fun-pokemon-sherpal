const { Pokemon } = require("../lib/pokemon.js");
const { expect } = require("chai");

describe("Instances of Pokemon constructor function", () => {
  it("instance of Pokemon is a new object with correct properties", () => {
    const newPokemon = new Pokemon();
    expect(newPokemon).to.be.an("object");
    expect(newPokemon).to.have.keys(
      "name",
      "hitPoints",
      "attackDamage",
      "sound",
      "move",
      "type",
      "talkMethod",
      "useYourMove"
    );
  });
  it("new instance of Pokemon() i.e. the object accepts arguments as values to its keys/ properties", () => {
    const newPokemon = new Pokemon("Felix", 0, 0, "purr", "jump", "fire");
    expect(newPokemon.name).to.equal("Felix");
    expect(newPokemon.hitPoints).to.equal(0);
    expect(newPokemon.attackDamage).to.equal(0);
    expect(newPokemon.sound).to.equal("purr");
    expect(newPokemon.move).to.equal("jump");
    expect(newPokemon.type).to.equal("fire");
  });
  it("new instance of Pokemon() defaults to type normal if type given as argument is not fire/ grass/ water", () => {
    const newPokemon = new Pokemon("Felix", 0, 0, "purr", "jump", "galactic");
    expect(newPokemon.type).to.equal("normal");
  });
  it("new instance will have different strenghth and weakness depending on type", () => {
    const newPokemon = new Pokemon("Felix", 0, 0, "purr", "jump", "fire");
    expect(newPokemon.strength).to.equal("grass");
    expect(newPokemon.weakness).to.equal("water");
  });
  it("new instance can invoke prototype method of `talkMethod()`", () => {
    const newPokemon = new Pokemon("Felix", 0, 0, "purr", "jump", "grass");
    expect(newPokemon.talkMethod()).to.equal("Felix just made a sound of purr");
  });
  it("new instance can invoke prototype method of `useYourMove()`", () => {
    const newPokemon = new Pokemon("Felix", 0, 0, "purr", "jump", "fire");
    expect(newPokemon.useYourMove()).to.equal("Felix just made a move of jump");
  });
});
