import { NavLink, Link } from "react-router-dom";
import { PATH } from "../../const";
import logo from '../../../asset/logo.svg'

import './Header.css';

const Header = () =>
    <header className='stan-header-wrapper' data-testid='stan-header'>
        <Link to={PATH.HOME}><img src={logo} alt="logo" className="stan-logo" /></Link>
        <nav>
            <NavLink to={PATH.HOME}>Home</NavLink>
            <NavLink to={PATH.TVSHOW}>TV Show</NavLink>
            <NavLink to={PATH.MOVIE}>Movies</NavLink>
        </nav>
    </header >

export default Header;