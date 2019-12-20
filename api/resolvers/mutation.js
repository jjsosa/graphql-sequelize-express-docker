const bcrypt = require('bcryptjs');

async function createUser (root, { name, email, password }, { models }) {
    return models.user.create({
        name,
        email,
        password: await bcrypt.hash(password, 10)
      })
}

async function createRecipe (root, { userId, title, ingredients, direction }, { models }) {
    return models.recipe.create({ userId, title, ingredients, direction })
}

module.exports = {
    createUser,
    createRecipe
}