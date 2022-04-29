import './Components.css'
import React from 'react'
import Profile from './Profile.js'
import LogIn from './LogIn.js'
import { Link } from 'react-router-dom'
import { Center, Flex, Spacer } from '@chakra-ui/react'

const Nav = ({ user }) => {
  return (
    <Flex className="navBar">
      <Center className="navLeftLinks"> <Link to="/Home">Home</Link> </Center>
      <Center className="navLeftLinks"> <Link to="/Library">Library</Link> </Center>
      <Center className="navLeftLinks"> <Link to="/Groups">Your Groups</Link> </Center>
      <Center className="navLeftLinks"> <Link to="/Chat">Chat</Link> </Center>
      
      <Spacer></Spacer>
      
      <Center className="navRightLinks">
        {user
          ? <Profile user={user}/>
          : <LogIn btnText="Log-In"/>}
      </Center>
      
    </Flex>
  )
}

export default Nav