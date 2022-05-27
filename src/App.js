import { useState, useEffect } from 'react'
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

function App() {
  // localStorage.clear();
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))
                                                                : null);
  const handleLogIn = async (googleData) => {
    // console.log("Logging in with token")
    // console.log(googleData.getAuthResponse().id_token)

    // send the id token to the server for authentication, and return the user
    const loggingInUser = await api.googleSignIn(googleData.getAuthResponse().id_token);

    // console.log("Got user:")
    // console.log(JSON.parse(loggingInUser['data']['user']))

    // the googleSignIn returns either a new user or the existing user data from the DB, so lets use it
    const userData = JSON.parse(loggingInUser['data']['user'])
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/home');
  }
  
  const handleLogOut = () => {
    setUser(null);
    localStorage.removeItem('user')
    navigate('/');
  }

  // when the user state changes (log in/out), change the page
  useEffect(() => {
    if (user) {
      navigate('/home')
    } else {
      navigate('/')
    }
    // line 50 was [navigate, user]
  }, [user])

  return (
    <Routes>
      <Route path="/" element={
        <body>
          <Nav user={user} handleLogIn={handleLogIn} handleLogOut={handleLogOut} />
          <Container className="app-container" maxW="100vw" centerContent>
            {user ? <></> :
              /* if there's no user, load the welcome/sign-in prompt */
              /* we need the tertiary because the elements in this body appear on every page */
              /* thus, when we sign in, we want the welcome text to go away but everything else to stay */
              <Container className="app-header">
                <Heading as="h1">Novellas for the Fellas</Heading>
                <Heading as="h2">Welcome, please <LogIn btnText="Log-In or Sign-Up"/> to get started!</Heading>
              </Container>}
          </Container>
          <Outlet />
        </body>
      }>
        <Route path="home" element={<Home user={user} />} />
        <Route path="library" element={<Library />} />
        <Route path="groups" element={<Groups />} />
        <Route path="chat" element={<Chat />} />
      </Route>
    </Routes>
  );
}

export default App;