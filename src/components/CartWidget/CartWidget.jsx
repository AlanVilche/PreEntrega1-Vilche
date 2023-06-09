import React from 'react'
import './CartWidget.css'


    const imgCarrito ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR42DROwnP-byg2ISzytS6g_Bw4gKUYcmDNiQ&usqp=CAU"

function CartWidget() {
  return (
    <div>
            <img  className='imgCarrito' src={imgCarrito} alt='Carrito'></img>
            <p className='numero' title='Artículos del Carrito'>10</p>
    </div>
  )
}

export default CartWidget