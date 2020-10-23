function Device(name){
    this.currentPower = 0;
    this.power = undefined;
    this.deviseName = name;
    this.isON = false;
}

Device.prototype.switchON = function()
{
    this.isON = true;
    this.currentPower = this.power;
}

Device.prototype.switchOFF = function()
{
    this.isON = false;
    this.currentPower = 0;
}

Device.prototype.getInfo = function(){
    return this.currentPower + ' ' + this.power + ' ' + this.deviseName + ' ' + this.isON;
}


function Lamp(lightPower, baseType, power){
    this.lightPower = lightPower;
    this.baseType = baseType;
    this.currentPower = 0;
    this.power = power;
    this.deviseName = name;
    this.isON = false;
}

Lamp.prototype = new Device("lamp");

Lamp.prototype.printInfo = function(){
    console.log(this.currentPower, this.power, this.deviseName, this.isON, this.lightPower, this.baseType);
}


function Computer(type, hasExternalKeyboard, power){
    this.type = type;
    this.hasExternalKeyboard = hasExternalKeyboard;
    this.currentPower = 0;
    this.power = power;
    this.deviseName = name;
    this.isON = false;
}

Computer.prototype = new Device("computer");

Computer.prototype.printInfo = function(){
    console.log(this.currentPower, this.power, this.deviseName, this.isON, this.type, this.hasExternalKeyboard);
}


const tableLamp = new Lamp(3500, "E40", 60);
const bathLamp = new Lamp(4000, "E20", 40);
const myPC = new Computer("PC", true, 600);
const momsLaptop = new Computer("laptop", false, 300);

tableLamp.printInfo();
bathLamp.printInfo();
myPC.printInfo();
momsLaptop.printInfo();

tableLamp.switchON();
bathLamp.switchON();
myPC.switchON();
momsLaptop.switchON();
console.log('\n');

tableLamp.printInfo();
bathLamp.printInfo();
myPC.printInfo();
momsLaptop.printInfo();