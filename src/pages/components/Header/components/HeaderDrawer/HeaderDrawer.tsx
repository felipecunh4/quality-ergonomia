import Image from 'next/image';

import Drawer from '~/components/Drawer/Drawer';

import { IHeaderDrawerProps } from './types';

import scss from './HeaderDrawer.module.scss';

import logoImg from '../../images/logo.png';

import { headerLinks } from '../../data';

function HeaderDrawer(props: IHeaderDrawerProps) {
  const renderLinks = () =>
    headerLinks.map((link) => (
      <li className={scss.linkWrapper} key={`${link.id}_mobile`}>
        <a href={link.href} className={scss.link}>
          {link.label}
        </a>
      </li>
    ));

  return (
    <Drawer
      closeButton
      theme="white"
      direction="right"
      open={props.isOpen}
      onClose={props.onClose}
      className={scss.container}
    >
      <nav className={scss.content}>
        <div className={scss.logoWrapper}>
          <Image fill src={logoImg} alt="Logo da Quality Ergonomia" className={scss.logo} />
        </div>
        <div className={scss.divider} />
        <ul className={scss.linksContainer}>{renderLinks()}</ul>
      </nav>
    </Drawer>
  );
}

export default HeaderDrawer;
