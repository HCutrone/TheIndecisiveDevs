import React from 'react'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure, Divider, Text, Container } from '@chakra-ui/react'
import { GoogleLogin } from 'react-google-login';

const LogIn = ({ btnText, handleLogIn, displayFailureToast }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;
  const loginBtn = React.useRef()

  const handleFailure = (result) => {
    displayFailureToast("Error logging in", result);
  }

  const extractToken = (googleData) => {
    const token = googleData.getAuthResponse().id_token
    handleLogIn(token);
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

          <DrawerHeader>
            <Text fontSize='xl'>
              Log In or Sign Up with Google!
            </Text>
          </DrawerHeader>
          <Divider />
          <DrawerBody>
            <Container ml={6}>
              <GoogleLogin clientId={REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText={"Log in with Google"}
                            // isSignedIn={true}
                            onSuccess={extractToken}
                            onFailure={handleFailure}
                            cookiePolicy={'single_host_origin'}/>
            </Container>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default LogIn