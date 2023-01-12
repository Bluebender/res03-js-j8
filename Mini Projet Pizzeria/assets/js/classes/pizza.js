class Pizza {
    #ingredients;

    constructor()
    {
        this.#ingredients = [];
    }

    get ingredients (){
        return this.#ingredients;
    }
    
    addIngredient(ingredient){
        this.#ingredients.push(ingredient);
    }
    removeIngredient(ingredient){
        let tempTab = [];
        for (let i = 0; i < this.#ingredients.length; i++){
            if (ingredient.name !== this.#ingredients[i].name){
                tempTab.push(this.#ingredients[i]);
            }
        }
        this.#ingredients = tempTab;
    }
    display(){
        let orderButtonLi = document.querySelector("aside > ul > li:last-of-type");
        let asideUl = document.querySelector("aside > ul");
        asideUl.innerHTML="";
        for (let i=0; i<this.#ingredients.length; i++){
            // création des balises à integrer
            let li = document.createElement("li");
            let article = document.createElement("article");
            let header = document.createElement("header");
            let figure = document.createElement("figure");
            let img = document.createElement("img");
            let h3 = document.createElement("h3");
            // Integration de l'image dans l'ul
            img.setAttribute("src", this.#ingredients[i].file);
            img.setAttribute("alt", this.#ingredients[i].name);
            figure.appendChild(img);
            header.appendChild(figure);
        
            // Integration du text dans l'ul    
            let textToAdd = document.createTextNode(this.#ingredients[i].name);
            h3.appendChild(textToAdd);
            header.appendChild(h3);
            article.appendChild(header);
            li.appendChild(article);
            asideUl.appendChild(li);
        }
        asideUl.appendChild(orderButtonLi);
    }
}

export { Pizza };