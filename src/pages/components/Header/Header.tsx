import { useEffect, useState } from 'react';

import Image from 'next/image';

import { headerLinks } from './data';

import scss from './Header.module.scss';

import logoImg from './images/logo.png';

function Header() {
  const [y, setY] = useState(0);
  const containerClass = [scss.container];

  const onScroll = () => {
    const currentScroll = window.pageYOffset;
    setY(currentScroll);
  };

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
      <div className={scss.content}>
        <div className={scss.imgWrapper}>
          <Image src={logoImg} className={scss.img} fill alt="Logo da Quality Ergonomia" />
        </div>
        <ul className={scss.linksContainer}>{renderLinks()}</ul>
      </div>
    </div>
  );
}

export default Header;
