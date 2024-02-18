import React from 'react'
import '../COMPONENTS/navBar_CSS.css'
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t } = useTranslation();
    return (
        <nav className='navBar__container'>
          <ul>
            <li><a href="#inicio">{t('Navbar.home')}</a></li>
            <li><a href="#sobre-mi">{t('Navbar.about')}</a></li>
            <li><a href="#proyects">{t('Navbar.proyects')}</a></li>
            <li><a href="#contacto">{t('Navbar.contact')}</a></li>
          </ul>
        </nav>
      );
}

export default NavBar