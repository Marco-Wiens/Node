class Pokemon{
    constructor(nombre, habilidades, imagen){
        this.nombre = nombre;
        this.habilidades = habilidades;
        this.imagen = imagen;
    }
} 

async function getPokemon(){
    let url = "https://pokeapi.co/api/v2/pokemon/"+document.getElementById("nombre").value.toString().toLocaleLowerCase();

    let params = {
        headers: {"Content-type": "application/json; charset = UTF-8"},
        method: "GET"
    };

    try{
        let data = await fetch(url, params);
        let result = await data.json();

        console.log(result.sprites.front_default);


        document.getElementById("pokemon").textContent = document.getElementById("nombre").value.toString().toLocaleUpperCase();
        document.getElementById("imagenPokemon").setAttribute("src" , result.sprites.front_default);
        console.log(document.getElementById("pokemon").value);
        let habilidades = [];
        result.abilities.forEach((habilidad) =>
           habilidades.push("<tr><td> " + habilidad.ability.name + "</td></tr>")
        );
        document.getElementById("id_abs").innerHTML = habilidades.join("");

        document.getElementById("card").style.visibility = "visible";
    
    }catch(error){
        console.log(error);
        alert("Porfavor introduzca un pokemon correcto");
    }
}