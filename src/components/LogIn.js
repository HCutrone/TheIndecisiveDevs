import React from 'react'
import { Button, Input, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure, FormLabel, Divider, FormControl } from '@chakra-ui/react'
import api from '../api'
import { GoogleLogin } from 'react-google-login';

const LogIn = ({ btnText, handleLogIn }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const loginBtn = React.useRef()

  function testLogin(res) {
    console.log("Username: ", res.profileObj.name);
    handleLogIn(res);
  }

  return (
    <>
      <Button ref={loginBtn} onClick={onOpen}>
        {btnText}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={loginBtn}
      >
        <DrawerOverlay />
        <DrawerContent>

          <DrawerHeader>Log In or Sign Up</DrawerHeader>
          <Divider />
          <DrawerBody>
            <FormControl>
              <FormLabel>Log In:</FormLabel>
                <GoogleLogin clientId={"88908660898-d2mtcptaeqck3jh7k0ick3jnf7oruukd.apps.googleusercontent.com"}
                             buttonText={"Log in with google"}
                             isSignedIn={true}
                             onSuccess={handleLogIn}
                             cookiePolicy={'single_host_origin'}
                />
                <Input placeholder="User name" mb="10px" />
                <Input placeholder="Password" mb="10px" />
                <Divider mt={3} mb={3}/>
              <FormLabel>Sign Up:</FormLabel>
                <Input placeholder="Enter a user name" mb="10px"/>
                <Input placeholder="And a password" mb="10px" />
                <Input placeholder="Repeat password" mb="10px" />
            </FormControl>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default LogIn