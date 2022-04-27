import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './routes/Home'
import Library from './routes/Library'
import Groups from './routes/Groups'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { axios } from 'axios'
import { ChakraProvider } from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals';

const currentUser =
  { 
    "name": "Harrison",
    "": "",
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
      }]
  }

const userName = currentUser.name
const userGroups = currentUser.groups

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App user={currentUser} />}>
          <Route index element={<Home user={userName} groups={userGroups}/>} />
          <Route path="library" element={<Library />} />
          <Route path="groups" element={<Groups />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
