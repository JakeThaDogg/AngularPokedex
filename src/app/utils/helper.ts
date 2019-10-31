export function getPokemonImageById(id: string) {
    /* The purpose of this function is to put as many
     '0' as needed to match the pokedex number pattern
     (#001, 002, ..., 045, ..., 176, ...) to get the
     right url for the picture*/
    for (let i = 0; i < 3; i++) {
        if (!id[i]) {
            id = '0' + id;
        }
    }
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
}
