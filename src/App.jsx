import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Mainlayout from './layout/Mainlayout';
import Collections from './pages/Collections';
import CustomizationPage from './pages/CustomizationPage';
import Contact from './pages/Contact';


function App() {
  return (
    <>
      <div className="noise-overlay"></div>
      <div className="particles-bg"></div>
      <Router>
        <Routes>
          <Route path="/" element={<Mainlayout />} >
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/customization" element={<CustomizationPage />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
