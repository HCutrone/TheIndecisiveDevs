import './Routes.css'
import React from 'react'
import Group from '../components/Group.js'
import CreateGroup from '../components/CreateGroup'
import JoinGroup from '../components/JoinGroup'
import { 
  Container,
  VStack,
  Heading,
  Button,
  HStack,
  Spacer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor, } from '@chakra-ui/react'

const handleCreateGroup = () => {
  console.log("creating group!")
}
const handleJoinGroup = () => {
  console.log("joining group!")
}

const Home = ({ user }) => {
  return (
    <Container className="home" maxW="100vw" centerContent>
      <Container className="home-header">
        <Heading as="h1">Novellas for the Fellas</Heading>
        <Heading as="h2">Welcome, {user['username']}!</Heading>
      </Container>

      {(user['groups'].length > 0)
        ? <VStack className="home-groups" align="stretch" spacing="20px" padding="20px">
            {user['groups'].map(group => {
              return <Group group={group}></Group>
            })}
          </VStack>
        : <Container centerContent>
            <Popover>
              <PopoverTrigger>
                <Button>Create Group</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Create a New Group</PopoverHeader>
                <PopoverBody><CreateGroup /></PopoverBody>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger>
                <Button>Join Group</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Join a Group</PopoverHeader>
                <PopoverBody><JoinGroup /></PopoverBody>
              </PopoverContent>
            </Popover>
          </Container>
      }
    </Container>
  )
}

export default Home