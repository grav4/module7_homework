class ElectricDevices{
    constructor(name,power){
        this.name = name,
        this.power = power,
        this.isSwithOn = false
    }
    switchOn() {
        this.isSwitchOn = true;
        console.log(`Your ${this.name} is switched on `);
    }
    switchOff() {
        this.isSwitchOn = false;
        console.log(`Your ${this.name} is switched off `);
    }
}


class Lamp extends ElectricDevices{
    constructor(name, power, brightness, size){
        super(name, power);
        this.brightness = brightness,
        this.size = size
    }
    getSizeAndBrightness(){
        console.log(`Your ${this.name} brightness is ${this.brightness} and the size is ${this.size}`);
    }
}


class Computer extends ElectricDevices{
    constructor(name, power, model, yearOfRelease){
        super(name,power)
        this.model = model,
        this.yearOfRelease = yearOfRelease
    }
    getCharacteristics(){
        console.log(`Your ${this.name} ${this.model} was released in ${this.yearOfRelease}`);
    }
}


const tableLamp = new Lamp('tableLamp',12,800,'small')
const laptop = new Computer('laptop',55,'macBookAir',2022)



function powerCheck(device){
    let totalPower = 0;
    device.forEach(element => {
        if(element.isSwitchOn) {
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