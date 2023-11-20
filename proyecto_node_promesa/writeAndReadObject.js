// const fs = require("fs");
var fsp = require('fs/promises');

function writeAndRead(path, obj) {
    let jsonData = JSON.stringify(obj);

    fsp.writeFile(path, jsonData)
    .then( () => {
        return fsp.readFile(path, "utf-8");
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = writeAndRead;