import ImageCarousel from './components/Carousel';
import Navbar from './components/Navbar';
import TextComponent from './components/TextComp';

function App() {  
  return (
    <div >
      <Navbar />
     
      <TextComponent />
     
      <div className='mt-20'>
        <ImageCarousel />
      </div>
      
    </div>
  );
}

export default App;
