const { Pokemon, Trainer, Battle } = require("../index.js");
const { expect } = require("chai");

describe("Pokemon", () => {
  // test for pokemon object
  describe("Pokemon object", () => {
    it("instance of Pokemon has correct properties", () => {
      const charizard = new Pokemon();
      console.log(charizard);
      expect(charizard).to.have.keys(
        "name",
        "hitPoints",
        "attackDamage",
        "sound",
        "move",
        "type"
      );
    });
    xit("instance of second Pokemon assigned with new values", () => {
      // const charizard = new Pokemon();
      const bulbasaur = new Pokemon(
        "bulbasaur",
        12,
        14,
        "purr",
        "fly",
        "strong"
      );
      expect(bulbasaur).to.equal({
        name: "bulbasaur",
        hitPoints: 12,
        attackDamage: 14,
        sound: "purr",
        move: "fly",
        type: "strong"
      });
    });
  });
  // test Pokemon methods
  describe("to test Pokemon method()", () => {
    // test talkMethod()
    it("Pokemon can make sound i.e. Pokemon.prototype.talkMethod()", () => {
      const charizard = new Pokemon();
      // const bulbasaur = new Pokemon();
      expect(charizard.talkMethod()).to.equal("charizard made a sound of roar");
    });
    // test useYourMoves()
    it("Pokemon can move i.e. Pokemon.prototype.useYourMoves()", () => {
      const charizard = new Pokemon();
      // const bulbasaur = new Pokemon();
      expect(charizard.useYourMoves()).to.equal("charizard will now bite");
    });
  });
  // test for trainer object
  describe("Trainer object", () => {
    it("", () => {});
  });
  // test for trainer methods
  describe("trainerMethod methods()", () => {
    it("", () => {});
  });
  // test for battle object
  describe("Battle object", () => {
    it("", () => {});
  });
  // test for battle methods
  describe("battleMethod methods", () => {
    it("", () => {});
  });
});
