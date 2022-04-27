import './App.css';
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav.js'

function App({ user }) {
  return (
    <body>
      <Nav user={user} />
      <Outlet />
      {/* <div className="home-header">
        <h1>Novellas for the Fellas</h1>
        {user ? <h2>Welcome, {user}</h2> :
            <h2>Welcome, please <Link to="/Library">sign in</Link> or <Link to="/Groups">register</Link> to get started!</h2>}
      </div>
      <div className="home-groups">
        
      </div> */}
    </body>
  );
}

export default App;