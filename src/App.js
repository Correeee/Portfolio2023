import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/screens/home/home';
import Footer from './components/footer/footer';
import Works from './components/screens/works/works';
import About from './components/screens/about/about';
import Contact from './components/screens/contact/contact';
import { AnimatePresence } from 'framer-motion';
import Project from './components/screens/project/project';
import { useEffect } from 'react';


export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const App = document.getElementById('App') // id of the parent
    App.scrollTo(0, 0)

  }, [pathname]);

  return null;
}

function App() {



  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App" id='App'>
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
      </div>
    </BrowserRouter>
  );
}

export default App;
