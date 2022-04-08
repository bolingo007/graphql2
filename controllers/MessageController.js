const { getMessage, createMessage, updateMessage } = require('../models/Message')

module.exports.getMessage = async ({ id }) => {
  let message = await getMessage(id)

  if (!message) {
    throw new Error('no message exists with id ' + id)
  }

  return message
}

module.exports.createMessage = async ({ input }) => {
  // TODO VALIDATION

  return await createMessage(input)
}

module.exports.updateMessage = async ({ id, input }) => {
  // TODO VALIDATION

  let message = await updateMessage(id, input)

  if (!message) {
    throw new Error('no message exists with id ' + id)
  }

  return message
}
