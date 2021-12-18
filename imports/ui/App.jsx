import React from 'react';

// Routing
import { Fanmiles } from './pages/Fanmiles'
import { Recipes } from './pages/Recipes'
import { Recipe } from './pages/Recipe'
import { Day } from './pages/Day'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// DataPicker
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// Redux
import { Provider } from 'react-redux'
import { setupStore } from './redux/store'
const store = setupStore()

export const App = () => (
  <div>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Router>
          <Routes>
            <Route path="/" element={<Fanmiles />} />
            <Route path="/day" element={<Day />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipe" element={<Recipe />} />
          </Routes>
        </Router>
      </LocalizationProvider>
    </Provider>
  </div>
);
