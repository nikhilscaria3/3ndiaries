import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Mainlayout from './layout/Mainlayout';


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="noise-overlay"></div>
      <div className="particles-bg"></div>

      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Mainlayout />} >
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            </Route>
          </Routes>
        </Router>

      )}
    </>
  );
}

export default App;
