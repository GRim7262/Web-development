console.log("This is module");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

module.exports = {
    avg: average,
    name: "Vinal",
    repo: "Github"
}

module.exports.sirname = "Pawar";