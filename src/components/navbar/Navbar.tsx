import React from 'react'


function Navbar() {
 


  return (
    <>
     <div className='w-full bg-sky-400 text-white flex justify-center py-4 color-navbar'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmárcia do Lucas</div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Home</div>
              <div className='hover:underline'>Categoria</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
