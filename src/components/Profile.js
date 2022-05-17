import React from 'react'
import { Button, Input, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import { GoogleLogout } from 'react-google-login';

const Profile = ( { user, handleLogOut } ) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const profileBtn = React.useRef()
  const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

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
              <GoogleLogout clientId={REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText={"Log out"}
                            onLogoutSuccess={handleLogOut}
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