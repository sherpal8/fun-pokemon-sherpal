const { Trainer } = require("./trainer.js");
const { Pokemon } = require("./pokemon.js");
const { Battle } = require("./battle.js");
const inquirer = require("inquirer");

function Game() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "trainer1Name",
        message: "What's Trainer 1's name?"
      },
      {
        type: "input",
        name: "trainer2Name",
        message: "What's Trainer 2's name?"
      }
    ])
    .then(answers => {
      const trainer1 = new Trainer(answers["trainer1Name"]);
      const trainer2 = new Trainer(answers["trainer2Name"]);
      console.log(`Welcome ${trainer1.name} and ${trainer2.name}`);
    });
}

Game();

module.exports = { Game };
