import React from 'react';
import { Link } from 'react-router-dom';
import { pages, externalLinks } from '../../config';
import { useGlobalContext } from '../../globalContext';
import './Navbar.scss';

// image
import logo from '../../assets/images/common/tng_logo.svg';


const Navbar = () => {
    const { state, dispatch } = useGlobalContext();
    const { appShowNavLogo } = state;

    const goToExternalLink = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className='navbar-container'>
            <div className='pages'>
                {pages.map((item) => {
                    return <Link className='page' to={item.path}>{item.name}</Link>
                })}
            </div>
            <div className={`company-logo ${appShowNavLogo ? 'show' : ''}`}>
                <img src={logo} alt='logo' />
            </div>
            <div className='actions'>
                {externalLinks.map((item) => {
                    return <button className='page' onClick={() => goToExternalLink(item.path)}>{item.name}</button>
                })}
            </div>
        </div>
    );
};

export default Navbar;
