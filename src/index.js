import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Lpageblog } from './components/blog/Lpageblog'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header/>
    <Lpageblog/>
    <Routes>
    <Route path='/blog' element={<Lpageblog/>}/>
    </Routes>
  </Router>
);

