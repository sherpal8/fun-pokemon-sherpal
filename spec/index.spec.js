const { Character, Trainer, Battle } = require("../index.js");
const { expect } = require("chai");

describe("Character", () => {
  // test for character object
  describe("Character object", () => {
    it("instance of Character has correct properties", () => {
      const charizard = new Character();
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
  // test Character methods
  describe("to test Character method()", () => {
    // test talkMethod()
    it("Character can make sound i.e. Character.prototype.talkMethod()", () => {
      const charizard = new Character(
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
    it("Character can move i.e. Character.prototype.useYourMoves()", () => {
      const charizard = new Character(
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
  describe("Trainer object", () => {
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
      const trainer1 = new Trainer();
      const testPoke = new Character("a");
      trainer1.catch(testPoke);
      expect(trainer1.storage).to.eql([testPoke]);
    });
    it("checks for character keys when created, rejects any invalid characters", () => {
      const trainer1 = new Trainer();
      const charizard = new Character(
        "charizard",
        10,
        15,
        "purr",
        "bite",
        "normal"
      );
      trainer1.catch(charizard);
      expect(trainer1.storage).to.eql([charizard]);
    });

    it("Check that max storage not breached", () => {
      const trainer1 = new Trainer();
      const a = new Character(),
        b = new Character(),
        c = new Character(),
        d = new Character(),
        e = new Character(),
        f = new Character(),
        g = new Character(),
        h = new Character();
      trainer1.catch(a);
      trainer1.catch(b);
      trainer1.catch(c);
      trainer1.catch(d);
      trainer1.catch(e);
      trainer1.catch(f);
      trainer1.catch(g);
      trainer1.catch(h);
      expect(trainer1.storage).to.eql([a, b, c, d, e, f]);
    });
    it("Check that quantity reflects number of items", () => {
      const trainer1 = new Trainer();
      const a = new Character(),
        b = new Character();
      trainer1.catch(a);
      trainer1.catch(b);
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
