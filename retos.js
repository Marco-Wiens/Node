// RETO 1

// console.log("Mensaje 1");

// setTimeout(function(){
//     console.log("Mensaje 2");
//     console.log("Mensaje 3");
// }, 3000);


// RETO 2
const fs = require("fs");

// let obj = {
//     name: "Marco",
//     surname: "fernandez",
//     age: 0
// }

// fs.writeFile("objeto.json", JSON.stringify(obj), (err) => { 
//     if (err) 
//       console.log(err); 
//     else { 
//         console.log("File written successfully\n"); 
//         console.log("The written has the following contents:"); 
//         fs.readFile("objeto.json", 'utf-8',(err, data) => {
//             if (err) throw err;
//             console.log(data)
            
//         }); 
//     }
// } );

// RETO 3
const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);



rl.question("Cómo te llamas? ", function(nombre){
    rl.question("Cuál es tu apellido? ", function(apellido){
        rl.question("Cuántos años tienes? ", function(edad){

            let obj = {
                name: nombre,
                surname: apellido,
                age: edad
            }

            let jsonData = JSON.stringify(obj);

            fs.writeFile("objeto.json",jsonData, function(err) {
                if (err) {
                    console.log(err);
                    rl.close();
                } else {
                    
                    fs.readFile("objeto.json", 'utf-8', function(err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(data);
                        }

                        rl.close();
                    });
                }
            });
        });
    });
});






