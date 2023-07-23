import Image from 'next/image';

import scss from './Footer.module.scss';

import LinkedinSVG from './images/linkedin.svg';
import logoImg from './images/logo.png';
import WhatsappSVG from './images/whatsapp.svg';

import { headerLinks } from '../Header/data';

function Footer() {
  const renderLinks = () =>
    headerLinks.map((link) => (
      <li key={link.id} className={scss.linkWrapper}>
        <a href={link.href} className={scss.link}>
          {link.label}
        </a>
      </li>
    ));

  return (
    <section id="footer" className={scss.container}>
      <div className={scss.gradient} />
      <div className={scss.content}>
        <div className={scss.imgWrapper}>
          <Image src={logoImg} className={scss.img} fill alt="Logo da Quality Ergonomia" />
        </div>
        <div className={scss.iconWrapper}>
          <a href="/" className={scss.link}>
            <LinkedinSVG className={scss.icon} />
          </a>
          <a href="/" className={scss.link}>
            <WhatsappSVG className={scss.icon} />
          </a>
        </div>
      </div>
      <div className={scss.navContainer}>
        <ul className={scss.linksContainer}>{renderLinks()}</ul>
      </div>
    </section>
  );
}

export default Footer;
