const {
  requiredSubselectionMessage,
} = require("graphql/validation/rules/ScalarLeafs");
const DB = require("./database");

class Controller {
  constructor() {}

  getRecipe(id) {
    if (!id) {
      return {
        succsess: false,
        message: "Id not provided",
        recipe: null,
      };
    }
    const recipe = DB.recipes.find((recipe) => recipe.id === id);

    return {
      succsess: !!recipe,
      message: !recipe ? "Not Found" : "",
      recipe: recipe || null,
    };
  }

  getAllRecipes() {
    return {
      succsess: !!DB.recipes,
      message: !DB.recipes ? "Not Fount" : "",
      recipes: DB.recipes || null,
    };
  }

  addRecipe(caption) {
    const newRecipe = {
      id: `${Date.now()}`,
      caption: caption,
    };

    DB.recipes.push(newRecipe);
    return {
      succsess: true,
      message: "Recipie was created",
      recipe: newRecipe,
    };
  }

  removeRecipe(id) {
    const result = this.getRecipe(id);
    if (result.succsess) {
      DB.recipes = DB.recipes.filter(
        (recipe) => recipe.id !== result.recipe.id
      );
    }
    return result;
  }

  renameRicipe(id, newName) {
    const recipe = this.DB_GET_BY_ID(id);
    if (recipe) {
      recipe.caption = newName;
      this.DB_REPLACE(id, recipe);
    }
    return {
      succsess: true,
      message: "Recipie was created",
      recipe: recipe,
    };
  }

  DB_GET_BY_ID(id) {
    return DB.recipes.find((recipe) => recipe.id === id);
  }

  DB_REPLACE(id, recipe) {
    const findRecipe = this.DB_GET_BY_ID(id);
    if (!findRecipe) return false;

    DB.recipes = DB.recipes.map((currentRecipe) => {
      if (currentRecipe.id === id) return recipe;
      return currentRecipe;
    });

    return true;
  }
}

module.exports = Controller;
