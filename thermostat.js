class Thermostat {
  constructor() {
    this.temperature = 20;
    this.maxTemp = 25;
  }

  getTemperature() {
    if (this.temperature === this.maxTemp) {
      this.max_message = ' (maximum reached'
    } else {
      this.max_message = ''
    }
    return console.log(`Temperature is ${this.temperature}${this.max_message}`);
  }

  up() {
    if(this.temperature < this.maxTemp){
      this.temperature++;
    }
  }

  down() {
    if (this.temperature > 10) {
      this.temperature--;
    }
  }

  setPowerSavingMode(boo) {
    boo ? this.maxTemp = 25 : this.maxTemp = 32;
  }

  reset() {
    this.temperature = 20;
  }

  getUsage() {
    if (this.temperature < 18) {
      return "Low-usage";
    } else if (this.temperature <= 25) {
      return "Medium-usage";
    } else {
      return "High-usage";
    }
  }
}

module.exports = Thermostat;
