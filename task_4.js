function ElectricDevices(name,power){
    this.name = name,
    this.power = power,
    this.IsSwitchOn = false
}


ElectricDevices.prototype.switchOn = function(){
    this.IsSwitchOn = true;
    console.log(`Your ${this.name} is switched on `);
}


ElectricDevices.prototype.switchOff = function(){
    this.IsSwitchOn = false;
    console.log(`Your ${this.name} is switched off `);
}


function Lamp(brightness,size){
    this.brightness = brightness,
    this.size = size
}


Lamp.prototype = new ElectricDevices()


Lamp.prototype.getSizeAndBrightness = function(){
    console.log(`Your ${this.name} brightness is ${this.brightness} and the size is ${this.size}`);
}


function Computer(model,yearOfRelease){
    this.model = model,
    this.yearOfRelease = yearOfRelease
}


Computer.prototype = new ElectricDevices()


Computer.prototype.getCharacteristics = function(){
    console.log(`Your ${this.name} ${this.model} was released in ${this.yearOfRelease}`)
}


const tableLamp = new Lamp(800,'small')
tableLamp.name = 'tableLamp'
tableLamp.power = 12


const laptop = new Computer('macBookAir',2022)
laptop.name = 'laptop'
laptop.power = 55


function powerCheck(device){
    let totalPower = 0;
    device.forEach(element => {
        if(element.IsSwitchOn) {
          totalPower = totalPower + element.power;
        }
      });
      return `Total power of switched on devices = ${totalPower} W`
    }


console.log(powerCheck([laptop,tableLamp]));


laptop.switchOn()
tableLamp.switchOn()


console.log(powerCheck([laptop,tableLamp]));


laptop.switchOff()


console.log(powerCheck([laptop,tableLamp]));


tableLamp.getSizeAndBrightness()
laptop.getCharacteristics()


