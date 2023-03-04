import { CSSProperties, UIEvent, useState } from 'react';

import Drawer from '~/components/Drawer/Drawer';
import Modal from '~/components/Modal/Modal';
import useIsDesktop from '~/hooks/useIsDesktop';

import { ICardProps } from './types';

import scss from './Card.module.scss';

import CloseSVG from './images/close.svg';

const SCROLL_TO_SHOW_PERCENTAGE = 100;

function Card(props: ICardProps) {
  const isDesktop = useIsDesktop();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [readingPercentage, setReadingPercentage] = useState(0);

  const cardClass = [scss.card];
  const scrollProgressWrapperClass = [scss.scrollProgressWrapper];

  const getScrollPercentage = () => {
    const style: CSSProperties = {
      width: `${readingPercentage}%`,
    };

    return style;
  };

  const onDrawerScroll = (event: UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const { offsetHeight, scrollTop, scrollHeight } = target;
    let percentage = ((offsetHeight + scrollTop) * 100) / scrollHeight;
    percentage = Math.round(percentage);

    setIsScrolled(scrollTop > SCROLL_TO_SHOW_PERCENTAGE);
    setReadingPercentage(percentage);
  };

  const renderScrollProgress = () => (
    <div className={scrollProgressWrapperClass.join(' ')}>
      <div className={scss.scrollTitleWrapper}>
        <p className={scss.scrollTitle}>{props.title}</p>
        <CloseSVG className={scss.close} onClick={() => setIsOpen(false)} />
      </div>
      <div style={getScrollPercentage()} className={scss.scrollProgress} />
    </div>
  );

  const renderContent = () => (
    <>
      <h3 className={scss.modalTitle}>{props.title}</h3>
      <p className={scss.modalDescription}>{props.fullText}</p>
    </>
  );

  const renderModalDesktop = () => (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className={scss.modal}>
      {renderContent()}
    </Modal>
  );

  const renderDrawerMobile = () => (
    <Drawer
      fullScreen
      closeButton
      theme="white"
      direction="bottom"
      open={isOpen}
      className={scss.modal}
      onClose={() => setIsOpen(false)}
      onScroll={(e) => onDrawerScroll(e)}
    >
      {renderScrollProgress()}
      {renderContent()}
    </Drawer>
  );

  if (props.className) cardClass.push(props.className);
  if (props.invertTheme) cardClass.push(scss.invertTheme);
  if (isScrolled) scrollProgressWrapperClass.push(scss.scrolled);

  return (
    <>
      <div className={cardClass.join(' ')}>
        <props.icon className={scss.icon} />
        <h3 className={scss.cardTitle}>{props.title}</h3>
        <p className={scss.cardDescription}>{props.fullText}</p>
        <button type="button" className={scss.readMoreBtn} onClick={() => setIsOpen(true)}>
          Leia mais
        </button>
      </div>
      {isDesktop ? renderModalDesktop() : renderDrawerMobile()}
    </>
  );
}

export default Card;
