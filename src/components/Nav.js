import './Components.css'
import React from 'react'
import Profile from './Profile.js'
import LogIn from './LogIn.js'
import { Link } from 'react-router-dom'
import { Center, Flex, Spacer } from '@chakra-ui/react'

const Nav = ({ user, handleLogIn, handleLogOut, displayFailureToast }) => {
  return (
    <Flex className="navBar">
      {user 
        ?
        <>
          <Center className="navLeftLinks"> <Link to="/Home">Home</Link> </Center>
          <Center className="navLeftLinks"> <Link to="/Library">Library</Link> </Center>
        </>
        : <></>}
      
      <Spacer></Spacer>
      
      <Center className="navRightLinks">
        {user
          ? <Profile user={user} handleLogOut={handleLogOut} />
          : <LogIn btnText="Log-In" handleLogIn={handleLogIn} displayFailureToast={displayFailureToast}/>}
      </Center>
      
    </Flex>
  )
}

export default Nav