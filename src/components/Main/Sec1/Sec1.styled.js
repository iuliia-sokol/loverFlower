import styled from 'styled-components';

export const BgWrapper = styled.div`
  width: 100%;
  position: absolute;
  overflow-y: visible;
  overflow-x: hidden;
  z-index: -2;

  &::before {
    content: '';
    position: absolute;
    overflow: visible;
    left: -5%;
    bottom: 30%;
    width: 148.66px;
    height: 121.38px;
    border-radius: 50%;
    background: #7d2253;
    filter: blur(25px);
    transform: rotate(32.83deg);
    z-index: 0;

    @media screen and (min-width: 768px) {
      width: 707.54px;
      height: 236.87px;
      filter: blur(125px);
    }
  }

  &::after {
    content: '';
    position: absolute;
    overflow: visible;
    width: 130.33px;
    height: 63.54px;
    right: -10%;
    bottom: 40%;
    background: #249479;
    filter: blur(25px);
    transform: rotate(32.83deg);
    z-index: 0;

    @media screen and (min-width: 768px) {
      width: 879.44px;
      height: 211.05px;
      filter: blur(125px);
    }
  }
`;

export const Gradient = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transform: rotate(180deg);
  z-index: -1;
`;

export const BgTextWrapper = styled.div`
  position: relative;
  width: 150%;
  z-index: -3;

  & p:first-child,
  & p:last-child {
    text-align: center;
  }
`;

export const TextBlocksWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;

  & div:first-child {
    width: calc(55% - 60px);
    transform: translateY(-100px);
    z-index: -1;
  }

  & div:nth-child(2) {
    width: calc(35% - 60px);

    & ul {
      padding-left: 12px;
      list-style: circle;
      text-transform: uppercase;
    }
  }

  & div:nth-child(3) {
    width: calc(55% - 60px);
    transform: translateY(-100px);

    & ul {
      padding-left: 12px;
      list-style: circle;
      text-transform: uppercase;
    }
  }

  & div:last-child {
    width: calc(35% - 60px);

    & ul {
      padding-left: 12px;
      list-style: circle;
      text-transform: uppercase;
    }
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 50px;
  font-family: ${p => p.theme.fonts.main};
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.mainLight};
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-radius: ${p => p.theme.radii.blocks};
`;

export const TextBlockHeader = styled.h4`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.accentGreen};
`;

export const CatalogLink = styled.a`
  text-decoration: underline;
  text-align: end;
  color: ${p => p.theme.colors.accentPink};
`;
