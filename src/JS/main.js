window.onload = function() {
    renderPokemon(pokemons);
};

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
        </div>
    </div>
  `).join("")}
      `
  }
  
  function getName(event) {
    event.preventDefault();
    var name = document.getElementById("poke-name").value;
    var pokemon = pokemons.find(element => {
        return element.name == name;
    })
    renderPokemon([pokemon])
        /*var elemImg = document.createElement("img");
        elemImg.src = pokemon.img
        var resultsDiv = document.getElementById("pokemons-caja");
        resultsDiv.appendChild(elemImg);
        */
}

function getType(sel) {
    var type = sel.options[sel.selectedIndex].text
    var pokemonType = pokemons.filter(element => {
        return element.type == type;
    })
    renderPokemon(pokemonType)
}