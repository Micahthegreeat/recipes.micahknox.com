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

    //image
    const pic = document.getElementById("recipe-image");
    console.log(data[recipeName].image);
    pic.src = data[recipeName].image;
    pic.alt = `Picture of ${data[recipeName].title}.`

    //RecipeDonatedBy
    //title)
    if ("by" in data[recipeName]){
        const RecipeBy = document.getElementById("recipeBy");
        RecipeBy.textContent = `Recipe donated by: ${data[recipeName].by}`;
    }     
    
    //ingredients
    const ingredientsList = document.getElementById("ingredients-table");
    ["Ingredient","Amount"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    th.className = "top";
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

    //steps
    let n = 1;
    const stepsList = document.getElementById("steps");
    data[recipeName].steps.forEach(text => {

    const stepNum = document.createElement("h2");
    stepNum.textContent = `Step ${n}`;

    const step = document.createElement("p");
    step.textContent = text;
    step.className = "instructions";
    n += 1;
    stepsList.appendChild(stepNum);
    stepsList.appendChild(step);
    });

    //tab title
    const tabTitle = document.getElementById("tab-name");
    tabTitle.textContent = `${data[recipeName].title}`;

}).catch(error => console.error('Failed to fetch data:', error)); 
console.log(recipeName);