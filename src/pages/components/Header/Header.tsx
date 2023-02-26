import { useEffect, useState } from 'react';

import Image from 'next/image';

import { headerLinks } from './data';

import HeaderDrawer from './components/HeaderDrawer/HeaderDrawer';

import scss from './Header.module.scss';

import logoImg from './images/logo.png';
import BurguerIcon from './images/menu-hamburguer.svg';

function Header() {
  const [y, setY] = useState(0);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const containerClass = [scss.container];

  const onScroll = () => {
    const currentScroll = window.pageYOffset;
    setY(currentScroll);
  };

  const renderLogo = () => (
    <div className={scss.imgWrapper}>
      <Image src={logoImg} className={scss.img} fill alt="Logo da Quality Ergonomia" />
    </div>
  );

  const renderLinks = () =>
    headerLinks.map((link) => (
      <li key={link.id} className={scss.linkWrapper}>
        <a href={link.href} className={scss.link}>
          {link.label}
        </a>
      </li>
    ));

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (y) containerClass.push(scss.scrolled);

  return (
    <div className={containerClass.join(' ')}>
      <nav className={scss.content}>
        {renderLogo()}
        <ul className={scss.linksContainer}>{renderLinks()}</ul>
      </nav>
      <nav className={scss.mobileContent}>
        {renderLogo()}
        <button
          type="button"
          className={scss.iconButton}
          onClick={() => {
            setDrawerVisible(true);
          }}
          aria-label="abrir menú"
        >
          <BurguerIcon />
        </button>
        <HeaderDrawer isOpen={drawerVisible} onClose={() => setDrawerVisible(false)} />
      </nav>
    </div>
  );
}

export default Header;
