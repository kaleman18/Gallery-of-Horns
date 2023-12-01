/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './data.json'
import SelectedBeast from './components/SelectedBeast.jsx'




function App() {
  const[renderBeast, setrenderBeast] = useState();
  const[beast, setBeast] = useState(Data);


  return(
    <>
    <Header/>
    <Gallery
    allBeast={Data}
    />
    <SelectedBeast
    data={renderBeast}
    />
    <Footer/>
    </>
  )
}

export default App;