import { Button, Input, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const Profile = () => {
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