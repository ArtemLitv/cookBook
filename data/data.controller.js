const DB = require('./database');


class Controller {
    constructor(){
    }

    getRecipe(id) {
        if(!id) {
            return {
                succsess: false,
                message: 'Id not provided',
                recipe: null
            }
        }
        const recipe = DB.recipes.find(recipe => recipe.id === id);

        return {
            succsess: !!(recipe),
            message: !(recipe) ? 'Not Found': '',
            recipe: recipe || null
        };
    }

    getAllRecipes() {
        return {
            succsess: !!(DB.recipes),
            message: !(DB.recipes) ? 'Not Fount': '',
            recipes: DB.recipes || null,
        };
    }

    addRecipe(caption) {
        const newRecipe = {
            id: `${Date.now()}`,
            caption: caption
        }

        DB.recipes.push(newRecipe)
        return {
            succsess: true,
            message: 'Recipie was created',
            recipe: newRecipe
        };
    }

    removeRecipe(id) {
        const result = this.getRecipe(id);
        if(result.succsess) {
            DB.recipes = DB.recipes.filter(recipe => recipe.id !== result.recipe.id);
        }
        return result;
    }
}

module.exports = Controller;