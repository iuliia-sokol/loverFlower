import { Hero } from 'components/Main/Hero/Hero';
import React from 'react';

const Homepage = () => {
  return (
    <main>
      <Hero />
    </main>
  );
};

export default React.memo(Homepage);
