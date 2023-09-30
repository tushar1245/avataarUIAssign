import ImageCarousel from './components/Carousel';
//import ImgCarousel from './components/Carousel';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <Navbar />
      <div className='mt-40'>
      {/* <ImgCarousel /> */}
      <ImageCarousel />
      </div>
      
    </div>
  );
}

export default App;
