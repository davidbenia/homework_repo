class Vehicle
{
    make;
    model;

    constructor(make, model)
    {
        this.make = make;
        this.model = model;
    }
}

class Car extends Vehicle
{
    year;
    owners = [];

    constructor(make, model, year)
    {
        super(make, model);
        this.year = year;
    }

    getCarInfo()
    {
        return `${this.make} ${this.model} released in ${this.year}`;
    }

    addOwner(person_object)
    {
        this.owners.push(person_object);
    }

    removeOwner(person_object)
    {
        this.owners = this.owners.filter(keep_person => keep_person !== person_object);
    }

    getOwnersCount()
    {
        return this.owners.length;
    }

    getOwnerNames()
    {
        return this.owners.map(owner => owner.fullName());
    }

    getFullInfo()
    {
        return `${this.make} ${this.model} from ${this.year}. 
        ${this.getOwnersCount()} persons own this car. These are - 
        ${this.getOwnerNames().join(", ")}.`;
    }
}

class Person
{
    name;
    surname;
    age;
    gender;
    cars = [];

    constructor(name, surname, age, gender)
    {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
    }

    fullName()
    {
        return `${this.name} ${this.surname}`;
    }

    countCars()
    {
        return this.cars.length;
    }

    buysCar(car_object)
    {
        this.cars.push(car_object);
        car_object.addOwner(this);
    }

    sellsCar(car_object)
    {
        this.cars = this.cars.filter(keep_car => keep_car !== car_object);
        car_object.removeOwner(this);
    }

    getAllCarsInfo()
    {
        return `${this.name} owns these cars: 
        ${this.cars.map(car => car.getCarInfo()).join(", ")}.`;
    }
}

// --- Testing ---

let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let ilona = new Person("Elon", "Musk", 30, "M");
let duti_picoti = new Car("BMW", "525", "1999");
let stodevianosto = new Car("Mercedes", "E190", 1991);

daniel916.buysCar(duti_picoti); // adds passed car
daniel916.buysCar(stodevianosto); // adds passed car
daniel916.sellsCar(duti_picoti); // removes passed car
ilona.buysCar(stodevianosto); // adds passed car
ilona.buysCar(duti_picoti); // adds passed car

console.log({
  daniel: {
    fullName: daniel916.fullName(),
    countCars: daniel916.countCars(),
    getAllCarsInfo: daniel916.getAllCarsInfo(),
  },
  elon: {
    fullName: ilona.fullName(),
    countCars: ilona.countCars(),
    getAllCarsInfo: ilona.getAllCarsInfo(),
  },
  duti_picoti: {
    getOwnersCount: duti_picoti.getOwnersCount(),
    getOwnerNames: duti_picoti.getOwnerNames(),
    getFullInfo: duti_picoti.getFullInfo(),
    getCarInfo: duti_picoti.getCarInfo(),
  },
  stodevianosto: {
    getOwnersCount: stodevianosto.getOwnersCount(),
    getOwnerNames: stodevianosto.getOwnerNames(),
    getFullInfo: stodevianosto.getFullInfo(),
    getCarInfo: stodevianosto.getCarInfo(),
  },
});