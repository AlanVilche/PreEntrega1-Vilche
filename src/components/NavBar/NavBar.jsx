import CartWidget from '../CartWidget/CartWidget'
import LogoWidget from '../LogoWidget/LogoWidget'
import './NavBar.css'

const NavBar = () => {
  return (
  
    <header>
     
        <div className='div'>
          <LogoWidget></LogoWidget>        
            <h1>Electrónica 3D</h1> 
          </div>
        <nav>
            <ul >
                <li>Insumos</li>
                <li>¿Quiénes Somos?</li>
                <li>Contacto</li>
            </ul>
        </nav>

        <CartWidget/>
       
    </header>
  )
}

export default NavBar