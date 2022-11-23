import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import reportWebVitals from './reportWebVitals'

import Footer from './components/Footer/footer.js'
import Homepage from './pages/Homepage/homepage.js'
import Header from './components/Header/header.js'
import Login from './pages/Login/login.js'
import UserProfile from './pages/User-Profile/userProfile'
import { Provider } from 'react-redux'
import store from "./redux/store.js"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/profile' element={<UserProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider>
)

reportWebVitals()
