import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from '3d-react-carousal';

let images = [
    <img  src="https://picsum.photos/800/300/?random" alt="1" />,
    <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
    <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
    <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
    <img src="https://picsum.photos/800/304/?random" alt="5" />   
];

function ImgCarousel () {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
    {/* <Carousel selectedItem={currentIndex} showThumbs={false} showStatus={false} showArrows={true}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Image ${index}`}
            className="max-w-2xl h-60"
          />
        </div>
      ))}
    </Carousel> */}

    <Carousel slides = {images} autoplay={true} interval={3000} arrows={true}/>

    {/* <button className="prev-button" onClick={handlePrev}>
      Prev
    </button>
    <button className="next-button" onClick={handleNext}>
      Next
    </button> */}
  </div>
  );
};

export default ImgCarousel;
