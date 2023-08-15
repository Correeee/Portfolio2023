import { BrowserRouter, HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/screens/home/home';
import Footer from './components/footer/footer';
import Works from './components/screens/works/works';
import About from './components/screens/about/about';
import Contact from './components/screens/contact/contact';
import { AnimatePresence } from 'framer-motion';
import Project from './components/screens/project/project';
import { useEffect, useState } from 'react';
import Loader from './components/screens/loader/loader';


export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const App = document.getElementById('App') // id of the parent
    App.scrollTo(0, 0)

  }, [pathname]);

  return null;
}

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000); 
  }, []);


  return (
    <HashRouter>
      {
        loading ?
          <div className="App" id='App'>
            <ScrollToTop />
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
          :
          <Loader />
      }
    </HashRouter>
  );
}

export default App;
