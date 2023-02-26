import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../pages/SharedLayout/SharedLayout';

const Homepage = lazy(() => import('../pages/Homepage/Homepage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />} />
        {/* <Route path="catalog" element={<CatalogPage />} />
        <Route path="cart" element={<CartPage />} /> */}
      </Route>
    </Routes>
  );
};
