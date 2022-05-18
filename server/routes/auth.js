const express = require('express')
const router = express.Router()
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

router.post('/google', async (req, res) => {
  const { token } = req.body

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  })

  const { sub, name, given_name, picture } = ticket.getPayload()
  const newUser = {
    googleID: sub,
    name: name,
    username: given_name,
    groups: [],
    image: picture
  }

  try {
    console.log("looking for user...")
    let user = await User.findOne({ googleID: sub })
    let message = "User Found!"
    if (!user) {
      console.log("user not found, creating user...")
      user = await User.create(newUser)
      message = "User Created!"
      console.log(message)
    } else {
      console.log(message)
      console.log("here's the user:")
      console.log(user)
    }
    return res.status(201).json({ success: true, message: message, user: JSON.stringify(user) })
  } catch (error) {
    console.error(error)
  }
})

router.post('/group', async (req, res) => {
  console.log("Creating a group!:")
  const { group } = req.body
  console.log(group)
})

module.exports = router