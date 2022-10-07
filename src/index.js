import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './generalStyle.css'
import { Header } from './components/Header';
import { Footgeneral } from './components/Footgeneral'
import { Lpageblog } from './components/blog/Lpageblog'
import { TypesVariables } from './components/blog/Partes/TypesVariables/TypesVariables'
import { Operators } from './components/blog/Partes/Operators/Operators'
import { Parameters } from './components/blog/Partes/Parameters/Parameters';
import { Functions } from './components/blog/Partes/Functions/Functions'
import { Verpdf } from './components/blog/PDF/Verpdf'
import { Setencesifelse } from './components/blog/Partes/Sentencesifelse/Sentencesifelse';
import { Loops } from './components/blog/Partes/Loops/Loops';
import { Lpage } from './components/Lpage';
import { Mtcgeneral } from './components/calc/MTC/Mtcgeneral';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route index element={<Lpage/>}/>
      <Route path='/blog' element={<Lpageblog />} />
      <Route path='/blog/tiposvariables' element={<TypesVariables />} />
      <Route path='/blog/parametrosvalorreferencia' element={<Parameters />} />
      <Route path='/blog/operadores' element={<Operators />} />
      <Route path='/blog/funciones' element={<Functions />} />
      <Route path='/blog/pfds' element={<Verpdf />} />
      <Route path='/blog/ifelse' element={<Setencesifelse />} />
      <Route path='/blog/bucles' element={<Loops />} />
      <Route path='/mtc' element={<Mtcgeneral/>}/>
    </Routes>
    <Footgeneral />
  </Router>
);

