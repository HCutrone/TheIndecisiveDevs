import { Button, Input, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure, FormLabel, Divider, FormControl } from '@chakra-ui/react'
import React from 'react'
import { GoogleLogin } from 'react-google-login';

const clientId = '88908660898-d2mtcptaeqck3jh7k0ick3jnf7oruukd.apps.googleusercontent.com';

const LogIn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const loginBtn = React.useRef()

  return (
    <>
      <Button ref={loginBtn} onClick={onOpen}>
        Log In
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
            <GoogleLogin
              clientId={clientId}
              buttonText={"Login"}
              isSignedIn={true}
              />
            <FormControl>
              <FormLabel>Sign Up:</FormLabel>
                <Input placeholder="Enter a user name..." mb="10px"/>
                <Input placeholder="And a password" mb="10px" />
                <Input placeholder="Repeat password" mb="10px" />
                <Divider mt={3} mb={3}/>
              <FormLabel>Log In:</FormLabel>
                <Input placeholder="User name" mb="10px" />
                <Input placeholder="Password" mb="10px" />
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