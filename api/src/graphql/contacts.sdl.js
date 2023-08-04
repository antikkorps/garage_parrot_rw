export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String!
    message: String!
    numero_de_telephone: String!
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact!]! @requireAuth
    contact(id: Int!): Contact @requireAuth
  }

  input CreateContactInput {
    name: String!
    email: String!
    message: String!
    numero_de_telephone: String!
  }

  input UpdateContactInput {
    name: String
    email: String
    message: String
    numero_de_telephone: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @skipAuth
    deleteContact(id: Int!): Contact! @requireAuth
  }
`
