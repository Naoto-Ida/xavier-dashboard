import { gql } from 'apollo-server-express';

import { Room } from '../generated/graphql';

export const typeDef = gql`
    extend type Query {
        room(id: ID!): Room
        rooms: [Room!]
    }

    type Room {
        id: ID!
        name: String
    }
`;

export const resolvers = {
    Query: {
        room: (): Room | null => {
            return null;
        },
        rooms: (): Room[] => {
            return [];
        },
    },
};
