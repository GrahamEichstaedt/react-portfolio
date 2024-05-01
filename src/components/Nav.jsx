import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({setInComponent}) => {

        return (
                <nav className='nav'>
                        
                        <ul className='top-nav'>
                                <li 
                                        className='nav-item'
                                        onClick={() => (
                                                setInComponent(true)
                                        )}

                                >
                                        <Link to="/" className='nav-link'>
                                        <i className="fa-solid fa-laptop-code"></i>{' '}Home
                                        </Link>
                                </li>
                                <li 
                                        className='nav-item'
                                        onClick={() => (
                                                setInComponent(true)
                                        )}
                                >
                                        <Link to="/About" className='nav-link'>
                                                About
                                        </Link>
                                </li>
                                <li 
                                        className='nav-item'
                                        onClick={() => (
                                                setInComponent(true)
                                        )}
                                >
                                        <Link to="/Skills" className='nav-link'>
                                                Skills
                                        </Link>
                                </li>
                                <li 
                                        className='nav-item'
                                        onClick={() => (
                                                setInComponent(true)
                                        )}        
                                >
                                        <Link to='/Projects' className='nav-link'>
                                                Projects
                                        </Link>
                                </li>
                                <li 
                                        className='nav-item'
                                        onClick={() => (
                                                setInComponent(true)
                                        )}        
                                >
                                        <Link to='/Experience' className='nav-link'>
                                                Experience
                                        </Link>
                                </li>
                                <li 
                                        className='nav-item'
                                        onClick={() => (
                                                setInComponent(true)
                                        )}        
                                >
                                        <Link to="/Contact"
                                        className="nav-link"
                                        >
                                                Contact Me!
                                        </Link>
                                </li>
                                
                        </ul>
                </nav>
        );
}

export default Nav;