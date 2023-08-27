/**
 * 乗り物
 */
class Vehicle {
    // 速度
    private velocity: number = 0;

    protected setVelocity(velocity: number): void {
        this.velocity = velocity;
    }

    protected getVelocity(): number {
        return this.velocity;
    }
}

class Car extends Vehicle {
    private color: string;
    private number: string;

    constructor(velocity: number, color: string, number: string) {
        super();
        this.setVelocity(velocity)
        this.color = color;
        this.number = number;
    }

    public showProperties(): void {
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
