let fs = require('fs');

fs.open('mynewFile2.txt', 'w', function (err, file){
    if (err) throw err;
    console.log('Saved!');
});