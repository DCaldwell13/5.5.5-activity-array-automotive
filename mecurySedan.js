//this includes the vehicle class as a module
import Vehicle from "./vehicle.js/";
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage"); //defining the make,module,year,color, and mileage
console.log(v.make) 
class Car extends = vehicle {
    class Car extends = VehicleModule{
        constructor(make, model, year, color, mileage) {
            super(make, model, year, color, mileage);
            this.maxPassengers = 5; //setting the max number of passengers that can be inside the vehicle 
            this.passenger = 0; //setting the number of passangers currently in the car
            this.numberOfWheels = 4; //setting the number of wheels on the vehicle
            this.maxSpeed = 160; //setting the max speed  
            this.fuel = 10; //setting the amount of gallons of fuel that the cars currently has 
            this.scheduleService = false; //stating that this vehicle is not scheduled for servicing
        }

        start() {
            if (this.fuel > 0) {            //if the vehicles fuel is greater the 0 gallons the engine will start
                console.log("engine has started."); 
                return this.started = true // the engine has started because the vehilce has more then 0 gallons of fuel(true) 
            } else {
                console.log("no fuel"); // the vehicle does not have fuel
                return this.started = false; // the engine has not started because the amount of fuel inside of the car is 0 gallons
            }
        }

        loadPassenger(num) {
            if (this.passenger < this.maxPassengers) { //the number of passangers in this vehicle is less than the maximum compacity of passangers allowws
                if ((num + this.passenger) <= this.maxPassengers) { // the number of passangers in the vehicle has to be less than or equal too the compacity of passangers allowed(5)
                    this.passenger = num; //the total amount of passangers currently
                    return this.passenger;              
                } else {
                    console.log(this.model + " " + this.make + " not have enough space to take all passengers."); // if there is more than 5 passangers then it'll log "not enoungh space to take all passangers"
                }
            } else {
                console.log(this.model + " " + this.make + " is full"); 
            }
        }
        // invoking new Car, myCar.start(), myCar.loadPassangers(5), myCar.stop(), myCar.checkService()
        let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)
        myCar.start()
        myCar.loadPassenger(5)
        myCar.stop()
        myCar.checkService()
       console.log(myCar)  
 }
}