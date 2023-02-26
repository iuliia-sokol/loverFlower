import { LoaderOverlay, LoaderWrapper, PicWrapper } from './Loader.styled';

import red from '../../images/loader/flow-red-min.png';
import yellow from '../../images/loader/flow-yellow-min.png';
import pink from '../../images/loader/flow-pink-min.png';

export const Loader = () => {
  return (
    <LoaderOverlay>
      <LoaderWrapper>
        <PicWrapper>
          <img src={red} alt="red flower" loading="lazy" />
          <img src={yellow} alt="yellow flower" loading="lazy" />
          <img src={pink} alt="pink flower" loading="lazy" />
        </PicWrapper>
      </LoaderWrapper>
    </LoaderOverlay>
  );
};
