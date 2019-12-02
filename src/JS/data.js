// Filtrar por Tipo//

export function getType(sel, evento) {
  let pokemonType = sel.filter(element => {
    for (let i = 0; i < element.type.length; i++) {
      if (element.type[i] === evento) {
        return element;
      }
    }
  });
  return pokemonType;
}

// Búsqueda por nombre//

export function getName(pokemons, event) {
  let pokemon = pokemons.filter(element => {
    return element.name.includes(event);
  });
  return pokemon;
}

// Evolución

export function getEvolution(pokemons, name) {
  let pokemon = pokemons.find(element => {
    return element.name.includes(name);    
  });
  let pokemonEvolutions = []; 
  pokemon.next_evolution.forEach(element => {
    let evolutionName = element.name;  
    let pokemonEvolution = pokemons.find(element => {
      return element.name.includes(evolutionName);
    });  
    pokemonEvolutions.push(pokemonEvolution);
  });
  return pokemonEvolutions;   
}


