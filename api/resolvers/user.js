async function recipes (root) {
    return root.getRecipes();
}

module.exports = {
    recipes,
}