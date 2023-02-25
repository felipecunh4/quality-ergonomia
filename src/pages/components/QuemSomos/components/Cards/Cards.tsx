import { cards } from './data';

import scss from './Cards.module.scss';

function Cards() {
  const renderCards = () =>
    cards.map((card) => (
      <div className={scss.card}>
        <div className={scss.iconWrapper}>
          <card.icon className={scss.icon} />
        </div>
        <div className={scss.descriptionWrapper}>
          <span className={scss.title}>{card.title}</span>
          <p className={scss.description}>{card.description}</p>
        </div>
      </div>
    ));

  return (
    <div className={scss.container}>
      <div className={scss.content}>{renderCards()}</div>
    </div>
  );
}

export default Cards;
