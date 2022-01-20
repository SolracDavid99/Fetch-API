
function buscar(){
    
    var numPokemon = document.getElementById("entrada").value;

    fetch('https://pokeapi.co/api/v2/pokemon/'+ numPokemon)
    .then(respuesta => respuesta.json())
    .then(pokemon => {
        let element = document.getElementById('elemento')
        element.innerHTML = `<p> Nombre: ${pokemon.name}<p><p> Pokedex ID: ${pokemon.id}<p>
        <img src='${pokemon.sprites.front_default}'><img src='${pokemon.sprites.back_default}'><p>Tipo: ${pokemon.types[0].type.name}<p><p> Peso : ${pokemon.weight}<p>`;
        console.log(pokemon)
    })
    .catch(err=>console.log(err))
}
