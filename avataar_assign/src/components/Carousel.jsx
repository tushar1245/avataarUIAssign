import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  'https://thumbs.dreamstime.com/z/career-growth-development-advancement-design-information-related-to-professional-d-illustration-isolated-white-105447871.jpg?w=768',
  'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*r_Rf_XgFzYMoS9vO.jpg',
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
    <Carousel selectedItem={currentIndex} showThumbs={false} showStatus={false} showArrows={true}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Image ${index}`}
            className="max-w-2xl h-60"
          />
        </div>
      ))}
    </Carousel>
    <button className="prev-button" onClick={handlePrev}>
      Prev
    </button>
    <button className="next-button" onClick={handleNext}>
      Next
    </button>
  </div>
  );
};

export default ImgCarousel;
