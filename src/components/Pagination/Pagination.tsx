import { IPaginationProps } from './types';

import scss from './Pagination.module.scss';

function Pagination(props: IPaginationProps) {
  const dotClass = [scss.dot];
  const btnDotClass = [scss.btnDot];

  const handleClick = (value: number) => {
    props.onChangeIndex(value);
  };

  if (props.value === props.currentIndex) {
    dotClass.push(scss.active);
  }

  return (
    <button
      type="button"
      className={btnDotClass.join(' ')}
      onClick={() => handleClick(props.value)}
      aria-label="paginação"
    >
      <div className={dotClass.join(' ')} />
    </button>
  );
}

export default Pagination;
