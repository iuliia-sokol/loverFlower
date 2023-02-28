import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../pages/SharedLayout/SharedLayout';
import { GlobalStyle } from './App.styled';

const Homepage = lazy(() => import('../pages/Homepage/Homepage'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          {/* <Route path="catalog" element={<CatalogPage />} />
        <Route path="cart" element={<CartPage />} /> */}
        </Route>
      </Routes>
    </>
  );
};
