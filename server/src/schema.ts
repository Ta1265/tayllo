import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID!
    userName: String
    password: String
    deck_access: [Deck]
  }
  type Deck {
    deckID: ID!
    deckTitle: String
    categories: [Category]
  }
  type Category {
    categoryTitle: String
    cards: [Card]
  }
  type Card {
    cardTitle: String
    creationDate: String
    content: String
  }

  type Query {
    userData: User
  }
`;

export default typeDefs;