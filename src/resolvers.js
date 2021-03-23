module.exports = {
    Query: {
        recipe: (_, {id}, {dataSources}) => dataSources.controller.getRecipe(id),
        recipes: (_, __, {dataSources}) => dataSources.controller.getAllRecipes()
    },

    Mutation: {
        addRecipe: (_, {caption}, {dataSources}) => dataSources.controller.addRecipe(caption),
        removeRecipe: (_, {id}, {dataSources}) => dataSources.controller.removeRecipe(id),
        editRecipe: (_, {id, newName, newBody}, {dataSources}) => dataSources.controller.editRecipe(id, {name: newName, body: newBody})
    }
};
