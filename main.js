fetch('https://pokeapi.co/api/v2/pokemon/789/')
.then(respuesta => respuesta.json())
.then(pokemon => {
    let element = document.getElementById('elemento')
    element.innerHTML = `<p> Nombre: ${pokemon.name}<p><p> Pokedex ID: ${pokemon.id}<p>
    <img src='${pokemon.sprites.front_default}'><img src='${pokemon.sprites.back_default}'><p>Tipo: ${pokemon.types[0].type.name}<p><p> Peso : ${pokemon.weight}<p>`;
    console.log(pokemon)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/895/')
.then(respuesta2 => respuesta2.json())
.then(pokemon2 => {
    let element = document.getElementById('elemento2')
    element.innerHTML = `<p> Nombre: ${pokemon2.name}<p><p> Pokedex ID: ${pokemon2.id}<p>
    <img src='${pokemon2.sprites.front_default}'><img src='${pokemon2.sprites.back_default}'><p>Tipo: ${pokemon2.types[0].type.name}<p><p> Peso : ${pokemon2.weight}<p>`;
    console.log(pokemon2)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/896/')
.then(respuesta2 => respuesta2.json())
.then(pokemon2 => {
    let element = document.getElementById('elemento3')
    element.innerHTML = `<p> Nombre: ${pokemon2.name}<p><p> Pokedex ID: ${pokemon2.id}<p>
    <img src='${pokemon2.sprites.front_default}'><img src='${pokemon2.sprites.back_default}'><p>Tipo: ${pokemon2.types[0].type.name}<p><p> Peso : ${pokemon2.weight}<p>`;
    console.log(pokemon2)
})
.catch(err=>console.log(err))