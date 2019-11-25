window.onload = function() {
    renderPokemon(pokemons);
};

//Mostrar todos los pokémons//

function renderPokemon(anyArray) {
    let pokemonsDiv = document.getElementById("pokemons-caja");
    pokemonsDiv.innerHTML = `
    ${anyArray.map((pokemon) => `
    <div class="pokemon-item">
        <img src="${pokemon["img"]}" class="pokemon-img" />
        <div class="text-name">
        <h3 class="pokemon-name">${pokemon["name"]}</h3>
        </div>
        <div class="text-number">
        <p>${pokemon["num"]}</p>
        <p>${pokemon["height"]}</p>
        <p>${pokemon["weight"]}</p>
        </div>
    </div>
  `).join("")}
      `
  }

//Búsqueda por nombre//

  function getName(event) {
    event.preventDefault();
    var name = document.getElementById("poke-name").value;
    var pokemon = pokemons.find(element => {
         return element.name.includes(name);    
         //return element.name.includes(name);
         //return element.name == name;
    })
    renderPokemon([pokemon])
        /*var elemImg = document.createElement("img");
        elemImg.src = pokemon.img
        var resultsDiv = document.getElementById("pokemons-caja");
        resultsDiv.appendChild(elemImg);
        */
}



//Filtrar por Tipo//

function getType(sel) {
    var type = sel.options[sel.selectedIndex].text
    var pokemonType = pokemons.filter(element => {
     return element.type.includes(type);
    })
    renderPokemon(pokemonType)
}

// Función añadida por Claudia Ambriz para buscar 
// las evolciones de un pokemon en base a su nombre
function getEvolution() {

    let name = document.getElementById("poke-name").value;
    
    // 1.- Encontramos el pokemon que estamos buscando
    let pokemon = pokemons.find(element => {
        return element.name.includes(name);    
    })
    
    let pokemon_evolutions = []; // Nuevo arreglo para guardar los pokemons de las evoluciones
  
    // 2.- Nos traemos la lista de evoluciones desde el pokemon seleccionado
    // generando un nuevo objeto pokemon por cada evolución (forEach)
    pokemon.next_evolution.forEach(element => {
        evolution_name = element.name;  // Guardamos el nombre de la evolución en esta variable
        
        // 2.1.- encontramos el pokemon en base al nombre de la evolución 
        var pokemon_evolution = pokemons.find(element => {
            return element.name.includes(evolution_name);
        })
        // alert("Adding evolution to new array pokemon_evolutions: " + pokemon_evolution.name)
        
        //3.- agregamos el pokemon encontrado a la lista de evoluciones pokemon_evolutions
        pokemon_evolutions.push(pokemon_evolution);
    });

    //pintamos en el HTML (pantalla) la lista de los pokemones evolución del pokemon que buscamos
    renderPokemon(pokemon_evolutions)
}
//onchange