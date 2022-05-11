import { Button, Input, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { GoogleLogout } from 'react-google-login';

const Profile = ( { user } ) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const profileBtn = React.useRef()

  return (
    <>
      <Button ref={profileBtn} onClick={onOpen}>
        Profile
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={profileBtn}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Profile</DrawerHeader>

          <DrawerBody>
            <Input placeholder="UserName" />
              <GoogleLogout clientId={"88908660898-d2mtcptaeqck3jh7k0ick3jnf7oruukd.apps.googleusercontent.com"}
                            buttonText={"Log out"}
                            ></GoogleLogout>
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


export default Profile