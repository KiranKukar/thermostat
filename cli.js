const Thermostat = require("./thermostat");
const readline = require('readline');

const thermostat = new Thermostat

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const tempController = () => {
  rl.question('Enter command > ', (change) => {
    switch (change) {
      case 'up':
        thermostat.up();
        break;
      case 'down':
        thermostat.down();
        break;
      case 'psm on':
        thermostat.setPowerSavingMode(true);
        break;
      case 'psm off':
        thermostat.setPowerSavingMode(false);
        break;
      case 'reset':
        thermostat.reset();
        break;
      case 'usage':
        console.log(thermostat.getUsage());
        break;
      case 'off':
        return console.log("Thanks for using our thermostat");
    }
    console.log(thermostat.getTemperature());
    tempController()
  });
};

tempController()