
import './App.css';
import lamp1 from './images/lamp1.png'; // Убедитесь, что путь правильный
import lamp2 from './images/lamp2.png'; // Убедитесь, что путь правильный
import lamp3 from './images/lamp3.png'; // Убедитесь, что путь правильный

function App() {
  return (
    <div className="App">
      <div className="lamp">
        <img src={lamp1} alt="Lamp 1" className="lamp-image" />
        <img src={lamp2} alt="Lamp 2" className="lamp-image" />
        <img src={lamp3} alt="Lamp 3" className="lamp-image" />
      </div>
    </div>
  );
}


export default App;
