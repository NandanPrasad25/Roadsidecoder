import { useEffect, useState } from "react";
import Carosel from "./components/carosel";
import "../src/App.css";

// https://jsonplaceholder.typicode.com/photos?_limit=3

function App() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const fetchImages = async (imageLimit) => {
    setLoading(true)
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${imageLimit}`);
      console.log(response)
      const data = await response.json();
      console.log(data)
      setImages(data)

    } catch(error) {
      console.log("Error fetching images", error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages(8);
  }, [])


  return (
    <div className="carosel-container">
      <Carosel
        isLoading={loading}
        images={images}
        imageLimit={images.length}
        imgPerSlide={3}
        customPrevButton={() => {}}
        customNextButton={() => {}}
      />
    </div>
  );
}

export default App;


//The complete images are not loading
//The optional button component is not working
//The onClick functionality index parameter is not defined ?