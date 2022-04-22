import './App.css';
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav.js'

function App() {
  return (
    <body>
      <Nav />
      <Outlet />
    </body>
  );
}

export default App;