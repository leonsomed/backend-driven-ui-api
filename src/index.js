import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import schema from './schema/all';

const port = 5000;
const app = express();
const server = new ApolloServer({
  playground: true,
  schema,
});

server.applyMiddleware({
  app,
  path: '/graphql',
});

app.listen(port, () => {
  console.log(`Server ready http://localhost:${port}/graphql`);
});
