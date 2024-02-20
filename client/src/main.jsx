import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/header/header.jsx'
import SideBar from './components/sidebar/SideBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header />
    <SideBar /> */}
    <App />
  </React.StrictMode>,
)
