# Pokedex Project

Welcome to the Pokedex project, developed by Evan Grobbelaar! This repository contains a web-based Pokedex application that fetches Pokémon data from the PokeAPI and dynamically displays them as cards on a web page. This README file, created by Evan Grobbelaar, will provide an overview and explanation of the key components of the code in the project.

## Table of Contents
- [Project Overview](#project-overview)
- [HTML Structure](#html-structure)
- [CSS Styling](#css-styling)
- [JavaScript Logic](#javascript-logic)

## Project Overview

The Pokedex project is a simple web application developed by Evan Grobbelaar that allows users to explore information about various Pokémon using the PokeAPI. The application provides features like searching for Pokémon by name, type, height, or weight, as well as sorting the displayed Pokémon cards. The project consists of three main files: `index.html`, `style.css`, and `script.js`.

## HTML Structure

The `index.html` file, designed by Evan Grobbelaar, contains the structure of the web page. Here's a breakdown of the key elements:

- The document starts with `<!DOCTYPE html>` and `<html>` tags.
- The `<head>` section includes metadata and a link to the `style.css` file for styling.
- The `<body>` contains:
  - A header with the Pokémon logo, title, and a dropdown for sorting.
  - A `<div>` with the class `pokedex` where Pokémon cards will be displayed.
  - A `<script>` tag linking to the `script.js` file for JavaScript logic.

## CSS Styling

The `style.css` file, styled by Evan Grobbelaar, provides styling for the Pokedex application. It includes rules for the header, search input, background animation, Pokémon cards, and their animations. Some notable features include:

- Styling for the header and logo.
- Background animation using linear gradients.
- Styling for the Pokémon cards, including flex layout, borders, and shadow animations.
- Background color classes for different Pokémon types.
- Floating animation for Pokémon images.

## JavaScript Logic

The `script.js` file, developed by Evan Grobbelaar, contains the JavaScript code that fetches data from the PokeAPI and dynamically creates Pokémon cards. Here's a breakdown of the key functionalities:

- The `fetchPokedexData` function fetches a list of Pokémon from the API and calls `fetchPokemonDetails` for each Pokémon.
- The `fetchPokemonDetails` function fetches detailed data for a specific Pokémon.
- The `createPokemonCard` function dynamically creates a card for each Pokémon and populates it with data.
- The `getColor` function maps Pokémon types to background colors.
- The `handleSearch` function filters Pokémon cards based on the search input.
- The `handleSort` function sorts Pokémon cards based on the selected sorting option.
- The `sortPokemonCards` function sorts and rearranges Pokémon cards based on the chosen option.
- The `extractPokemonData` function extracts relevant data from a Pokémon card for sorting.
- The script adds a search input and event listeners for search and sorting.

## Conclusion

The Pokedex project, designed and developed by Evan Grobbelaar, is a demonstration of fetching data from an API and dynamically creating a user-friendly web interface. The combination of HTML, CSS, and JavaScript brings this application to life, allowing users to explore and learn about different Pokémon. Feel free to explore and modify the code to enhance the project further!