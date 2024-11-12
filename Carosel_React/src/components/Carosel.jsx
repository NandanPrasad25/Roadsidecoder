/* eslint-disable no-unused-vars */

import { useEffect, useRef, useState } from "react";

/* eslint-disable react/prop-types */
const Carosel = ({
  isLoading = false,
  onImageClick=((image) => {}),
  images = [],
  imageLimit = images.length,
  imagePerSlide = 2,
//   customPrevButton = (goToPrev) => {return <button className="btn prev" onClick={goToPrev}>Prev</button>},
//   customNextButton = (goToNext) => {return <button className="btn next" onClick={goToNext}>Next</button>},
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    if (images.length > 0) {
      setCurrentIndex(0);
    }
  }, [images]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageLimit - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === imageLimit - 1 ? 0 : nextIndex + 1
    );
  };  

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="carosel" style={{ width: imgWidth  * imagePerSlide }}>
      <div className="image-container" style={{transform: `translateX(-${currentIndex * imgWidth}px)`}}>
        {images
          .slice(0, imageLimit > images.length ? images.length : imageLimit)
          .map((image) => (
            <img
              onLoad={() => setImgWidth(imageRef?.current?.offsetWidth)}
              onClick={() => onImageClick(image)}
              ref={imageRef}
              key={image.id}
              src={image.url}
              alt={image.title}
              className="image"
            />
          ))}
      </div>
      {/* {customPrevButton instanceof Function ? customPrevButton(goToPrev) : <button className="btn prev" onClick={goToPrev}>
        Prev
      </button>}
      {customNextButton instanceof Function ? customNextButton(goToNext) : <button className="btn next" onClick={goToNext}>
        Next
      </button>} */}
      <button className="btn prev" onClick={goToPrev}>
        Prev
      </button>
      <button className="btn next" onClick={goToNext}>
        Next
      </button>

    </div>
  );
};

export default Carosel;
