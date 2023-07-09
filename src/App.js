import './App.css';
import Header from './compenents/Header';
import Footer from './compenents/Footer';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound';
import About from './About';
import LogementDetails from './LogementDetails';



function App() {
  
  return (
    <Router>
      <div className='App'>
      <Header />
      <div>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/about' element={<About />} />
          <Route exact path="/logement/:id" element={<LogementDetails />} />
          <Route exact path='*' element={<NotFound />}/>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
    </Router>
    
  )
  
}

export default App;
