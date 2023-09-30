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

const captions = [
  "Product 1",
  "Product 2",
  "Product 3",
  "Product 4",
  "Product 5",
  "Product 6",
  "Product 7",
];


function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const displayedImages = [];
  for (let i = -2; i <= 2; i++) {
    const index = (currentIndex + i + images.length) % images.length;
    displayedImages.push({ image: images[index], caption: captions[index] });
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

 
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center">
        {displayedImages.map((item, index) => (
          <div  
            key={index}
            className={`transform ${
              index === 2
                ? 'scale-150 z-10 hover:border-2 rounded-xl border-orange-400'
                : index === 0 || index === 4
                ? index === 0
                  ? 'scale-50 z-0 translate-x-1/2'
                  : 'scale-50 -translate-x-1/2 z-[-1]'
                : 'scale-120 z-5 translate-x-0'
            }`}
          >
            <img
              src={item.image}
              alt={`Image ${index + 1}`}
              className={`w-full  rounded-xl h-60 ${
                index === 2 ? 'object-cover' : 'object-contain'
              }`}
            />
            {index === 2 && (
              <div className="absolute text-center bottom-0 left-0 right-0 p-2 bg-black text-white opacity-75">
                <p className="text-sm">{item.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center mt-20">
      <button
          onClick={handlePrevClick}
          className="w-8 h-8 mx-2 rounded-full focus:outline-none"
        >
          &lt;
        </button>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 mx-2 rounded-full focus:outline-none ${
              index === currentIndex
                ? 'bg-blue-500 w-3  ' 
                : 'bg-gray-300'
            }`}
          ></button>
        ))}
        <button
          onClick={handleNextClick}
          className="w-8 h-8 mx-2 rounded-full focus:outline-none"
        >
          &gt;
        </button>   
      </div>
    </div>
  );
}

export default ImageCarousel;
