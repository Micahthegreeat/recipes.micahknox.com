// Get the full query string (e.g., "?name=John&age=30")
const queryString = window.location.search;

// Create a URLSearchParams object
const params = new URLSearchParams(queryString);

// Get a specific query parameter by name
const recipeName = params.get('recipe');



const myElement = document.getElementById("recipe-title");
    myElement.textContent = `${recipeName}`;