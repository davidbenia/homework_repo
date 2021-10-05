function Car(make, model, year, owners=[])
{
    this.make = make;
    this.model = model;
    this.year = year;
    this.owners = owners;

    this.getCarInfo = () =>
    {
        return (this.make + " " + this.model + " released in " + this.year);
    }

    this.addOwner = (owner) =>
    {
        this.owners.push(owner);
    }

    this.removeOwner = (owner) =>
    {
        this.owners.splice(this.owners.indexOf(owner), 1);
    }

    this.getOwnersCount = () =>
    {
        return (this.owners.length);
    }
    
    this.getOwnerNames = () =>
    {
        let names_string = "";

        this.owners.forEach(person => 
            {
                if(this.owners.indexOf(person) == (this.owners.length - 1))
                {
                    names_string += person.fullName() + ".";
                }
                else
                {
                    names_string += person.fullName() + ", ";
                }
            }
        );

        return names_string;
    }

    this.getFullInfo = () =>
    {
        return (
            this.make + 
            " " + 
            this.model + 
            " from " + 
            this.year + 
            ". " + 
            this.getOwnersCount() + 
            " person owns this car. These are - " + 
            this.getOwnerNames()
        );
    }
}

function Person(name, surname, age, gender, cars=[])
{
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars;

    this.fullName = () =>
    {
        return (this.name + " " + this.surname);
    }

    this.countCars = () =>
    {
        return (this.cars.length);
    }

    this.buysCar = (car) =>
    {
        this.cars.push(car);
        car.owners.push(this);
    }

    this.sellsCar = (car) =>
    {
        this.cars.splice(this.cars.indexOf(car), 1);
        car.owners.splice(car.owners.indexOf(this), 1);
    }

    this.getAllCarsInfo = () =>
    {
        let cars_string = "";

        this.cars.forEach(car => 
            {
                if(this.cars.indexOf(car) == (this.cars.length - 1))
                {
                    cars_string += car.getCarInfo() + ".";
                }
                else
                {
                    cars_string += car.getCarInfo() + ", ";
                }
            }
        );

        return (
            this.name + 
            " owns these cars: " + 
            cars_string
        );
    }
}

// Testing //

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