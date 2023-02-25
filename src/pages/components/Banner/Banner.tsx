import scss from './Banner.module.scss';

function Banner() {
  const bgCircleTop = [scss.bgCircle, scss.top];
  const bgCircleBottom = [scss.bgCircle, scss.bottom];
  const orangeDivider = [scss.divider, scss.orange];
  const yellowDivider = [scss.divider, scss.yellow];

  return (
    <section id="home" className={scss.container}>
      <div className={scss.gradient} />
      <div className={bgCircleTop.join(' ')} />
      <div className={scss.content}>
        <div className={orangeDivider.join(' ')} />
        <h1 className={scss.title}>
          Fazemos a{' '}
          <strong className={scss.strong}>
            parte chata <span className={scss.bigger}>do seu negócio!</span>
          </strong>
        </h1>
        <div className={yellowDivider.join(' ')} />
      </div>
      <div className={bgCircleBottom.join(' ')} />
    </section>
  );
}

export default Banner;
