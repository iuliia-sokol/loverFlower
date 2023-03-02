import sprite from '../../images/sprite.svg';
import { BtnElement } from './CloseBtn.styled';

export const CloseBtn = ({
  disabled = false,
  type = 'button',
  onClick = null,
  location,
}) => {
  return (
    <BtnElement
      location={location}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <svg location={location}>
        <use href={sprite + `#modal-close-btn`} />
      </svg>
    </BtnElement>
  );
};
