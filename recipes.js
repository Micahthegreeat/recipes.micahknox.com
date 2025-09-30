// Get the full query string (e.g., "?name=John&age=30")
const queryString = window.location.search;

// Create a URLSearchParams object
const params = new URLSearchParams(queryString);

// Get a specific query parameter by name
const recipeName = params.get('recipe');



fetch('recipes.json')
.then(response => response.json())
.then(data => {
    //title
    const title = document.getElementById("recipe-title");
    title.textContent = `${data[recipeName].title}`;

    // const pic = document.getElementById("picture");
    // pic.src = `${data[recipeName].image}`;
    
    //ingredients
    const ingredientsList = document.getElementById("ingredients-table");
    ["Ingredient","Amount"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    ingredientsList.appendChild(th);
    });
    data[recipeName].ingredients.forEach(ingredient => {
    const row = document.createElement("tr");

    const amountCell = document.createElement("td");
    amountCell.textContent = ingredient.amount;

    const itemCell = document.createElement("td");
    itemCell.textContent = ingredient.item;
    row.appendChild(itemCell);
    row.appendChild(amountCell);
    

    ingredientsList.appendChild(row);    
    });


    


}).catch(error => console.error('Failed to fetch data:', error)); 
console.log(recipeName);