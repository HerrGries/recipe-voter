import React from 'react';
import { Home } from './pages/Home'
import { Recipes } from './pages/Recipes'
import { Recipe } from './pages/Recipe'
import { Day } from './pages/Day'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day" element={<Day />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </Router>
  </div>
);
