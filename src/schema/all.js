import { gql, makeExecutableSchema } from 'apollo-server';

import typeDefs from './types.gql';
import resolvers from './resolvers';

export default makeExecutableSchema({ typeDefs: gql(typeDefs), resolvers });
