require("../config/dbConnection");
const Pokemon = require("../models/Pokemon");

const pokemons = [
  {
    name: "Bulbasaur",
    jname: "フシギダネ",
    image: "https://ironhack-pokeapi.herokuapp.com/img/001Bulbasaur.png",
    type: "grass",
  },
  {
    name: "Charmander",
    jname: "ヒトカゲ",
    image: "https://ironhack-pokeapi.herokuapp.com/img/004Charmander.png",
    type: "fire",
  },
  {
    name: "Squirtle",
    jname: "ゼニガメ",
    image: "https://ironhack-pokeapi.herokuapp.com/img/007Squirtle.png",
    type: "water",
  },
  {
    name: "Pikachu",
    jname: "ピカチュウ",
    image: "https://ironhack-pokeapi.herokuapp.com/img/025Pikachu.png",
    type: "electricity",
  },
];

async function seed() {
  try {
    const createdPokemons = await Pokemon.create(pokemons);
    console.log(createdPokemons);
  } catch (error) {
    console.log(error);
  }
}

seed();
