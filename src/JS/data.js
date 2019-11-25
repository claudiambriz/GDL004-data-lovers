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