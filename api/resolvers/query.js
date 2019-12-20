

async function user (root, { id }, { models }) {
    return models.user.findById(id);
}

async function allRecipes (root, args, { models }) {
    return models.recipe.findAll();
}

async function recipe (root, { id }, { models }) {
    return models.recipe.findById(id);
}

module.exports = {
    user,
    allRecipes,
    recipe
}