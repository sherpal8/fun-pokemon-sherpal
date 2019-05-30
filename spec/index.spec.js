const { Pokemon, Trainer, Battle } = require("../index.js");
const { expect } = require("chai");

describe("Pokemon", () => {
  // test for pokemon object
  describe("Pokemon object", () => {
    it("instance of Pokemon has correct properties", () => {
      const charizard = new Pokemon();
      expect(charizard).to.have.keys(
        "name",
        "hitPoints",
        "attackDamage",
        "sound",
        "move",
        "type"
      );
    });
  });
  // test Pokemon methods
  describe("to test Pokemon method()", () => {
    // test talkMethod()
    it("Pokemon can make sound i.e. Pokemon.prototype.talkMethod()", () => {
      const charizard = new Pokemon(
        "charizard",
        10,
        15,
        "purr",
        "bite",
        "normal"
      );
      expect(charizard.talkMethod()).to.eql("charizard made a sound of purr");
    });
    // test useYourMoves()
    it("Pokemon can move i.e. Pokemon.prototype.useYourMoves()", () => {
      const charizard = new Pokemon(
        "charizard",
        10,
        15,
        "purr",
        "bite",
        "normal"
      );
      expect(charizard.useYourMoves()).to.equal("charizard will now bite");
    });
  });
  // test for trainer object
  describe.only("Trainer object", () => {
    it("Check that trainer has key properties", () => {
      const trainer1 = new Trainer("trainer1");
      expect(trainer1).to.have.keys(
        "name",
        "storage",
        "quantity",
        "maxStorage"
      );
    });
    it("Check that trainer has catch method", () => {
      const trainer1 = new Trainer("pikachu");
      trainer1.catch("apple");
      expect(trainer1.storage).to.eql(["apple"]);
    });
    it("Check that max storage not breached", () => {
      const trainer1 = new Trainer("pikachu");
      trainer1.catch("apple");
      trainer1.catch("orange");
      trainer1.catch("berry");
      expect(trainer1.storage).to.eql(["apple", "orange"]);
    });
    it("Check that quantity reflects number of items", () => {
      const trainer1 = new Trainer("pikachu");
      trainer1.catch("apple");
      trainer1.catch("orange");
      expect(trainer1.quantity).to.equal(2);
    });
  });
  // test for battle object
  describe("Battle object test", () => {
    it("", () => {});
  });
  // test for battle methods
  describe("battleMethod test", () => {
    it("", () => {});
  });
});
