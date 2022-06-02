const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    googleID: {type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true},
    email: { type: String, required: true },
    groups: { type: [], required: true },
    image: { type: String }
  },
)

module.exports = mongoose.model('User', User)