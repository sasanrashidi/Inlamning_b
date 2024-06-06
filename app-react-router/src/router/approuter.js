import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Page1 from '../pages/page1';
import {Musicalbums} from '../pages/musicalbums'; // Import your musicalbums page component from the pages directory
import {Form} from '../pages/form';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/musicalbums" element={<Musicalbums />} />
      <Route path="/form/:id" element={<Form />} />
    </Routes>
  );
}
