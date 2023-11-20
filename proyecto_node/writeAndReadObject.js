const fs = require("fs");

function writeAndRead(path, obj) {
    let jsonData = JSON.stringify(obj);

    fs.writeFile(path, jsonData, function (err) {
        if (err) {
            console.log(err);
        } else {
            fs.readFile(path, "utf-8", function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
}

module.exports = writeAndRead;