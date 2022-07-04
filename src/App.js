import './App.css';
import Footer from './components/Footer';
/**BrowserRouter */
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Option from './components/pages/Option';
/**Dark Theme */
import {useState} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles} from './components/pages/theme.js'


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor}
`

function App() {

  const [theme, setTheme] = useState("light")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  } 

  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <button onClick={() => themeToggler()}>Change Theme</button>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/aboutus' element={<AboutUs />}/>
              <Route path='/option' element={<Option />}/>
            </Routes>
        </BrowserRouter>
      <Footer />
      </StyledApp>
      </ThemeProvider>
    </div>
  );
}

export default App;
