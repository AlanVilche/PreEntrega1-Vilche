import React from 'react'
import './LogoWidget.css'


    const imgLogo ="https://w7.pngwing.com/pngs/15/64/png-transparent-logo-3d-technology-business-technology-electronics-text-logo.png"

function LogoWidget() {
  return (
    <div>           
            <img className='imgLogo' title='Electrónica 3D' src={imgLogo} alt='Carrito'></img>
    </div>
  )
}

export default LogoWidget