import { gql } from 'apollo-server';

export default gql`
  type Card {
    _id: ID!
    cardTitle: String!
    creationDate: String
    content: String
  }

  extend type Query {
    getAllCards: [Card!]
    getCard(_id: ID!): Card
  }

  extend type Mutation {
    saveCard(cardTitle: String!, content: String): Card!
    deleteCard(_id: ID!): Card
  }
`;
