import { gql } from 'apollo-server-micro';

import cardSchema from './card';

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, cardSchema];
