const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    name: { type: String, required: true },
    groups: { type: [], required: true },
  },
)

module.exports = mongoose.model('users', User)