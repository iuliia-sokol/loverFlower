import { Hero } from 'components/Main/Hero/Hero';
import { Section1 } from 'components/Main/Sec1/Sec1';
import React from 'react';

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Section1 />
    </main>
  );
};

export default React.memo(Homepage);
