import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from "react-router";
import Body from './components/Body';
import Login from './components/Login';
import Profile from './components/Profile';
import Feed from './components/Feed';
import appStore from './utils/appstore';
import { Provider } from 'react-redux'
import Connections from './components/Connections';
import Requests from './components/Requests';
import Pagination from './components/pagination';


function App() {

  

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/page" element={<Pagination />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    

    </>
  )
}

export default App
