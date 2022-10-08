import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './generalStyle.css'
/*
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
import { Varianza } from './components/calc/Varianza/Varianza';
*/
//Importando todos los componentes de forma DINAMICA para las rutas 

const Header = lazy(() => import('./components/Header'));
const Footgeneral = lazy(() => import('./components/Footgeneral'));
const Lpageblog = lazy(() => import('./components/blog/Lpageblog'));
const TypesVariables = lazy(() => import('./components/blog/Partes/TypesVariables/TypesVariables'));
const Operators = lazy(() => import('./components/blog/Partes/Operators/Operators'));
const Parameters = lazy(() => import('./components/blog/Partes/Parameters/Parameters'));
const Functions = lazy(() => import('./components/blog/Partes/Functions/Functions'));
const Sentencesifelse = lazy(() => import('./components/blog/Partes/Sentencesifelse/Sentencesifelse'));
const Loops = lazy(() => import('./components/blog/Partes/Loops/Loops'));
const Lpage = lazy(() => import('./components/Lpage'));
const Mtcgeneral = lazy(() => import('./components/calc/MTC/Mtcgeneral'));
const Varianza = lazy(() => import('./components/calc/Varianza/Varianza'));
const Verpdf = lazy(() => import('./components/blog/PDF/Verpdf'));
const Fallback = lazy(() => import('./components/Fallback'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Suspense  fallback={<Fallback/>}>
      <Router>
        <Header />
        <Suspense fallback={<Fallback/>}>
        <Routes>
          <Route index element={<Lpage />} />
          <Route path='/blog' element={<Lpageblog />} />
          <Route path='/blog/tiposvariables' element={<TypesVariables />} />
          <Route path='/blog/parametrosvalorreferencia' element={<Parameters />} />
          <Route path='/blog/operadores' element={<Operators />} />
          <Route path='/blog/funciones' element={<Functions />} />
          <Route path='/blog/pfds' element={<Verpdf />} />
          <Route path='/blog/ifelse' element={<Sentencesifelse />} />
          <Route path='/blog/bucles' element={<Loops />} />
          <Route path='/mtc' element={<Mtcgeneral />} />
          <Route path='/varianza' element={<Varianza />} />
        </Routes>
        </Suspense>
        <Footgeneral />
      </Router>
    </Suspense>
  </>
);

