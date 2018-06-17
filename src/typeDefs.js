export const typeDefs = `
  type Dog {
    id: String!
    breed: String!
    displayImage: String!
  }

  # the schema allows the following query:
  type Query {
    breed: String
    dogs: [Dog]
    dog(breed: String!): Dog
  }
`;
