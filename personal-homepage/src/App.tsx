import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.mdx';
import Pinch from './pages/Pinch.mdx';
import BetterClip from './pages/BetterClip.mdx';
import Learn2Control from './pages/Learn2Control.mdx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pinch" element={<Pinch />} />
          <Route path="/betterclip" element={<BetterClip />} />
          <Route path="/learn2control" element={<Learn2Control />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;