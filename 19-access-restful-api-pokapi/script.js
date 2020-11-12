async function getPokemon(desiredPokemon) {
  let url = `https://pokeapi.co/api/v2/pokemon/${desiredPokemon}`;
  let response = await axios.get(url);
  return response.data;
}

document.querySelector('#search-btn').addEventListener('click', async function(){
    
    let searchTerms = document.querySelector('#search-terms').value;


    let pokemon = await getPokemon(searchTerms);
    let name = pokemon.name;
    let image = pokemon.sprites.front_default;

    

    let dataElement = document.querySelector('#data');
    dataElement.innerHTML = `<li>Name: ${name}</li>
        <li><img src='${image}'</li>`
})

    
