import { gql } from 'apollo-server';

export default gql`
  type Category {
    _id: ID!
    categoryTitle: String!
    cards: [Card]
  }

  extend type Query {
    getAllCategories: [Category!]
    getCategory(_id: ID!): Category
  }

  extend type Mutation {
    saveCategory(categoryTitle: String!): Category
    deleteCategory(_id: ID!): Category
  }
`;