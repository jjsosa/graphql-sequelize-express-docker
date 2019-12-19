const bcrypt = require('bcryptjs');

const resolvers = {
    Query: require('../resolvers/query'),
    Mutation: require('../resolvers/mutation'),
    User: require('../resolvers/user'),
    Recipe: require('../resolvers/recipe'),
}

module.exports = resolvers;