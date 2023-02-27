const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
        city: 'Los Angeles',
        country: 'USA' 
    }
};

// console.log(player.address.city);

const {name, club, address: {city}} = player;
// console.log(`${name} plays for ${club} and lives in ${city}`);
console.log(`${name} lives in ${city}`);