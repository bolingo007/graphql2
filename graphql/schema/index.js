const { buildSchema } = require('graphql')

/* let schema = buildSchema(`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }

  type Mutation {
    setMessage(message: String): String
  }

  type Query {
    random: Float!
    getDie(numSides: Int): RandomDie
    getMessage: String
  }
`) */

let schema = buildSchema(`
  input MessageInput {
    content: String
    author: String
  }

  type Message {
    id: ID!
    content: String
    author: String
  }

  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }

  type Mutation {
    setMessage(message: String): String
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }

  type Query {
    random: Float!
    getDie(numSides: Int): RandomDie
    getMessage(id: ID!): Message
  }
`)

module.exports = schema
