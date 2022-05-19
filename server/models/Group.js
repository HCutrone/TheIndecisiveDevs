const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Group = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    currentStory: { type: String, required: false },
    author: { type: String, required: false },
    size: { type: Number, required: true },
    members: { type: [], required: true},
    storiesRead: { type: Number, required: true },
    pastStories: { type: [], required: true },
    sessionLength: { type: Number, required: true }, //stored as a number of days
  },
)

module.exports = mongoose.model('Group', Group)