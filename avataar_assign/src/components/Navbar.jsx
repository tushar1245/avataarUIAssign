// Navbar.js
import React, { useState, useEffect } from 'react';

const items = [
  'Home',
  'Electronics',
  'Books',
  'Music',
  'Furniture',
  'Music',
  'Clothing',
  'Games',
  'Speakers',
  'Cars',
];

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);
  const [visibleItems, setVisibleItems] = useState([]);
  const [hiddenItems, setHiddenItems] = useState([]);



  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.outerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    
    let numVisibleItems = 10; 
    if (windowWidth > 1300 && windowWidth < 1400) {
      numVisibleItems = 9;
    }
    else if (windowWidth < 1300 && windowWidth >= 1250) {
      numVisibleItems = 8;
    }
    else if (windowWidth < 1250 && windowWidth >= 1160) {
      numVisibleItems = 7;
    }
    else if (windowWidth < 1160 && windowWidth >= 1060) {
      numVisibleItems = 6;
    }
    else if (windowWidth < 1060 && windowWidth >= 800) {
      numVisibleItems = 5;
    }
    else if (windowWidth < 800 && windowWidth >= 500) {
      numVisibleItems = 4;
    }
    else if (windowWidth < 500 && windowWidth >= 300) {
      numVisibleItems = 3; 
    }
    else if (windowWidth < 300 ) {
      numVisibleItems = 2; 
    }
   
    setVisibleItems(items.slice(0, numVisibleItems));
    setHiddenItems(items.slice(numVisibleItems));

    // console.log(windowWidth);
    
  }, [windowWidth]);


  const textSizeClass = windowWidth <= 768 ? 'text-xl' : 'text-2xl';

  return (
    <nav className="bg-gray-800  flex items-center fixed p-4 left-0 right-0 top-0">
    <div className={`text-lg text-white flex items-center ${textSizeClass}`}>
        <span className="text-white font-bold mr-2">E-COMM</span>
    </div>

    <div className="flex ml-10">
      {visibleItems.map((item, index) => (
        <a
          key={index}
          href="#"
          className="text-white hover:bg-gray-700 hover:text-white px-3 mx-3 py-2 rounded-md text-sm font-normal"
        >
          {item}
        </a>
      ))}
    </div>

      {hiddenItems.length > 0 && (
        <div className="relative group ml-2">
          <div className="flex justify-center space-x-2 ">
            <div className="text-white cursor-pointer text-sm font-normal">More</div>
            <svg
              className="w-4 h-5 inline-block ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              aria-hidden="true"
            >
            <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
            </svg>
          </div>
          <div className="hidden group-hover:block absolute mt-0 space-y-2 bg-gray-800 border border-gray-600">
            {hiddenItems.map((item, index) => (
              <a>
              <div key={index} className="text-white p-2 w-auto hover:bg-gray-700 hover:text-white">
                {item}
              </div>
              </a>
            ))}
            
          </div>
        
        </div>
      )}

       <label class="transform translate-x-1/2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                    height="30" viewBox="0 0 30 30">
                    <path
                        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                    </path>
                </svg>
            </span>
            <input
                class="w-auto bg-white placeholder:font-italitc border border-slate-300 rounded-full py-2 pl-10 pr-4 focus:outline-none"
                placeholder="Search Something..." type="text" />
        </label>
    </nav>
  );
};

export default Navbar;
