import { SectionWrapper } from './SectionWrapper.styled';

export const Section = ({ children, style }) => {
  return <SectionWrapper style={style}>{children}</SectionWrapper>;
};
