const randomController = require('../../controllers/RandomController')
const diceController = require('../../controllers/DiceController')
const messageController = require('../../controllers/MessageController')

module.exports = {
  random: randomController.randomNumber,
  getDie: diceController.getDie,
  getMessage: messageController.getMessage,
  createMessage: messageController.createMessage,
  updateMessage: messageController.updateMessage,
}
