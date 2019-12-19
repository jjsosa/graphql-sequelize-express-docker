const { ApolloServer, makeExecutableSchema } = require('apollo-server');
const resolvers = require('./resolvers');
const models = require('../models');
const { importSchema } = require('graphql-import');
const typeDefs = importSchema('./src/schema/schema.graphql');

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
  schema: schema,
  context: ({ req }) => ({
    ...req,
    models
  }),
  playground: true, // must be false in production
});

server
  .listen()
  .then(({ url, server }) => {
    console.log(`Server is running on ${url}`);
  });