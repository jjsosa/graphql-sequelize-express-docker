const bcrypt = require('bcryptjs');

const resolvers = {
    Query: {
        async user (root, { id }, { models }) {
              return models.user.findById(id);
        },
        async allRecipes (root, args, { models }) {
              return models.recipe.findAll();
        },
        async recipe (root, { id }, { models }) {
              return models.recipe.findById(id);
        }
      },
      Mutation: {
        async createUser (root, { name, email, password }, { models }) {
            return models.user.create({
                name,
                email,
                password: await bcrypt.hash(password, 10)
              })
        },
        async createRecipe (root, { userId, title, ingredients, direction }, { models }) {
            return models.recipe.create({ userId, title, ingredients, direction })
        }
    },
    User: {
        async recipes (user) {
            return user.getRecipes()
        }
    },
    Recipe: {
        async user (recipe) {
            return recipe.getUser()
        }
    }
}

module.exports = resolvers;