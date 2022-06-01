const express = require('express')
const router = express.Router()
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');
const Group = require('../models/Group');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

router.post('/google', async (req, res) => {
  const { token } = req.body

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  })

  const { sub, name, given_name, picture, email } = ticket.getPayload()
  const newUser = {
    googleID: sub,
    name: name,
    username: given_name,
    email: email,
    groups: [],
    image: picture
  }

  try {
    let user = await User.findOne({ googleID: sub })
    let message = "User Found!"
    if (!user) {
      user = await User.create(newUser)
      message = "User Created!"
    } else {
      // might not be good if users are removing a group. as long as deleting the last group is done
      // somewhere else, we should be fine
      if (user['groups'].length > 0) { 
        newUser['groups'] = user['groups']
      }
      user = await User.findOneAndUpdate({ googleID: sub }, newUser, { new: true })
    }
    return res.status(201).json({ success: true, message: message, user: JSON.stringify(user) })
  } catch (error) {
    console.error(error)
  }
})

router.post('/group', async (req, res) => {
  const { name: groupName, description: groupDescription, sessionLength, startDate } = req.body['group']
  const { username, email  } = req.body['user']

  let id = 0
  let test = await Group.findOne({ groupID: id })
  while(test) {
    id += 1
    test = await Group.findOne({ groupID: id })
  }

  const newGroup = {
    name: groupName,
    description: groupDescription,
    currentStory: '',
    author: '',
    image: '',
    bookLink: '',
    size: 1,
    members: [{ name: username, email: email }],
    storiesRead: 0,
    pastStories: [],
    sessionLength: sessionLength,
    startDate: startDate,
    groupID: id
  }
  try {
    let group = await Group.findOne({ name: groupName })
    let message = "Group Created!"
    if (group) {
      message = "Name taken, please choose a different name"
      return res.status(400).json({ success: false, message: message })
    }
    group = await Group.create(newGroup)
    req.body['user']['groups'].push(groupName)
    let user = await User.findOneAndUpdate({ googleID: req.body['user']['googleID'] }, { groups: req.body['user']['groups'] }, { new: true })
    return res.status(201).json({ success: true, message: message, group: JSON.stringify(group), user: JSON.stringify(user) })
  } catch (error) {
    console.error(error)
  }
})

router.get('/group/:groupName', async (req, res) => {
  const groupName = req.params['groupName']
  try {
    const groupData = await Group.findOne({ name: groupName })
    return res.status(200).json({ success: true, message: "Group Found!", group: groupData })
  } catch (error) {
    console.error(error)
  }
})

// router.get('/user/:userID/groups', async (req, res) => {
//   console.log("Getting user groups")
//   const userID = req.params['userID']
//   const groupNames = await User.findOne({ googleID: userID })

//   try {
//     const groupData = await Group.findOne({ name: groupName })
//     console.log("Found group:")
//     console.log(groupData)
//     return res.status(200).json({ success: true, message: "Group Found!", groupData: JSON.stringify(groupData) })
//   } catch (error) {
//     console.error(error)
//   }
// })

module.exports = router