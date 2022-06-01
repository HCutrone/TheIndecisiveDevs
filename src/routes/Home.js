import './Routes.css'
import React from 'react'
import { useState }  from 'react'
import api from '../api'
import { Link } from 'react-router-dom'
import Group from '../components/Group.js'
import CreateGroup from '../components/CreateGroup'
import JoinGroup from '../components/JoinGroup'
import { 
  Container,
  VStack,
  Heading,
  Button,
  HStack,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton, } from '@chakra-ui/react'

const handleJoinGroup = () => {
  console.log("joining group!")
}
// TODO: make group grid an actual grid
const Home = ({ user, groups, handleCreateGroup }) => {
  return (
    <Container className="home" maxW="100vw" centerContent>
      <Container centerContent>
        <Heading as="h1">Novellas for the Fellas</Heading>
        <Heading as="h2">Welcome, {user['username']}!</Heading>
      </Container>

      <HStack mt={4}>
        <Popover>
          <PopoverTrigger>
            <Button>Create Group</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Create Your Own Group!</PopoverHeader>
            <PopoverBody><CreateGroup handleCreateGroup={handleCreateGroup} /></PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <Button>Join Group</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Use a Link Code to Join Your Friends!</PopoverHeader>
            <PopoverBody><JoinGroup /></PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>

      {(groups.length > 0)
        ? 
          <Flex autoColumns autoRows gap={4} mt={4} wrap='wrap' align='center' justify='center'>
            {groups.map(group => {
              const url = "/Group/" + JSON.stringify(group);
              return <Link to={encodeURI(url)} ><Group group={group}></Group></Link> // use the group name to fetch the group data from the db
            })}
          </Flex>
        : <></>
      }

    </Container>
  )
}

export default Home