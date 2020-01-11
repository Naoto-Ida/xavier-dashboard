import { gql } from 'apollo-server-express';

import * as Device from './Device';
import * as Room from './Room';

const rootTypeDef = gql`
    type Query {
        hello: String
    }
`;

const rootResolvers = {
    Query: {
        hello: (): string => 'World',
    },
};

export const typeDefs = [rootTypeDef, Device.typeDef, Room.typeDef];

export const resolvers = Object.assign(rootResolvers, Device.resolvers, Room.resolvers);
