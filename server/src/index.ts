import 'regenerator-runtime/runtime';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';

const PORT = 3080;
const app = express();

const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers
});

graphqlServer.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}/graphql`);
});
