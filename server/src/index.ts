import 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import getConnection from './db/index';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

// context passed to each query/ mutation - the database
const context = async () => {
  const con = await getConnection();
  return { con };
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  playground: true,
  introspection: true,
});

const app = express();
apolloServer.applyMiddleware({ app });

app.listen({ port: 3000 }, () => {
  console.log(`server listening at http://localhost:4000${apolloServer.graphqlPath}`);
});
