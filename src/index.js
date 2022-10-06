import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './generalStyle.css'
import { Header } from './components/Header';
import { Footgeneral } from './components/Footgeneral'
import { Lpageblog } from './components/blog/Lpageblog'
import { TypesVariables } from './components/blog/Partes/TypesVariables/TypesVariables'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header/>
    <Routes>
      <Route path='/blog' element={<Lpageblog/>}/>
      <Route path='/blog/tiposvariables' element={<TypesVariables/>}/>
    </Routes>
    <Footgeneral/>
  </Router>
);

