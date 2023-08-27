"use strict";
/**
 * 乗り物
 */
class Vehicle {
    constructor() {
        // 速度
        this.velocity = 0;
    }
    setVelocity(velocity) {
        this.velocity = velocity;
    }
    getVelocity() {
        return this.velocity;
    }
}
class Car extends Vehicle {
    constructor(velocity, color, number) {
        super();
        this.setVelocity(velocity);
        this.color = color;
        this.number = number;
    }
    showProperties() {
        console.log("color: " + this.color);
        console.log("licensePlate: " + this.number);
        console.log("velocity: " + this.getVelocity());
    }
}
const car = new Car(100, "black", "あ12-34");
car.showProperties();
// "color: black"
// "licensePlate: あ12-34"
// "velocity: 100"
const car2 = new Car(120, "red", "い56-78");
car2.showProperties();
// "color: red"
// "licensePlate: い56-78"
// "velocity: 120"
