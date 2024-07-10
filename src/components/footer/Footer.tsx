import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import './Footer.css';

function Footer() {



  return (
    <div className="footer-container">
          <div className="container flex flex-col items-center py-5">
            <p className='text-xl font-bold'>Farmácia | Copyright: Lucas Ltda - 2024 </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-4 social-icons'>
              <LinkedinLogo size={45} weight='bold' />
              <InstagramLogo size={45} weight='bold' />
              <FacebookLogo size={45} weight='bold' />
            </div>
          </div>
        </div>
  )
}

export default Footer