import { BtnElement, Indicator } from './CartButton.styled';
import sprite from '../../images/sprite.svg';
import { useSelector } from 'react-redux';
import { getProducts } from 'redux/cartSelectors';
import { useEffect } from 'react';
import { useState } from 'react';

export const CartBtn = ({
  disabled = false,
  type = 'button',
  onClick = null,
}) => {
  const products = useSelector(getProducts);
  //   console.log(products);

  const [prods, setProds] = useState(0);

  useEffect(() => {
    if (products.length > 0) {
      setProds(products.length);
    }
  }, [products.length]);

  return (
    <BtnElement type={type} disabled={disabled} onClick={onClick}>
      <svg>
        <use href={sprite + `#cart`} />
      </svg>
      <Indicator>{prods}</Indicator>
    </BtnElement>
  );
};
