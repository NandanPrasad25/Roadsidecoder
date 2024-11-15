import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


//Fetch products
//Render the products using map method
//style the the products
//Configeration of page variable ans using slice to divide products in pages
//Create pagination UI and style them
//A function to set the page on click
//conditional classname for selected page
//forward and back functionality with disappear the buttons after limit cross
//If app is backend driven we dont know how many products there, so we use skip in api params
