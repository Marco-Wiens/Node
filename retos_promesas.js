// RETO 1

// console.log("Mensaje 1");

// setTimeout(function(){
//     console.log("Mensaje 2");
//     console.log("Mensaje 3");
// }, 3000);


// RETO 2
// const fs = require("fs");
var fsp = require('fs/promises');


// function writeAndRead() {
//     let obj = {
//         name: "Marco",
//         surname: "fernandez",
//         age: 0
//     }
//     let jsonData = JSON.stringify(obj);

//     fsp.writeFile("objeto.json", jsonData)
//     .then( () => {
//         return fsp.readFile("objeto.json", "utf-8");
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }

// writeAndRead();
    


// RETO 3
const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);


function pregunta(pregunta) {
    const question = new Promise((resolve, reject) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question(pregunta, (respuesta) => {
        resolve(respuesta);
        rl.close();
      });
    });
    return question;
}

async function readConsole(callback) {
    
    try{
        let obj = {};

        obj.name = await pregunta("Cómo te llamas? ");
        obj.surname = await pregunta("Cuál es tu apellido? ");
        obj.age = await pregunta("Cuántos años tienes? ");


        await fsp.writeFile("objeto.json", JSON.stringify(obj))


        callback(await fsp.readFile("objeto.json", "utf-8"));
    }catch(err){
        callback(err);
    }
}

readConsole(console.log)






