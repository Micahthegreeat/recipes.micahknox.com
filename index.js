fetch('recipes.json')
.then(response => response.json())
.then(data => {
    const foodList = document.getElementById("main");
    //go through with the for each and make a box for each item
    for (food in data){
        const link = document.createElement("a");
        link.href = `recipe.html?recipe=${food}`;
        const tbl = document.createElement("table");
        const line1 = document.createElement("tr");
        const line2 = document.createElement("tr");
        const foodName = document.createElement("th");
        foodName.textContent = data[food].title;
        const imageHolder = document.createElement("td");
        const foodImage = document.createElement("img");
        foodImage.src = data[food].image;
        console.log("lols");
        let tobemultiplied = 300 / foodImage.width
        foodImage.width = 300;
        console.log(tobemultiplied * foodImage.height);
        //foodImage.height = Math.min(300, foodImage.height * tobemultiplied);
        foodImage.alt = `Picture of ${food}`;


        
    
    // const amountCell = document.createElement("td");
    // amountCell.textContent = food.amount;

    // const itemCell = document.createElement("td");
    // itemCell.textContent = food.item;
    // row.appendChild(itemCell);
    // row.appendChild(amountCell);

        imageHolder.appendChild(foodImage);
        line2.appendChild(imageHolder);
        line1.appendChild(foodName);
        tbl.appendChild(line1);
        tbl.appendChild(line2);
        link.appendChild(tbl);
        foodList.appendChild(link);    
    }
}).catch(error => console.error('Failed to fetch data:', error)); 
