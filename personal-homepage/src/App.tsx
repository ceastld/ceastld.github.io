import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.mdx';
import Pinch from './pages/Pinch.mdx';
import BetterClip from './pages/BetterClip.mdx';
import Learn2Control from './pages/Learn2Control.mdx';
import './App.css';

function App() {
  // 在GitHub Pages上使用HashRouter，本地开发使用BrowserRouter
  const Router = import.meta.env.PROD ? HashRouter : BrowserRouter;
  
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