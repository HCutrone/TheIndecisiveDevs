import { useState } from 'react'
import './App.css';
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav.js'
import Home from './routes/Home'
import Library from './routes/Library'
import Groups from './routes/Groups'
import Chat from './routes/Chat'
import LogIn from './components/LogIn'
import { Container, Heading } from '@chakra-ui/react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import api from './api'

const users = [
  {
    "name": "Harrison",
    "groups":
      [{
        "name": "The Indecisive Devs",
        "currentStory": "The Tell Tale Heart",
        "author": "Edgar Allen Poe",
        "members": 4,
        "storiesRead": 0,
        "sessionLength": "1 week"
      },
      {
        "name": "Group Name",
        "currentStory": "Current Story",
        "author": "Author",
        "members": 3,
        "storiesRead": 3,
        "sessionLength": "2 weeks"
      },
      {
        "name": "New Group",
        "currentStory": "idk another book",
        "author": "me :)",
        "members": -1,
        "storiesRead": 9999,
        "sessionLength": 21
      }]
  }]
const currentUser = users[0]
const currentUserGroups = currentUser.groups

function App() {
  localStorage.clear();
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))
                                                                : null);
  const [username, setUsername] = useState('');
  const [userID, setUserID] = useState(null);
  // const [userGroups, setUserGroups] = useState(null);

  const handleLogIn = async (googleData) => {
    setUserID(googleData.getAuthResponse().id_token);
    setUsername(googleData.profileObj.name);

    const loggingInUser = await api.googleSignIn(JSON.stringify({ token: userID }));
    const userData = loggingInUser.json()['user']
    // const userData = await api.getOrCreateUserByID(JSON.stringify({ id: loggingInUser['sub']}));
    setUser(userData);
    localStorage.setItem('user', userData);

    navigate('/home');
  }
  
  const handleLogOut = () => {
    setUsername('');
    setUserID(null);
    setUser(null);
    localStorage.removeItem('user')
    navigate('/');
  }

  return (
    <Routes>
      <Route path="/" element={
        <body>
          <Nav user={user} handleLogIn={handleLogIn} handleLogOut={handleLogOut} />
          <Container className="app-container" maxW="100vw" centerContent>
            {user ? <></> :
              /* if there's no user, load the welcome/sign-in prompt */
              <Container className="app-header">
                <Heading as="h1">Novellas for the Fellas</Heading>
                <Heading as="h2">Welcome, please <LogIn btnText="Log-In or Sign-Up"/> to get started!</Heading>
              </Container>}
          </Container>
          <Outlet />
        </body>
      }>
        {/* <Route path="home" element={user ? <Home userName={user['name']} groups={user['groups']}/>
                                          : <Home />} /> */}
        <Route path="home" element={<Home userName={"USERNAME"} groups={[]}/>} />
        <Route path="library" element={<Library />} />
        <Route path="groups" element={<Groups />} />
        <Route path="chat" element={<Chat />} />
      </Route>
    </Routes>
  );
}

export default App;