import './App.css';
import React from "react"
import { BrowserRouter } from "react-router-dom";
import Navbar from '../component/NavBar';
import Content from '../component/Content';
import Footer from '../component/Footer';




const App = (props) => (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Content />
            <Footer/>
            
        </BrowserRouter>
    </div>
);


export default App;

