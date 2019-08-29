const { Battle } = require("../lib/battle.js");
const {
  Character,
  grassCharacter,
  Trainer
} = require("../lib/pokemon.js/index.js.js");
const { expect } = require("chai");

// test for battle object
describe("Battle", () => {
  it("Battle object test", () => {
    const trainer1 = new Trainer();
    const trainer2 = new Trainer();
    const testPoke1 = new Character("a", 15, 10);
    const testPoke2 = new Character("b", 15, 10);
    trainer1.catch(testPoke1);
    trainer2.catch(testPoke2);
    new Battle(trainer1, trainer2);
    expect(testPoke1.hitPoints).to.equal(5);
  });
  it("Check if player is alive", () => {
    const trainer1 = new Trainer();
    const trainer2 = new Trainer();
    const testPoke1 = new Character("a", 15, 20);
    const testPoke2 = new Character("b", 15, 20);
    trainer1.catch(testPoke1);
    trainer2.catch(testPoke2);
    new Battle(trainer1, trainer2);
    expect(trainer1.storage).to.eql([]);
  });
  it.only("Checks if trainer has any players left", () => {
    const trainer1 = new Trainer("john");
    const trainer2 = new Trainer();
    const testPoke1 = new Character("a", 15, 20);
    const testPoke2 = new Character("b", 15, 20);
    trainer1.catch(testPoke1);
    trainer2.catch(testPoke2);
    new Battle(trainer1, trainer2);
    expect(trainer1.storage).to.eql([]);
  });
});

// describe("Battle", () => {
//   describe.only("Battle object test", () => {
//     it("check player 1 can reduce opponents hitPoint", () => {
//       const p1 = new Character("p1", 15, 10);
//       const p2 = new Character("p2", 15);
//       console.log(p2);
//       // Battle();
//       expect(Battle()).to.equal(5);
//       console.log(p2);
//     });
//   });
//   // test for battle methods
//   describe("battleMethod() test", () => {
//     it("", () => {});
//   });
// });
