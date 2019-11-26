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