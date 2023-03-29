class Vehicle {
    constructor(make, model, year, color, mileage) { //defining the Vehicle properties
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }
    
   // start() {
   //     if (this.fuel > 0) {
   //         return this.started = true;
   //         console.log("engine started...!!!");
   //    } else {
   //         return this.started = false;
   //         console.log("engine cannot start...");
   //     }
   // }
    accelerate() { //conditional statments stating wether the vehicle will accelerate based on fuel amount and how fast the fuel will run out and when the fuel does run out then the console will log out of fuel
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    decelerate() { // conditional statment stating that the vehicle started then it will slow down once the vehicle starts to run out of gas and once its completely out it will log "has stopped moving" then log "out of fuel"   
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " has stopped moving");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    stop() {
        this.started = false;
    }

    drive() { //invoking driving
        accelerate();
    }
    brake() { //invoking brakes
        decelerate();
    }

    autoPark() //invoking automatic parking 
    {

    }

    autoDrive() //invoking automatic driving
    {
      
    }

    typeOfVehicle(wheels) {
        if (this.numberOfWheels == 8 && 8 == wheels) { //if the number of is 8 by 8 the this vehicle is a truck
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4 && 4 == wheels) { // if not then its a car
            console.log(this.model + " " + this.make + " is a CAr");
        } else if (this.numberOfWheels == 2 && 2 == wheels) { //and if not a car than its a Bike
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle"); // and if neither of those than the it is a unknown type of vehicle
        }
    }
}

module.exports = {
    Vehicle
}
