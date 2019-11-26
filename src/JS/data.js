//Filtrar por Tipo//

export function getType(sel, evento) {
    let pokemonType = sel.filter(element => {
        for (let i = 0; i < element.type.length; i++) {
            if (element.type[i] === evento) {
                return element
            }
        }
    })
    return pokemonType
}

//Búsqueda por nombre//

export function getName(pokemons, event) {
    //event.preventDefault();
    //let name = document.getElementById("poke-name").value;
    console.log(event)
    let pokemon = pokemons.filter(element => {
        return element.name.includes(event);

    })
    return pokemon
        //renderPokemon([pokemon])
}

export function getEvolution(pokemons, name) {
        // 1.- Encontramos el pokémon que estamos buscando
      let pokemon = pokemons.find(element => {
           return element.name.includes(name);    
    })
      let pokemon_evolutions = []; // Nuevo arreglo para guardar los pokémons de las evoluciones
    
  //     // 2.- Nos traemos la lista de evoluciones desde el pokémon seleccionado
  //     // generando un nuevo objeto pokémon por cada evolución (forEach)
       pokemon.next_evolution.forEach(element => {
          let evolution_name = element.name;  // Guardamos el nombre de la evolución en esta variable
          
  //         // 2.1.- encontramos el pokemon en base al nombre de la evolución 
           let pokemon_evolution = pokemons.find(element => {
              return element.name.includes(evolution_name);
          })
          console.log(pokemon_evolution)

  //          // alert("Adding evolution to new array pokémon_evolutions: " + pokémon_evolution.name)
  //          //3.- agregamos el pokémon encontrado a la lista de evoluciones pokémon_evolutions
        pokemon_evolutions.push(pokemon_evolution);
       });
       return pokemon_evolutions;
      //pintamos en el HTML (pantalla) la lista de los pokemones evolución del pokemon que buscamos
  //    renderPokemon(pokemon_evolutions)
   }