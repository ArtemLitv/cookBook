const { ApolloServer } = require("apollo-server");
const Controller = require('../data/data.controller');
const typeDefs = require("./schema");
const resolvers = require('./resolvers');




const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        controller: new Controller()
    })
 });


server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on port 4000
      Explore at https://studio.apollographql.com/dev
    `);
  });