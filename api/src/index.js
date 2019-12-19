const express = require('express');
const { ApolloServer, makeExecutableSchema } = require('apollo-server-express');
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

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);