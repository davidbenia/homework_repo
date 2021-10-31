function createLifePrototype(scale, environment, energy_prod, consciousness)
{
    return {
        scale: scale,
        environment: environment,
        energy_prod: energy_prod,
        consciousness: consciousness
    }
}

function createLife(life_prototype, name, mass, height, length, width, structure, skin, orientation, movement, communication)
{
    let prototype = Object.create(life_prototype);
    let life = Object.assign(prototype, behavior_prototype);

    life.name = name;
    life.mass = mass;
    life.height = height;
    life.length = length;
    life.width = width;
    life.structure = structure;
    life.skin = skin;
    life.orientation = orientation;
    life.movement = movement;
    life.communication = communication;

    return life;
}

const behavior_prototype =
{
    describe()
    {
        volume = this.height * this.length * this.width;

        console.log(`\n
        Name: ${this.name}\n
        Type: ${this.scale}\n
        Mass: ${this.mass} grams\n
        Volume: ${volume} cubic centimeters\n
        Structure: ${this.structure} covered in ${this.skin}\n
        Environment: ${this.environment}\n
        Orientation: ${this.orientation}\n
        Energy: ${this.energy_prod}\n
        Consciousness: ${this.consciousness}\n
            \n`);
    },

    move()
    {
        switch(this.movement)
        {
            case "spore/pollen":
                console.log(`\n${this.name} starts spreading it's spores/pollen!`);
                break;
            
            case "swim":
                console.log(`\n${this.name} starts swimming!`);
                break;
            
            case "fly":
                console.log(`\n${this.name} starts flying!`);
                break;

            case "locomotion":
                console.log(`\n${this.name} starts moving!`);
                break;
            
            default:
                console.log(new Error("Unknown movement method"));
        }
    },

    talk()
    {
        switch(this.communication)
        {
            case "root":
                console.log(`\n${this.name} sends signals to describe changes in environment!`);
                break;
            
            case "motion":
                console.log(`\n${this.name} performs a mating dance!`);
                break;
            
            case "sound":
                console.log(`\n${this.name} makes a playful sound!`);
                break;
            
            default:
                console.log(new Error("Unknown communication method"));
        }
    }
}

// ---- TESTING ----

let ant = createLife(createLifePrototype("insect", "land", "consumes complex structures", "sensory automation"), "Ant", 0.01, 0.5, 1, 0.5, "exoskeleton", "skin", "visual", "locomotion", "motion");
let flower = createLife(createLifePrototype("plant", "land", "photosynthesis", "sensory automation"), "Datura", 500, 10, 10, 10, "simple cellular", "fibers", "wind", "spore/pollen", "root");
let fish = createLife(createLifePrototype("animal", "water", "consumes complex structures", "instinct and basic thoughts"), "Fish", 200, 5, 30, 1, "endoskeleton", "scales", "visual", "swim", "motion");;
let turtle = createLife(createLifePrototype("animal", "water", "consumes complex structures", "instinct and basic thoughts"), "Turtle", 300000, 30, 150, 70, "shell-extended endoskeleton", "skin", "visual", "locomotion", "sound");;
let human = createLife(createLifePrototype("animal", "land", "consumes complex structures", "fully conscious"), "Human", 70000, 180, 15, 30, "endoskeleton", "skin", "visual", "locomotion", "sound");

ant.describe()
ant.move()
ant.talk()

flower.describe()
flower.move()
flower.talk()

fish.describe()
fish.move()
fish.talk()

turtle.describe()
turtle.move()
turtle.talk()

human.describe()
human.move()
human.talk()