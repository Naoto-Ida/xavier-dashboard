import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { typeDefs, resolvers } from './schema';

const app = express();
const port = 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
});
server.applyMiddleware({ app });

app.listen(port, () => console.log(`GraphQL exposed at http://localhost:${port}${server.graphqlPath}`));
