
import './App.css';
import lamp1 from './images/lamp1.png'; // Убедитесь, что путь правильный
import lamp2 from './images/lamp2.png'; // Убедитесь, что путь правильный
import lamp3 from './images/lamp3.png'; // Убедитесь, что путь правильный
import { useState } from 'react';
function App() {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className="App">
      <div className="lamp">
        <img src={lamp1} alt="Lamp 1" className="lamp-image1" />
        <img src={lamp2} alt="Lamp 2" style={{filter: isHovered ? "brightness(200%) blur(1px)" : "brightness(1%)"}} className="lamp-image2" />
        <img 
        onMouseEnter={()=> setIsHovered(true)} 
        onMouseLeave={()=> setIsHovered(false)} 
        src={lamp3} alt="Lamp 3" className="lamp-image3" />
      </div>
    </div>
  );
}


export default App;
