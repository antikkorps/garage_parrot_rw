export const schema = gql`
  type Horaire {
    id: Int!
    jourDeLaSemaine: String!
    openingAM: DateTime!
    closingAM: DateTime!
    openingPM: DateTime!
    closingPM: DateTime!
  }

  type Query {
    horaires: [Horaire!]! @skipAuth
    horaire(id: Int!): Horaire @skipAuth
  }

  input CreateHoraireInput {
    jourDeLaSemaine: String!
    openingAM: DateTime!
    closingAM: DateTime!
    openingPM: DateTime!
    closingPM: DateTime!
  }

  input UpdateHoraireInput {
    jourDeLaSemaine: String
    openingAM: DateTime
    closingAM: DateTime
    openingPM: DateTime
    closingPM: DateTime
  }

  type Mutation {
    createHoraire(input: CreateHoraireInput!): Horaire! @requireAuth
    updateHoraire(id: Int!, input: UpdateHoraireInput!): Horaire! @requireAuth
    deleteHoraire(id: Int!): Horaire! @requireAuth
  }
`
