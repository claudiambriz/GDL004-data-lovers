import pokemons from '../data/pokemon/pokemon.js';
import { getType, getName } from './data.js';

renderPokemon(pokemons)

const x = (event) => {
    let typeArray = getType(pokemons, event);
    renderPokemon(typeArray)
}

const busquedaPorNombre = (event) => {
    console.log("siiiiiiiii")
    let typeArray = getName(pokemons, event);
    renderPokemon(typeArray)
}

document.getElementById("types-menu").addEventListener('change', (e) => x(e.target.value))

document.getElementsByName("pokemon-name")[0].addEventListener('change', (e) => busquedaPorNombre(e.target.value))


document.getElementById("buscar-pokemon-button").addEventListener('click', (e) => busquedaPorNombre(e.target.value))
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
        <p>${pokemon["type"]}</p>
    
        </div>
    </div>
  `).join("")}
      `
  }



  
/*/Búsqueda por nombre//

  function getName(event) {
    event.preventDefault();
    let name = document.getElementById("poke-name").value;
    let pokemon = pokemons.find(element => {
         return element.name.includes(name);    
       
    })
    renderPokemon([pokemon])
}*/

/*/Filtrar por Tipo//

function getType(sel) {
    let type = sel.options[sel.selectedIndex].text
    let pokemonType = pokemons.filter(element => {
     return element.type.includes(type);
    })
    renderPokemon(pokemonType)
}*/

// Función añadida por Claudia Ambriz para buscar 
// las evoluciones de un pokémon en base a su nombre

function getEvolution() {

    let name = document.getElementById("poke-name").value;
    
    // 1.- Encontramos el pokémon que estamos buscando
    let pokemon = pokemons.find(element => {
        return element.name.includes(name);    
    })
    
    let pokemon_evolutions = []; // Nuevo arreglo para guardar los pokémons de las evoluciones
  
    // 2.- Nos traemos la lista de evoluciones desde el pokémon seleccionado
    // generando un nuevo objeto pokémon por cada evolución (forEach)
    pokemon.next_evolution.forEach(element => {
        evolution_name = element.name;  // Guardamos el nombre de la evolución en esta variable
        
        // 2.1.- encontramos el pokemon en base al nombre de la evolución 
        let pokemon_evolution = pokemons.find(element => {
            return element.name.includes(evolution_name);
        })
        // alert("Adding evolution to new array pokémon_evolutions: " + pokémon_evolution.name)
        
        //3.- agregamos el pokémon encontrado a la lista de evoluciones pokémon_evolutions
        pokemon_evolutions.push(pokemon_evolution);
    });

    //pintamos en el HTML (pantalla) la lista de los pokemones evolución del pokemon que buscamos
    renderPokemon(pokemon_evolutions)
}