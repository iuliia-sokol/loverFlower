import sprite from '../../images/sprite.svg';
import { BtnElement } from './BurgerBtn.styled';

export const BurgerBtn = ({
  disabled = false,
  type = 'button',
  onClick = null,
}) => {
  return (
    <BtnElement type={type} disabled={disabled} onClick={onClick}>
      <svg>
        <use href={sprite + `#menu`} />
      </svg>
    </BtnElement>
  );
};
