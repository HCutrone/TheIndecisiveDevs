import React from 'react'
import { Button, Image, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure, Text, Flex, Spacer } from '@chakra-ui/react'
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
          <DrawerHeader>
            <Flex alignItems='center'>
              <Image borderRadius='full' boxSize='75px'
                     src={user['image']}
                     alt={user['name']}/>
              <Spacer />
              <Text fontSize="2xl">{user['name']}</Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            
            
          </DrawerBody>
          
          <DrawerFooter>
            <GoogleLogout clientId={REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText={"Log out"}
                            onLogoutSuccess={handleLogOut} />
            <Spacer />
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}


export default Profile