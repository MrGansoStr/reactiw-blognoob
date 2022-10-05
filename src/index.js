import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Navright } from './components/Navright';
import { Lpage } from './components/Lpage'
import { Carousel } from './components/blog/Carousel'
import { Lpageblog } from './components/blog/Lpageblog'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header/>
    <Routes>
    <Route path='/blog' element={<Lpageblog/>}/>
    </Routes>

  </Router>
);
