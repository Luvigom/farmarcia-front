import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
 


  return (
    <div className='navbar-container'>
     <div className='w-full bg-[#005BBE] text-white flex justify-center py-6 color-navbar'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia do Lucas</Link>

            <div className='flex gap-6'>
            <Link to='/home' className='text-1x1 font-bold uppercase nav-link'>Home </Link>
              <Link to='/categorias' className='text-1x1 font-bold uppercase nav-link'>Categorias</Link>
              <Link to='/cadastrarCategoria' className='text-1xl font-bold uppercase nav-link'>Cadastrar categoria</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar
