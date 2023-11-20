
const readline = require("readline");


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

        callback(obj);
    }catch(err){
        callback(err);
    }
}

module.exports = readConsole;