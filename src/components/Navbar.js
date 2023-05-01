import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src='src/images/img-1.jpg' type='image/jpg'/>
                        {/* <i class='fab fa-typo3' /> */}
                    </Link>

                    

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                A PRÓ-VIDA
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/vacinas'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                VACINAS
                            </Link>
                        </li>
                        
                        <li className='nav-item'>
                            <Link
                                to='/services'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                TRATAMENTOS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/medicina'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                MEDICINA INTEGRATIVA
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                CONTATO
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>CONTATO</Button>}
                </div>
            </nav>
        </>
    );
}



export default Navbar;