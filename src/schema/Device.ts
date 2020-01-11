import { gql } from 'apollo-server-express';

import { Device } from '../generated/graphql';

export const typeDef = gql`
    extend type Query {
        device(id: ID!): Device
        devices: [Device]
    }

    type Device {
        id: ID!
        name: String
    }
`;

export const resolvers = {
    Query: {
        device: (): Device | null => {
            return null;
        },
        devices: (): Device[] => {
            return [];
        },
    },
};
