import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom"

// Pages
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Technology from './Pages/Technology'
import Contact from './Pages/Contact'

// Sub Pages
import Nero from './Pages/Nero'
import Bubble from './Pages/Bubble'
import Drizzle from './Pages/Drizzle'
import Thunder from './Pages/Thunder'
import Airwell from './Pages/Airwell'

// Footer
// import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Product' element={<Product />}/>
          <Route path='/Technology' element={<Technology />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/Nero' element={<Nero />}/>
          <Route path='/Bubble' element={<Bubble />}/>
          <Route path='/Drizzle' element={<Drizzle />}/>
          <Route path='/Thunder' element={<Thunder />}/>
          <Route path='/Airwell' element={<Airwell />}/>
          {/* <Route path='/Footer' element={<Footer />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
