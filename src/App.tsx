import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import ListaCategorias from './components/categoria/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';

function App() {
  return (
    <>
<BrowserRouter>
        <Navbar />
        <div className='min-h-[90vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/cadastrarCategoria" element={<FormularioCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
);
}
export default App;