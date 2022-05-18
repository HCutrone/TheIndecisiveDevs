import './Routes.css'
import React from 'react'
import Group from '../components/Group.js'
import { Container, VStack, Heading } from '@chakra-ui/react'

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
        : <p>Create or Join a Group!</p>
      }
    </Container>
  )
}

export default Home