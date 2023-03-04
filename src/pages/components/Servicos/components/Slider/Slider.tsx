/* eslint-disable import/no-unresolved */
import { useRef, useState } from 'react';
import { useIntersection, useIsomorphicLayoutEffect } from 'react-use';

import Pagination from '~/components/Pagination/Pagination';
import useIsDesktop from '~/hooks/useIsDesktop';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';

import Card from '../Card/Card';

import scss from './Slider.module.scss';

import ArrowSVG from './images/arrow.svg';

import { servicosData } from '../../data';

SwiperCore.use([Navigation]);

const INTERSECTION_OPTIONS = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

function Slider() {
  const contentRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const intersection = useIntersection(contentRef, INTERSECTION_OPTIONS);

  const [timer, setTimer] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intersectionEnabled, setIntersectionEnabled] = useState(true);
  const [swipe, setSwipe] = useState<SwiperClass>({} as SwiperClass);

  const TOTAL_SLIDES = servicosData.length;
  const leftButton = [scss.button, scss.leftButton];

  const handleNext = () => {
    if (swipe.isEnd) {
      swipe.slideTo(0);
    } else {
      swipe.slideNext();
    }
  };

  const onPrevClick = () => {
    setTimer(false);
    setIntersectionEnabled(false);

    swipe.slidePrev();
  };

  const onNextClick = () => {
    setTimer(false);
    setIntersectionEnabled(false);

    handleNext();
  };

  const renderDots = () =>
    Array(TOTAL_SLIDES)
      .fill(1)
      .map((value, idx) => value + idx)
      .map((key, idx) => (
        <Pagination
          key={key}
          value={idx}
          currentIndex={currentSlide}
          onChangeIndex={(nextSlide: number) => {
            setCurrentSlide(nextSlide);
            swipe.slideTo(nextSlide);
          }}
        />
      ));

  const renderNavigationButtons = () => {
    return (
      <div className={scss.navigationWrapper}>
        <button type="button" className={leftButton.join(' ')} onClick={onPrevClick}>
          <ArrowSVG className={scss.icon} />
        </button>
        {renderDots()}
        <button type="button" className={scss.button} onClick={onNextClick}>
          <ArrowSVG className={scss.icon} />
        </button>
      </div>
    );
  };

  useIsomorphicLayoutEffect(() => {
    if (!isDesktop && intersection && intersection.isIntersecting && intersectionEnabled) {
      setTimer(true);
    }
  }, [intersection]);

  return (
    <div className={scss.container} ref={contentRef}>
      <Swiper
        className={scss.swiperWrapper}
        slidesPerView={1.1}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        onBeforeInit={(swipper) => setSwipe(swipper)}
        centerInsufficientSlides
      >
        {servicosData.map((servico) => (
          <SwiperSlide className={scss.swipe} key={servico.id}>
            <Card className={scss.card} {...servico} invertTheme={servico.id % 2 === 0} />
          </SwiperSlide>
        ))}
      </Swiper>
      {timer && <span className={scss.progressBar} onAnimationIteration={handleNext} />}
      <div className={scss.stepperContainer}>{renderNavigationButtons()}</div>
    </div>
  );
}

export default Slider;
