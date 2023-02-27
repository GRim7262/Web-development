const student = {
    name: "kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const {name, age, projects: {diceGame}} = student;
console.log(`${name} is ${age} years old and built ${diceGame}`);