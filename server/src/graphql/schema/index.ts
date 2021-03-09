import { gql } from 'apollo-server';
import cardSchema from './card';
import categorySchema from './category';
import deckSchema from './deck';

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

export default [linkSchema, cardSchema, categorySchema, deckSchema];
