const readline = require("readline");

function readConsole(callback) {
    let rl = readline.createInterface(process.stdin, process.stdout);

    rl.question("Cómo te llamas?: ", function (name) {
        rl.question("Cuál es tu apellido?: ", function (surname) {
            rl.question("Cuántos años tienes?: ", function (age) {
                const userObject = {
                    name: name,
                    surname: surname,
                    age: age
                };

                callback(userObject);
                rl.close();
            });
        });
    });
}

module.exports = readConsole;