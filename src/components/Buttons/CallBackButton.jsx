import { BtnElement } from './CallBackButton.styled';

export const CallBackBtn = ({
  text,
  icon,
  disabled = false,
  type = 'button',
  onClick = null,
}) => {
  return (
    <BtnElement type={type} disabled={disabled} onClick={onClick}>
      {icon}
      {text}
    </BtnElement>
  );
};
