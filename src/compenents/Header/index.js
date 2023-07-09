import logo from '../../assets/logo.svg'
import './header.scss'
import { Link } from "react-router-dom";


function Header() {
    return (
        <nav className='navbar'>
            <img src={logo} alt="Kasa" />
            <div className="links">
            <Link to='/'>Accueil</Link>
            <Link to='/about'>A propos</Link>
            </div>
            
        </nav>
    )
}

export default Header