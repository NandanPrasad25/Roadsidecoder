import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


//fetch products
//Render them
//Add some styles with grid
//Using useEffect - Run the scroll change function and only fetch when scroll reaches a certain point
//Using page and params of the url ( limit ), we can limit the products per page and can increase the page when we reach the certaim scroll point

//Correction needed -
//Fetching only 10 product is working with limit, but i could not fetching more items and increase the limit set on reaching scroll point. Also there is restriction of limit=30 by API. So need around that.