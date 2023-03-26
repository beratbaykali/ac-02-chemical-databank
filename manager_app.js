const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const periodic_table = require("./databank/periodic_table.json")
const atom_particles = require("./databank/atom_particles.json")
const chemical_applications = require("./databank/chemical_applications.json")
const chemical_analysis = require("./databank/chemical_analysis.json")


console.log("AC-01 (EVETRA Chemical Database) starting.")

function helpcommand() {
    console.log(`"/help" for commands.`)
  }

  function askQuestion() {
    rl.question('/', (answer) => {
      if (answer == "show periodic table") {
        console.log(periodic_table)
      }
      else if (answer == "show atom particles") {
        console.log(atom_particles)
      }
      else if (answer == "show chemical applications") {
        console.log(chemical_applications)
      }
      else if (answer == "show chemical analysis") {
        console.log(chemical_analysis)
      }
      else if (answer == "help") {
        console.log('\x1b[32m%s\x1b[0m', `
            AC-01 Biology Databank Help Menu v0.01

        show chemical applications - "It shows the chemical applications."
        show atom particles - "It shows the atomic particles."
        show periodic table - "It shows the periodic table."
        show chemical analysis - "It shows the chemical analysis."


Version v0.01(as published) - Made By lilend
        `)
      }
      else {
        console.log(`Data not found. "help" for commands`)
      }
      askQuestion();
    });
  }
  
setTimeout(helpcommand, 2000)
setTimeout(askQuestion, 3500);
