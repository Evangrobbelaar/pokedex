const pokedex = document.querySelector('.pokedex');

async function fetchPokedexData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=898');
        const data = await response.json();
        data.results.forEach(async (pokemon) => {
            const detailsResponse = await fetchPokemonDetails(pokemon.url);
            createPokemonCard(detailsResponse);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function fetchPokemonDetails(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching details:', error);
    }
}

function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardContent.innerHTML = `
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        <h3>${pokemon.name}</h3>
        <p class="id">ID: ${pokemon.id}</p>
        <p class="types">Types: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
        <p class="height">Height: ${pokemon.height}</p>
        <p class="weight">Weight: ${pokemon.weight}</p>
    `;

    if (pokemon.types.length > 1) {
        const gradientColors = pokemon.types.map(type => getColor(type.type.name));
        cardContent.style.background = `linear-gradient(to bottom, ${gradientColors.join(', ')})`;
    } else {
        const bgColor = getColor(pokemon.types[0].type.name);
        cardContent.style.backgroundColor = bgColor;
    }

    card.appendChild(cardContent);
    pokedex.appendChild(card);
}

function getColor(type) {
    switch (type) {
        case 'grass': return '#78c850';
        case 'fire': return '#f08030';
        case 'water': return '#6890f0';
        case 'electric': return '#f8d030';
        case 'bug': return '#745e4f';
        case 'poison': return '#51ff00';
        case 'flying': return '#00e1ff';
        case 'fairy': return '#f800cf';
        case 'normal': return '#ccfdff';
        case 'ground': return '#744201';
        case 'fighting': return '#c70000';
        case 'psychic': return '#01b368';
        case 'rock': return '#47565c';
        case 'ghost': return '#dbda7d';
        case 'ice': return '#49d4ec';
        case 'dragon': return '#550d00';
        default: return '#ccc';
    }
}

const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search Pokemon by Name, Type, Height, or Weight';
searchInput.addEventListener('input', handleSearch);

document.body.insertBefore(searchInput, pokedex);

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const pokemonCards = pokedex.querySelectorAll('.pokemon-card');

    pokemonCards.forEach(card => {
        const pokemonName = card.querySelector('h3').textContent.toLowerCase();
        const pokemonTypes = card.querySelector('.types').textContent.toLowerCase();
        const pokemonHeight = card.querySelector('.height').textContent.toLowerCase();
        const pokemonWeight = card.querySelector('.weight').textContent.toLowerCase();

        const isMatchingSearch =
            pokemonName.includes(searchTerm) ||
            pokemonTypes.includes(searchTerm) ||
            pokemonHeight.includes(searchTerm) ||
            pokemonWeight.includes(searchTerm);

        card.style.display = isMatchingSearch ? 'block' : 'none';
    });
}

const sortDropdown = document.getElementById('sortDropdown');
sortDropdown.addEventListener('change', handleSort);

let currentSort = 'ascId';

function handleSort() {
    currentSort = sortDropdown.value;
    sortPokemonCards(currentSort);
}

function sortPokemonCards(sortOption) {
    const pokemonCards = Array.from(pokedex.querySelectorAll('.pokemon-card'));

    pokemonCards.sort((a, b) => {
        const aData = extractPokemonData(a);
        const bData = extractPokemonData(b);

        if (sortOption === 'ascId' || sortOption === 'descId') {
            return sortOption === 'ascId' ? aData.id - bData.id : bData.id - aData.id;
        } else if (sortOption === 'ascName' || sortOption === 'descName') {
            return sortOption === 'ascName' ? aData.name.localeCompare(bData.name) : bData.name.localeCompare(aData.name);
        }
    });

    pokemonCards.forEach(card => pokedex.removeChild(card));
    pokemonCards.forEach(card => pokedex.appendChild(card));
}

function extractPokemonData(card) {
    const id = parseInt(card.querySelector('.id').textContent);
    const name = card.querySelector('h3').textContent.toLowerCase();
    return { id, name };
}


fetchPokedexData();
