import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AppBarDrawer from './components/AppBar/AppBar';
import Donations from './components/Donations/Donations';
import Donors from './components/Donors/Donors';
import Teachers from './components/Teachers/Teachers';
import Schools from './components/Schools/Schools';
import Home from './components/Home/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppBarDrawer />}>
          <Route path="Home" element={<Home />} />
          <Route path="Schools" element={<Schools />} />
          <Route path="Donations" element={<Donations />} />
          <Route path="Donors" element={<Donors />} />
          <Route path="Teachers" element={<Teachers />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
