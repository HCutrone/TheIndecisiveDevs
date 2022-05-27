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
  Grid,
  GridItem,
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
      <Container className="home-header">
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
          // <VStack className="home-groups" align="stretch" spacing="20px" padding="20px">
          //   {groups.map(group => {
          //     return <Group group={group}></Group> // use the group name to fetch the group data from the db
          //   })}
          // </VStack>
          <Grid autoColumns autoRows gap={4} mt={4}>
            {groups.map(group => {
              const url = "/Group/" + JSON.stringify(group);
              return <Link to={encodeURI(url)} ><GridItem><Group group={group}></Group></GridItem></Link> // use the group name to fetch the group data from the db
            })}
          </Grid>
        : <></>
      }

    </Container>
  )
}

export default Home