import useIsDesktop from '~/hooks/useIsDesktop';

import { servicosData } from './data';

import Card from './components/Card/Card';
import Slider from './components/Slider/Slider';

import scss from './Servicos.module.scss';

function Servicos() {
  const isDesktop = useIsDesktop();

  const renderCards = () =>
    servicosData.map((servico) => <Card key={servico.id} {...servico} className={scss.card} />);

  const renderCardsDesktop = () => <div className={scss.cardsWrapper}>{renderCards()}</div>;

  return (
    <section id="servicos" className={scss.container}>
      <div className={scss.bgCircle} />
      <div className={scss.bgBottom} />
      <div className={scss.content}>
        <h2 className={scss.title}>Serviços</h2>
        {isDesktop ? renderCardsDesktop() : <Slider />}
      </div>
    </section>
  );
}

export default Servicos;
