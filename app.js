require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./graphql/schema')
const root = require('./graphql/resolvers')
const loggingMiddleware = require('./middlewares/loggingMiddleware')

const port = process.env.PORT

const app = express()
app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') }))

app.use(loggingMiddleware)

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

//http://localhost:4000/graphql?query=%7B%0A%20%20random%2C%0A%20%20%0A%7D%0A%0A