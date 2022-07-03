import './App.css';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Option from './components/pages/Option';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/aboutus' element={<AboutUs />}/>
          <Route path='/option' element={<Option />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
