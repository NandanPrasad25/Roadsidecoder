import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//install react-router-dom
//create router using createBrowserRouter();
//Provide that to the App component using RouterProvider component
//The add Pages to the router with specific path
//Add Outlet component to layout to define the place to display pages
//Add pages for post list and post comments which is dynamic pages
