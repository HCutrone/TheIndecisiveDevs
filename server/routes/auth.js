const express = require('express')
const router = express.Router()
const passport = require('passport')
const { OAuth2Client } = require('google-auth-library');
// const { default: Profile } = require('../../novellas/src/components/Profile');
const User = require('../models/User');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

// router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.post('/google', async (req, res) => {
  const { token } = req.body
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  })
  const { id, name, displayName } = ticket.getPayload()
  const newUser = {
    googleID: id,
    name: name,
    username: displayName,
    groups: [],
    image: ticket.getPayload().photos[0].value,
  }

  try {
    let user = await User.findOne({ googleID: id })
    let message = "User Found!"
    if (!user) {
      user = await User.create(newUser)
      message = "User Created!"
    }
    return res.status(201).json({ success: true, message: message, user: JSON.stringify(user) })
  } catch (error) {
    console.error(error)
  }
})

router.get('/google/callback', passport.authenticate('google', { successRedirect: 'http://localhost:3000/home', failureRedirect: '/' }))


module.exports = router