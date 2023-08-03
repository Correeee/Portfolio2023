import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/screens/home/home';
import Footer from './components/footer/footer';
import Works from './components/screens/works/works';
import About from './components/screens/about/about';
import Contact from './components/screens/contact/contact';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Project from './components/screens/project/project';

function App() {



  return (
    <div className="App" onLoad={() => window.scrollTo(0, 500)}>
      <BrowserRouter>
        <Navbar />
        <AnimatePresence mode='wait' >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/works' element={<Works />} />
            <Route path='/works/:pid' element={<Project />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
