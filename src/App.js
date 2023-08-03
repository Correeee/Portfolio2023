import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/screens/home/home';
import Footer from './components/footer/footer';
import Works from './components/screens/works/works';
import About from './components/screens/about/about';
import Contact from './components/screens/contact/contact';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';


function App() {

  const [scrollTop, setScrollTop] = useState(0)

  const handlerNav = (e) => {
    const scrollY = e.currentTarget.scrollTop
    setScrollTop(scrollY)
  }


  return (
    <div className="App" onScroll={handlerNav}>
      <BrowserRouter>
        <Navbar scrollTop={scrollTop} />
        <AnimatePresence mode='wait' >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/works' element={<Works />} />
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
