module.exports = {
    Query: {
        recipe: (_, {id}, {dataSources}) => dataSources.controller.getRecipe(id),
        recipes: (_, __, {dataSources}) => dataSources.controller.getAllRecipes()
    },

    Mutation: {
        addRecipe: (_, {caption}, {dataSources}) => dataSources.controller.addRecipe(caption),
        removeRecipe: (_, {id}, {dataSources}) => dataSources.controller.removeRecipe(id),
        renameRicipe: (_, {id, newName}, {dataSources}) => dataSources.controller.renameRicipe(id, newName)
    }
};
