// import React, { useState, useEffect } from 'react';
// // import { Carousel } from 'react-responsive-carousel';
// // import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import {Carousel} from '3d-react-carousal';

// let images = [
//     <img  src="https://picsum.photos/800/300/?random" alt="1" />,
//     <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
//     <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
//     <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
//     <img src="https://picsum.photos/800/304/?random" alt="5" />   
// ];

// function ImgCarousel () {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// //     }, 3000);

// //     return () => {
// //       clearInterval(interval);
// //     };
// //   }, []);

// //   const goToPrevious = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
// //   };

// //   const goToNext = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// //   };

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="relative">
//     {/* <Carousel selectedItem={currentIndex} showThumbs={false} showStatus={false} showArrows={true}>
//       {images.map((image, index) => (
//         <div key={index}>
//           <img
//             src={image}
//             alt={`Image ${index}`}
//             className="max-w-2xl h-60"
//           />
//         </div>
//       ))}
//     </Carousel> */}

//     <Carousel slides = {images} autoplay={true} interval={3000} arrows={true}/>

//     {/* <button className="prev-button" onClick={handlePrev}>
//       Prev
//     </button>
//     <button className="next-button" onClick={handleNext}>
//       Next
//     </button> */}
//   </div>
//   );
// };

// export default ImgCarousel;


import React, { useState, useEffect } from 'react';

const images = [
  "https://picsum.photos/800/300/?random",
  "https://picsum.photos/800/301/?random",
  "https://picsum.photos/800/302/?random",
  "https://picsum.photos/800/303/?random",
  "https://picsum.photos/800/304/?random",
  "https://picsum.photos/800/305/?random",
  "https://picsum.photos/800/306/?random",
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  const displayedImages = [];
  for (let i = -2; i <= 2; i++) {
    const index = (currentIndex + i + images.length) % images.length;
    displayedImages.push(images[index]);
  }

  return (
      <div className="flex justify-center items-center">
    {displayedImages.map((image, index) => (
      <div
        key={index}
        className={`transform ${
          index === 2 ? 'scale-150 z-10 translate-x-0' : (index === 0 || index === 4 ? 'scale-50 z-0 translate-x-0  ' :'scale-120 z-5 translate-x-0')
        }`}
      >
        <img
          src={image}
          alt={`Image ${index + 1}`}
          className={`w-full h-full ${
            index === 2 ? 'object-cover' : 'object-contain'
          }`}
        />
      </div>
    ))}
  </div>

  );
}

export default ImageCarousel;