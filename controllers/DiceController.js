const RandomDie = require("../models/RandomDie")

module.exports.getDie = ({ numSides }) => {
  return new RandomDie(numSides || 6)
}
