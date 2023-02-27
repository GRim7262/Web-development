// Inserting data in mongo db
use harrykart

db.items.insertOne({
    name: "Samsung 30s",
    price: "22000",
    rating: 4.5,
    qty: 233,
    sold: 98
});

db.items.insertMany([{
    name: "Samsung 30s",
    price: "22000",
    rating: 4.5,
    qty: 233,
    sold: 98
}, {
    name: "Moto E3",
    price: "15000",
    rating: 2.5,
    qty: 33,
    sold: 48
}, {
    name: "Nokia 3310",
    price: "10000",
    rating: 5.0,
    qty: 5,
    sold: 980,
    isBig: true
}]);