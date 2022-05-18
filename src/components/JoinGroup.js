import React from 'react'
import { Container, FormControl, Input, Button, Spacer, HStack } from '@chakra-ui/react'

const JoinGroup = () => {
  return (
    <Container centerContent>
      <FormControl>
          <Input placeholder="Group Link Code" mb="10px" />
          <HStack>
            <Button className="left">Cancel</Button>
            <Spacer />
            <Button className="right">Submit</Button>
          </HStack>
      </FormControl>
    </Container>
  )
}

export default JoinGroup