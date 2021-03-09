import { gql } from 'apollo-server';

export default gql`
  type Deck {
    _id: ID!
    deckTitle: String!
    categories: [Category]
  }

  extend type Query {
    getAllDecks: [Deck!]
    getDeck(_id: ID!): Deck
  }

  extend type Mutation {
    saveDeck(deckTitle: String!): Deck!
    deleteDeck(_id: ID!): Deck
  }
`;