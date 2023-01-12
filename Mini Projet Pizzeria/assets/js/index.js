
import { Ingredient } from './classes/ingredient.js';
import { Pizza } from './classes/pizza.js';

let availableIngredients = [];


window.addEventListener("DOMContentLoaded", function(){
    
    let bacon = new Ingredient("Bacon", "assets/img/bacon.png");
    let carots = new Ingredient("Carotte", "assets/img/carrots.png");
    let cheese = new Ingredient("Fromage", "assets/img/cheese.png");
    let egg = new Ingredient("Oeuf", "assets/img/egg.png");
    let eggplant = new Ingredient("Aubergine", "assets/img/eggplant.png");
    let goatCheese = new Ingredient("Fromage de chèvre", "assets/img/goat-cheese.png");
    let honey = new Ingredient("Miel", "assets/img/honey.png");
    let mushroom = new Ingredient("Champignon", "assets/img/mushroom.png");
    let olive = new Ingredient("Olive", "assets/img/olive.png");
    let pepper = new Ingredient("Piment", "assets/img/pepper.png");
    let potato = new Ingredient("Pomme de terre", "assets/img/potato.png");
    let tomato = new Ingredient("Tomate", "assets/img/tomato.png");
    
    availableIngredients.push(bacon, carots, cheese, egg, eggplant, goatCheese, honey, mushroom, olive, pepper, potato, tomato);

    // Ciblage de l'element "stage"
    let stage = document.getElementById("stage");
    
    // création de l'ul et positionnement dans le "stage"
    let ul = document.createElement("ul");
    stage.appendChild(ul)


    for (let i=0; i<availableIngredients.length; i++){
    
        // création des balises à integrer
        let li = document.createElement("li");
        let article = document.createElement("article");
        let header = document.createElement("header");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        
        // Integration de l'image dans l'ul
        img.setAttribute("src", availableIngredients[i].file);
        img.setAttribute("alt", availableIngredients[i].name);
        figure.appendChild(img);
        header.appendChild(figure);
    
        // Integration du text dans l'ul    
        let textToAdd = document.createTextNode(availableIngredients[i].name);
        h3.appendChild(textToAdd);
        header.appendChild(h3);
        article.appendChild(header);
        li.appendChild(article);
        ul.appendChild(li);
    }

    // selection d'un ingredient (coloration en rouge)
    let ingredientToSelect = document.querySelectorAll("#stage > ul > li > article");
    let newPizza = null;
    let cookingTime
    
    for (let i=0; i<ingredientToSelect.length; i++){
        ingredientToSelect[i].addEventListener("click", function(){
            if(newPizza === null){
                newPizza = new Pizza ();
                newPizza.addIngredient(availableIngredients[i]);
                ingredientToSelect[i].classList.add("selected");
                newPizza.display();
                cookingTime = newPizza.ingredients.length;
                // console.log(cookingTime)
            }
            else{
                if (ingredientToSelect[i].classList.contains("selected")){
                    newPizza.removeIngredient(availableIngredients[i]);
                    ingredientToSelect[i].classList.remove("selected");
                    newPizza.display();
                    cookingTime = newPizza.ingredients.length;
                    // console.log(cookingTime)
                }
                else{
                    newPizza.addIngredient(availableIngredients[i]);
                    ingredientToSelect[i].classList.add("selected");
                    newPizza.display();
                    cookingTime = newPizza.ingredients.length;
                    // console.log(cookingTime)
                }
            }
        });
    }
    
    // Lancement de la commande(On calcule le temps de cuisson, on retire les éléments de la liste aside et on enlève la coloration des ingrédients dans la liste des ingrédients.)
    let order_button = document.getElementById("order");
    let asideUl = document.querySelector("aside > ul");
    order_button.addEventListener("click", function(){
        console.log(cookingTime)
        let orderButtonLi = document.querySelector("aside > ul > li:last-of-type");
        asideUl.innerHTML="";
        asideUl.appendChild(orderButtonLi);
            for (let i=0; i<ingredientToSelect.length; i++){
                ingredientToSelect[i].classList.remove("selected");
                newPizza.removeIngredient(availableIngredients[i]);
            }
        let pizzaReady = document.getElementById("pizzaReady");
        setTimeout(function(){
            asideUl.classList.add("hidden");
            pizzaReady.classList.remove("hidden");
            
        }, cookingTime*1000);

    });
        
    
});

