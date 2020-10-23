class Device{
    constructor(name){
        this.currentPower = 0;
        this.power = undefined;
        this.deviseName = name;
        this.isON = false;
    }
    switchON()
    {
        this.isON = true;
        this.currentPower = this.power;
    }

    switchOFF()
    {
        this.isON = false;
        this.currentPower = 0;
    }

    printInfo(){
        return this.currentPower + ' ' + this.power + ' ' + this.deviseName + ' ' + this.isON;
    }
}

class Lamp extends Device{
    constructor(lightPower, baseType, power){
        super("Lamp");
        this.lightPower = lightPower;
        this.baseType = baseType;
        super.power = power;
    }

    printInfo(){
        console.log(super.printInfo(), this.lightPower, this.baseType);
    }
}

class Computer extends Device{
    constructor(type, hasExternalKeyboard, power){
        super("Computer")
        this.type = type;
        this.hasExternalKeyboard = hasExternalKeyboard;
        super.power = power;
    }

    printInfo(){
        console.log(super.printInfo(), this.type, this.hasExternalKeyboard);
    }
}

let tableLamp = new Lamp(3500, "E40", 60);
let bathLamp = new Lamp(4000, "E20", 40);
let myPC = new Computer("PC", true, 600);
let momsLaptop = new Computer("laptop", false, 300);

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