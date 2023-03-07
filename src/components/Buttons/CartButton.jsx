import { BtnElement, Indicator } from './CartButton.styled';
import sprite from '../../images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectProducts } from 'redux/cartSelectors';
import { useEffect } from 'react';
import { useState } from 'react';

export const CartBtn = ({
  disabled = false,
  type = 'button',
  onClick = null,
  location,
}) => {
  const products = useSelector(selectProducts);
  //   console.log(products);

  const [prods, setProds] = useState(0);

  useEffect(() => {
    if (products.length > 0) {
      setProds(products.length);
    }
  }, [products.length]);

  return (
    <BtnElement
      location={location}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <svg location={location}>
        <use href={sprite + `#cart`} />
      </svg>
      <Indicator location={location}>{prods}</Indicator>
    </BtnElement>
  );
};
