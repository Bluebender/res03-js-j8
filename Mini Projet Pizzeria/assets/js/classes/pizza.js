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
        for (i=0; this.#ingredients.length; i++){
            if (ingredient !== this.#ingredients[i]){
                newtab.push(this.#ingredients[i]);
            }
        }
        this.#ingredients = tempTab;
    }
    display(){
        
    }
}

export { Pizza };