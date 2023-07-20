import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Web from '../components/web/web';
import Home from '../components/home/home';

const Routing = () => {
  return (
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/about" element={<Web />} />
        <Route path="/goals" element={<Web />} />
        <Route path="/teams" element={<Web />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
  );
};

export default Routing;
