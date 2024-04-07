import './App.css';
import Navbarbt from './components/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Howdoesitwork from './pages/HowDoesItWork/Howdoesitwork';
function App() {
  return (
    <div className="App">
    
       <Navbarbt />
      <Routes>
<Route path="/" element={<Home />} />
<Route path="/About" element={<About />} />
<Route path="/Contact" element={<Contact />} />
<Route path="/Howdoesitwork" element={<Howdoesitwork />} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
